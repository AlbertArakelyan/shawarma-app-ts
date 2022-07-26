import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Services
import { Auth } from '../../services';

// Types
import { ISignUpData, ISignInData } from '../../types/auth';

// Models
import { UserModel } from '../../models';

// Action types
import { SIGN_UP, SIGN_IN, GET_USER } from './user.actionTypes';


export const signUp = createAsyncThunk<UserModel | void, ISignUpData>(
  SIGN_UP,
  async (data: ISignUpData, { rejectWithValue }) => {
    try {
      return (await Auth.signUp(data)) as UserModel;
    } catch (e: any) {
      console.log(e);
      toast.error(e.message);
      rejectWithValue(e.message);
    }
  },
);

export const signIn = createAsyncThunk<UserModel | void, ISignInData>(
  SIGN_IN,
  async (data: ISignInData, { rejectWithValue }) => {
    try {
      return (await Auth.signIn(data)) as UserModel;
    } catch (e: any) {
      console.log(e);
      toast.error(e.message);
      rejectWithValue(e.message);
    }
  },
);

export const getUser = createAsyncThunk<UserModel | void>(
  GET_USER,
  async (_, { rejectWithValue }) => {
    try {
      if (!Auth.userId) {
        throw new Error('No logged in user.');
      }

      return await Auth.getUser(Auth.userId);
    } catch (e: any) {
      console.log(e);
      toast.error(e.message);
      rejectWithValue(e.message);
    }
  },
);

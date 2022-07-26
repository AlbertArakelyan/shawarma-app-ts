import { createReducer } from '@reduxjs/toolkit';

// Types
import { IUserState } from './types';

// Actions
import { signIn, signUp, getUser } from './user.actions';
import { UserModel } from "../../models";


const initialState: IUserState = {
  user: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signUp.fulfilled, (state, { payload }) => {
      state.user = payload as UserModel | null;
    })
    .addCase(signIn.fulfilled, (state, { payload }) => {
      state.user = payload as UserModel | null;
    })
    .addCase(getUser.fulfilled, (state, { payload }) => {
      state.user = payload as UserModel | null;
    })
    .addDefaultCase((state) => state);
});

export default userReducer;

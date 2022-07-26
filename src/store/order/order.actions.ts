import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

// Action Types
import { CREATE_ORDER, UPDATE_ORDER_SUMMARY, GET_ORDERS } from './order.actionTypes';

// Types
import { IOrderDetailsData, ModifiedOrderType } from '../../types/order';

// Services
import { Order, Auth } from '../../services';

// Models
import { OrderModel } from '../../models';

export const createOrder = createAsyncThunk<ModifiedOrderType | void, OrderModel>(
  CREATE_ORDER,
  async (data: OrderModel, { rejectWithValue }) => {
    try {
      if (!Auth.userId) {
        throw new Error('No logged in user');
      }

      const newOrder = await Order.createOrder(data, Auth.userId);

      toast.success('Ձեր պատվերը հաջողությամբ կատարված է։');

      return newOrder;
    } catch (e: any) {
      console.log(e);
      toast.error(e.message);
      rejectWithValue(e.message);
    }
  },
);

export const getOrders = createAsyncThunk<ModifiedOrderType[] | void>(
  GET_ORDERS,
  async (_, { rejectWithValue }) => {
    try {
      return  await Order.getOrders();
    } catch (e: any) {
      console.log(e);
      toast.error(e.message);
      rejectWithValue(e.message);
    }
  },
);

export const updateOrderSummary = createAction<IOrderDetailsData>(UPDATE_ORDER_SUMMARY);

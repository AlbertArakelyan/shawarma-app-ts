import { createReducer } from '@reduxjs/toolkit';

// Types
import { IOrderState } from './types';

// Actions
import { createOrder, updateOrderSummary, getOrders } from './order.actions';
import { ModifiedOrderType } from "../../types/order";


const initialState: IOrderState = {
  orders: [],
  myOrders: [],
  orderSummary: {
    size: 'Մեծ',
    exceptions: [],
  },
};

const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createOrder.fulfilled, (state, { payload }) => {
      state.myOrders.unshift(payload as ModifiedOrderType);
    })
    .addCase(updateOrderSummary, (state, { payload }) => {
      state.orderSummary = payload;
    })
    .addCase(getOrders.fulfilled, (state, { payload }) => {
      // @ts-ignore
      state.orders = payload as ModifiedOrderType;
    })
    .addDefaultCase((state) => state);
});

export default orderReducer;

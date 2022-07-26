import userReducer from './user/user.reducer';
import orderReducer from './order/order.reducer';

const reducers = {
  user: userReducer,
  order: orderReducer,
};

export default reducers;

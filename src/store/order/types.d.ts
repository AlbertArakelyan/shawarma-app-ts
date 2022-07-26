import { IOrderDetailsData, ModifiedOrderType } from '../../types/order';

interface IOrderState {
  orders: ModifiedOrderType[];
  myOrders: ModifiedOrderType[];
  orderSummary: IOrderDetailsData;
}

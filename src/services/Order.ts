import { getDatabase, ref, set, get, push, child } from 'firebase/database';
import moment from 'moment';

// Models
import { OrderModel } from '../models';

// Types
import { ModifiedOrderType } from '../types/order';

// Constants
import { defaultDateFormat } from '../constants';

import Api from './Api';
import UserService from './User';

const db = getDatabase();

class Order extends Api {
  static async createOrder(order: OrderModel, userId: string) {
    try {
      const path = `orders/${moment().format(defaultDateFormat)}`;
      const orderList = ref(db, path);
      const newOrderRef = push(orderList);
      const creator = await UserService.getUser(userId);

      const newOrder = {
        ...order,
        creator,
      };

      await set(newOrderRef, newOrder);

      if (!newOrderRef.key) {
        throw new Error('No order created.');
      }

      return await this.getOrder(newOrderRef.key);
    } catch (e) {
      super.catchError(e);
    }
  }

  static async getOrder(orderId: string): Promise<ModifiedOrderType | void> {
    try {
      const orderRef = ref(db);
      const snapshot = await get(child(orderRef, `orders/${moment().format(defaultDateFormat)}/${orderId}`));

      return super.transformData([orderId, snapshot.val()]);
    } catch (e) {
      super.catchError(e);
    }
  }

  static async getOrders(): Promise<ModifiedOrderType[] | void> {
    try {
      const orderRef = ref(db);
      const snapshot = await get(child(orderRef, `orders/${moment().format(defaultDateFormat)}`));

      if (!snapshot.val()) {
        throw new Error('Այսօր ոչմի պատվեր չի գրանցվել։');
      }

      // const orders = Object.entries(snapshot.val()).map(super.transformData);
      const orders = this.transformOrders(snapshot.val());

      return orders as ModifiedOrderType[];
    } catch (e) {
      super.catchError(e);
    }
  }

  static transformOrders(orders: any) {
    return Object.entries(orders).map((order: [string, any]) => {
      if (!order[1].exceptions) {
        order[1].exceptions = [];
      }

      return super.transformData(order);
    });
  }
}

export default Order;

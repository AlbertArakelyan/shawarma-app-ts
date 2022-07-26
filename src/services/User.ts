import { getDatabase, ref, set, get } from "firebase/database";
import {
  getAuth,
} from 'firebase/auth';
import '../utils/firebase';

// Models
import { UserModel } from '../models';

import Api from './Api';

const auth = getAuth();
const db = getDatabase();

class User extends Api {
  static async createUser(user: UserModel): Promise<UserModel | void> {
    try {
      await set(ref(db, `users/${user.id}`), user);

      return await this.getUser(user.id);
    } catch (e) {
      super.catchError(e);
    }
  }

  static async getUser(id: string): Promise<UserModel | void> {
    try {
      const snapshot = await get(ref(db, `users/${id}`));
      return await snapshot.val();
    } catch (e) {
      super.catchError(e);
    }
  }

  static get userId() {
    return auth.currentUser?.uid;
  }
}

export default User;

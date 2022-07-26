import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import '../utils/firebase';

// Types
import { ISignUpData, ISignInData } from '../types/auth';

// Models
import { UserModel } from '../models';

import UserService from './User';


const auth = getAuth();

class Auth extends UserService {
  static async signUp(signUpData: ISignUpData): Promise<UserModel | any> {
    try {
      const {
        email,
        password,
        firstName,
        lastName,
      } = signUpData;

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const { user } = userCredential;

      const newUser = new UserModel(user.uid, firstName, lastName, email, 'user');

      return await this.createUser(newUser);
    } catch (e) {
      super.catchError(e);
    }
  }

  static async signIn(signInData: ISignInData): Promise<UserModel | any> {
    try {
      const { email, password } = signInData;

      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const { user } = userCredential;

      return await this.getUser(user.uid);
    } catch (e) {
      super.catchError(e);
    }
  }
}

export default Auth;

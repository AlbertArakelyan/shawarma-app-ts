import { User } from 'firebase/auth';

type user = User | null;

interface IUseAuth {
  user: user;
  isLoading: boolean;
}

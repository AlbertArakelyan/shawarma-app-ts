import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

import { user, IUseAuth } from './types';

const useAuth = (): IUseAuth => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<user>(null);

  useEffect(() => {
      return getAuth().onAuthStateChanged((user) => {
        setUser(user);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, user };
};

export default useAuth;

import React, {useEffect} from 'react';
import {useAuth} from '../../context';
import {Loader} from '../Loader';

export const Logout = () => {
  const {signOut} = useAuth();

  useEffect(() => {
    signOut();
  }, [signOut]);

  return <Loader />;
};

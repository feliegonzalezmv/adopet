import React from 'react';
import {AuthProvider} from './AuthContext';
import {NativeBaseProvider} from 'native-base';

export const Context = ({children}) => {
  return (
    <AuthProvider>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </AuthProvider>
  );
};

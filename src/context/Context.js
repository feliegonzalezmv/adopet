import React from 'react';
import {AuthProvider} from './AuthContext';
import {NativeBaseProvider} from 'native-base';
import {PetsProvider} from './PetsContext';

export const Context = ({children}) => {
  return (
    <AuthProvider>
      <PetsProvider>
        <NativeBaseProvider>{children}</NativeBaseProvider>
      </PetsProvider>
    </AuthProvider>
  );
};

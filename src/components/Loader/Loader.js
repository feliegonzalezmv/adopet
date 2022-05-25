import React from 'react';
import {Center, Spinner} from 'native-base';

export const Loader = () => (
  <Center flex={1}>
    <Spinner size="lg" />
  </Center>
);

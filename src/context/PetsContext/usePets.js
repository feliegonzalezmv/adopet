import {useContext} from 'react';
import {PetsContext} from './PetsContext';

export const usePets = () => {
  const context = useContext(PetsContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthContext');
  }

  return context;
};

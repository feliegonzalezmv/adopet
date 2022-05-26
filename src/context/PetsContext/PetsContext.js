import React, {useState, createContext} from 'react';
import firestore from '@react-native-firebase/firestore';

export const PetsContext = createContext(undefined);

export const PetsProvider = ({children}) => {
  const [pets, setPets] = useState([]);
  const [loader, setLoader] = useState(false);

  const getPets = async () => {
    setLoader(true);
    const data = await firestore().collection('pets').get();
    const newPets = data.docs.reduce(
      (acc, doc) => [...acc, {...doc.data(), id: doc.id}],
      [],
    );
    setPets(newPets);
    setLoader(false);
  };

  return (
    <PetsContext.Provider value={{getPets, pets, loader}}>
      {children}
    </PetsContext.Provider>
  );
};

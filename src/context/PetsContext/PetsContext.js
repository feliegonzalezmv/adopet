import React, {useState, createContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useToast} from 'native-base';
import {Alert} from '../../components';

export const PetsContext = createContext(undefined);

export const PetsProvider = ({children}) => {
  const {show} = useToast();
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
    console.log('newPets', newPets);
  };

  const sendRequestPet = async (petId, idUser) => {
    setLoader(true);

    await firestore()
      .collection('adoptionRequest')
      .add({pet: firestore().doc(`pets/${petId}`), idUser})
      .then(() =>
        show({
          render: () => (
            <Alert
              status={{title: 'Your request was send!', status: 'success'}}
            />
          ),
          placement: 'top',
        }),
      )
      .catch(() =>
        show({
          render: () => (
            <Alert
              status={{
                title: 'Ups, we cant send the request!',
                status: 'error',
              }}
            />
          ),
          placement: 'top',
        }),
      )
      .finally(() => setLoader(false));
  };

  return (
    <PetsContext.Provider value={{getPets, pets, loader, sendRequestPet}}>
      {children}
    </PetsContext.Provider>
  );
};

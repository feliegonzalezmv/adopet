import React, {useState, useCallback, useEffect, createContext} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext(undefined);

export const AuthProvider = ({children}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const onAuthStateChanged = useCallback(
    newUserData => {
      setUser(newUserData);
      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  const loginWithEmail = ({email, password}) => {
    auth().signInWithEmailAndPassword(email, password);
  };

  const signUpWithEmail = ({email, password}) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user: newUserData}) => {
        setUser(newUserData);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const signOut = () => auth().signOut();

  return (
    <AuthContext.Provider
      value={{initializing, user, loginWithEmail, signUpWithEmail, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

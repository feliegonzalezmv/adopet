import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './src/views/navigator/DrawerNavigator';
import DetailsScreen from './src/views/screens/DetailsScreen';
import LoginScreen from './src/views/screens/LoginScreen';
import {useAuth} from './src/context';
import {Loader} from './src/components';

const Stack = createNativeStackNavigator();

const App = () => {
  const {initializing, user} = useAuth();
  const initialRouteName = user ? 'HomeScreen' : 'LoginScreen';

  if (initializing) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={initialRouteName}>
        {user ? (
          <>
            <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          </>
        ) : (
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

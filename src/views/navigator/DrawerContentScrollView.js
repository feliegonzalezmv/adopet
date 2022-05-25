import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Image, Text} from 'react-native';
import COLORS from '../../const/colors';
import {useAuth} from '../../context';

const CustomDrawerContent = props => {
  const {user} = useAuth();
  return (
    <DrawerContentScrollView
      style={{
        paddingVertical: 30,
      }}>
      <View
        style={{
          marginLeft: 20,
          marginVertical: 40,
        }}>
        <Image
          source={require('../../assets/person.jpg')}
          style={{height: 70, width: 70, borderRadius: 20}}
        />
        <Text
          style={{
            color: COLORS.white,
            fontWeight: 'bold',
            fontSize: 13,
            marginTop: 10,
          }}>
          {user?.email}
        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

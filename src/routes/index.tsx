import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import VisaoGeral from '../screens/VisaoGeral';
import NovaEntrega from '../screens/NovaEntrega';

export type RootStackParamList = {
  Login: undefined;
  VisaoGeral: undefined;
  NovaEntrega: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="VisaoGeral" component={VisaoGeral} />
        <Stack.Screen name="NovaEntrega" component={NovaEntrega} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
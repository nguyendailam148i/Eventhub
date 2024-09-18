import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      {/* <Stack.Screen name='HomeScreen' component={HomeScreen} /> */}
    </Stack.Navigator>
  );
}

export default AuthNavigator
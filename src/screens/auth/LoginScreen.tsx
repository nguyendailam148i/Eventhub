import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = () => {
  return (
    <View>
      <Text style=
        {{ backgroundColor: 'red' }}>LoginScreen</Text>
      <Button title='login' onPress={async () => {
        await AsyncStorage.setItem('assetToken', '123455')
      }} />
    </View>
  )
}

export default LoginScreen
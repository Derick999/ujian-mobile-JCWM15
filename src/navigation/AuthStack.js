import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { LoginScreen } from '../screen/auth';

const Stack = createStackNavigator()

const AuthStack = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name='Login' component={LoginScreen}/>
      </Stack.Navigator>
   )
}

export default AuthStack

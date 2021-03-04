import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux';
import {HomeDrawer, AuthStack, HomeNavigator} from './index';
import {keepLogin} from '../redux/action'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screen/pages/Splash';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const Main = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(keepLogin())
   },[])
   const {isSignedIn} = useSelector((state) => state.authReducer)
   return <> 
   {
      isSignedIn ? <HomeDrawer/> : <AuthStack/>
   }
   </>
}

const Router = () => {
   return (
      <Stack.Navigator initialRouteName="Splash">
         <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false}}/>
         <Stack.Screen name='Main' component={Main} options={{ headerShown: false
         }}/>
      </Stack.Navigator>
   )
}

export default Router

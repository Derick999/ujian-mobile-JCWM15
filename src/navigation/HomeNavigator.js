import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text } from 'react-native'
import { HomeScreen } from '../screen/pages'

const Tab = createBottomTabNavigator()

const BottomNavigator = () => {
   return (
     <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Date' component={HomeScreen}/>
     </Tab.Navigator>
   )
}

export default BottomNavigator

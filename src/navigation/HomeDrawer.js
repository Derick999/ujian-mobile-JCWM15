import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import {BottomNavigator} from './index'

const Drawer = createDrawerNavigator()

const HomeDrawer = () => {
   return (
      <Drawer.Navigator>
         <Drawer.Screen name='Home' component={BottomNavigator}/>
         <Drawer.Screen name='Profile' component={BottomNavigator}/>
      </Drawer.Navigator>
   )
}

export default HomeDrawer

const styles = StyleSheet.create({})

import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { SplashScreen } from '../../assets'

const Splash = ({navigation}) => {

   useEffect(() => {
      setTimeout( () => {
         navigation.replace('Main');
      }, 3000)
   },[navigation]);

      return (
         <ImageBackground source={SplashScreen} style={styles.background}>
         </ImageBackground>
      ) 
}

export default Splash

const styles = StyleSheet.create({
   background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center' 
   }
})

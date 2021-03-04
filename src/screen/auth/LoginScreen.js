import { Item, Label, Input, Button} from 'native-base';
import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import { WARNA_PUTIH } from '../../../utils/constant';
import { authSignAction } from '../../redux/action';

const LoginScreen = () => {
   const dispatch = useDispatch()
   const [username, setUsername] = useState(null)
   const [password, setPassword] = useState(null)
   const handleUsernameInput = (e) => {
      setUsername(e)
      console.log(username)
   } 
   const handlePasswordInput = (e) => {
      setPassword(e)
      console.log(password)
   }
   const handleBtnLogin = () => {
      const userData = {
         username, password
      }
      dispatch(authSignAction)
   }
  return (
    <View style={styles.page}>
      <View style={styles.inputContainer}>
      <Item stackedLabel>
        <Label>Username</Label>
        <Input onChangeText={handleUsernameInput} placeholder="Username"/>
      </Item>
      </View>
      <View style={styles.inputContainer1}>
      <Item stackedLabel>
        <Label>Password</Label>
        <Input secureTextEntry onChangeText={handlePasswordInput} placeholder="Password"/>
      </Item>
      </View>
      <Button onPress={handleBtnLogin} style={styles.button}>
         <Text style={styles.textStyle}>Login</Text>
      </Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
   page: {
      flex: 0.75
   },
   button: {
      borderRadius: 10,
      marginVertical: 20,
      marginLeft: 135,
      width: 120,
      alignItems: 'center'
   },
   textStyle: {
      fontSize: 20,
      color: WARNA_PUTIH,
      textAlign: 'center',
      marginStart: 35,
   },

})



import { View, Text,StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Input,Icon,Button, color } from "@rneui/base";
import {ingreso,cerrarSesion} from '../services/AutenticacionSrv'

export const LoginForm = () => {
    const [email,setEmail]=useState(null);
    const [clave,setClave]=useState(null);

    const validarLogin=()=>{
        console.log('validando....');
        ingreso(email,clave);
    }
  return (
    <View style={styles.container}>
    
    <Input
      placeholder='Ingrese un email'
      value={email}
      onChangeText={setEmail}
      label='Email'
      labelStyle={{color:'#517fa4',fontWeight:'300'}}
      leftIcon={{ type: 'antdesign', name: 'barcode' }}
      />
        <Input
      placeholder='Ingrese una contraseña'
      value={clave}
      onChangeText={setClave}
      label='Contraseña'
      labelStyle={{color:'#517fa4',fontWeight:'300'}}
      leftIcon={{ type: 'antdesign', name: 'barcode' }}
      />
            <Button
      color='#37B59B'
      onPress={validarLogin}
      buttonStyle={{width:300,marginHorizontal:40,paddingHorizontal:80,paddingVertical:10,justifyContent:'space-evenly',borderRadius:15}}
      >
        Login
        <Icon  name='save' type='feather' color='white' />
      </Button>
      <Button
      color='#37B59B'
      onPress={cerrarSesion}
      buttonStyle={{width:300,marginHorizontal:40,paddingHorizontal:80,paddingVertical:10,justifyContent:'space-evenly',borderRadius:15}}
      >
        Sign Out
        <Icon  name='save' type='feather' color='white' />
      </Button>
    </View>
  )
}

export default LoginForm
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
  });
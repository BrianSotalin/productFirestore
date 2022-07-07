import { View, Text,StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Input,Icon,Button, color } from "@rneui/base";
import {ingreso} from '../services/AutenticacionSrv'


export const LoginForm = () => {
    const [email,setEmail]=useState(null);
    const [clave,setClave]=useState(null);
    const [errorUser,setErrorUser]=useState();
    const [errorPsswd,setErrorPsswd]=useState();

    const validarLogin=()=>{
      validacion();
        console.log('validando....');
        ingreso(email,clave);
        console.log('Ususario: ',email)
    }
    const validacion =()=>{
      if(email==null){
        setErrorUser('Debe ingresar un email')
      }else{
        setErrorUser('Email y/o clave incorrecta')
      }
      if(clave==null){
        setErrorPsswd('Debe ingresar una clave')
      }else{
        setErrorPsswd('Email y/o clave incorrecta')
      }
    }
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center',justifyContent:'center',marginBottom:30}}>
      <Text style={{color:'#37B59B' ,fontSize:30,fontWeight:'100',justifyContent:'center',alignContent:'center'}}>
        S O T A SHOP 
        <Icon  name='shop' type='entypo' color='#37B59B' size={30}/>
        </Text>
      </View>
         
    <Input
      placeholder='Ingrese un email'
      value={email}
      onChangeText={setEmail}
      label='Email'
      labelStyle={{color:'#517fa4',fontWeight:'300'}}
      leftIcon={{ type: 'fontisto', name: 'email' ,color:'#517fa4'}}
      errorMessage={errorUser}
      />
        <Input
      placeholder='Ingrese una contraseña'
      value={clave}
      onChangeText={setClave}
      label='Contraseña'
      labelStyle={{color:'#517fa4',fontWeight:'300'}}
      leftIcon={{ type: 'material-community', name: 'onepassword',color:'#517fa4' }}
      errorMessage={errorPsswd}
      />
            <Button
      color='white'
      type='outline'
      onPress={validarLogin}
      buttonStyle={{width:300,marginHorizontal:40,paddingHorizontal:80,
        paddingVertical:10,justifyContent:'space-evenly',borderRadius:15,borderColor:'#37B59B'}}
        titleStyle={{color:'#37B59B'}}
      >
        Login
        <Icon  name='login' type='antdesign' color='#37B59B' />
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
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{cargarConfig} from './app/utils/FirebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ProductForm} from './app/screens/ProductForm';
import {ListaProduct} from './app/screens/ListaProduct';
import {LoginForm} from './app/screens/Login';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const LoginNav = () =>{
  return (
    <LoginStack.Navigator>
    <LoginStack.Screen name='LoginFormNav' component={LoginForm} options={{headerShown:false}}></LoginStack.Screen>
  </LoginStack.Navigator>
  );
}
const ProductNav = ()=>{
  return(
<Stack.Navigator 
   screenOptions={{
    headerStyle: {
      backgroundColor: '#517fa4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '300',
    },
  }}
   >
    <Stack.Screen name='ListaFormNav' component={ListaProduct}  options={{ title: 'Listado de productos' }}></Stack.Screen>
    <Stack.Screen name='ProductFormNav' component={ProductForm}  options={{ title: 'Registro de productos' }}></Stack.Screen>
   </Stack.Navigator>
  );
}

export default function App() {
  const [login,setLogin]=useState(false);
  cargarConfig();
  const registrarObserver = ()=>{
    const auth = getAuth();
    if(!global.CierreObserver){
      global.CierreObserver=onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log('Estado: SIGN IN')
          setLogin(true);
          // ...
        } else {
          // User is signed out
          console.log('Estado: SING OUT')
          setLogin(false);
          // ...
        }
      });
    }
    
    }
  registrarObserver();
  return (
  <NavigationContainer>
    {login?<ProductNav/>:<LoginNav/>}
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

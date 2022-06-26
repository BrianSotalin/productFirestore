import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{cargarConfig} from './app/utils/FirebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ProductForm} from './app/screens/ProductForm';

const Stack = createNativeStackNavigator();


export default function App() {
  cargarConfig();
  return (
  <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name='ProductFormNav' component={ProductForm}></Stack.Screen>
   </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

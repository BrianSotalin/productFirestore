import { View, Text,StyleSheet } from 'react-native'
import React, { useState} from 'react'
import { Input,Icon,Button } from "@rneui/base";
import {guardar} from '../services/ProductSrv'

export const ProductForm = () => {
    const [codigo,setCodigo]=useState();
    const [producto,setProducto]=useState();
    const [categoria,setCategoria]=useState();
    const [precio,setPrecio]=useState();

const save =()=>{
    console.log('working button-save');
    guardar({
      codigo:codigo,
      producto:producto,
      //Categoria:categoria,
      precio:parseFloat(precio)
    })
    clean();
}
const clean =()=>{
  setCodigo(null);
  setProducto(null);
  setPrecio(null)
}
  return (
    <View style={styles.container}>
      <Text style={{marginTop:40,fontWeight:'bold',fontSize:25,color:'#517fa4'}}>Ingresa tu producto </Text>
        <Text style={{marginBottom:30}}>
        <Icon
        name='shopping-bag'
        type='entypo'
        color='#517fa4'
        size={50}
      /></Text>

       <Input
      placeholder='Codigo del producto'
      value={codigo}
      onChangeText={setCodigo}
      label='Codigo'
      keyboardType='numeric'
      leftIcon={{ type: 'antdesign', name: 'barcode' }}
      
      />
        <Input
      placeholder='Ingresar producto'
      value={producto}
      onChangeText={setProducto}
      label='Producto'
      leftIcon={{ type: 'antdesign', name: 'shoppingcart' }}
      />
         {/* <Input
      placeholder='Ingresar categoria'
      value={categoria}
      onChangeText={setCategoria}
      label='Categoria'
      leftIcon={{ type: 'antdesign', name: 'shoppingcart' }}
      /> */}
        <Input
      placeholder='Ingresar precio'
      value={precio}
      onChangeText={setPrecio}
      label='Precio'
      keyboardType='numeric'
      leftIcon={{ type: 'entypo', name: 'price-tag' }}
      /> 
          <Button
      color='#517fa4'
      onPress={save}
      buttonStyle={{width:120,marginHorizontal:20,paddingVertical:10,justifyContent:'space-evenly',borderRadius:15}}
      >
        Guardar 
        <Icon  name='save' type='feather' color='white' />
      </Button>
      
    </View>
  )
}

export default ProductForm

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });
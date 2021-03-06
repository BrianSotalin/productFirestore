import { View, Text,StyleSheet } from 'react-native'
import React, { useState} from 'react'
import { Input,Icon,Button, color } from "@rneui/base";
import {guardar} from '../services/ProductSrv'
import {doc,getDoc} from 'firebase/firestore';

export const ProductForm = ({navigation,route}) => {
  let isNew=true;
  let productM;
  let precioM;
  let codigoM;
  let categoriaM;
  let btnSave;
  let btnMod
  console.log('PRODUCTO: ',route.params.product);
  if(route.params.product!=null){
    isNew=false;
}
if(!isNew){
 codigoM=route.params.product.codigo;
 productM=route.params.product.producto;
 categoriaM=route.params.product.categoria;
 precioM=route.params.product.precio;
 btnMod=1;
 btnSave=0;
}else{
  btnSave=1;
  btnMod=0;
}

    const [codigo,setCodigo]=useState(codigoM);
    const [producto,setProducto]=useState(productM);
    const [categoria,setCategoria]=useState(categoriaM);
    const [precio,setPrecio]=useState(precioM==null?null:precioM+'');
    const [errorCodigo,setErrorCodigo]=useState();
    const [errorProducto,setErrorProducto]=useState();
    const [errorCategoria,setErrorCategoria]=useState();
    const [errorPrecio,setErrorPrecio]=useState();
    let hasError =false;
 
const save = async ()=>{
    console.log('working button-save');
    refreshError();
    validacion();
    const refUser=doc(global.dbCon,'Productos',codigo);
    const userSnap=await getDoc(refUser);
    // if(!isNew){

    // }else{

    // }
    if(userSnap.exists()){
      console.log('Producto repetido: ',userSnap.data())
      setErrorCodigo('Codigo ya registrado')
      hasError=true;
    }else{
      console.log('producto nuevo');
      if(!hasError){
        guardar({
          codigo:codigo,
          producto:producto,
          categoria:categoria,
          precio:parseFloat(precio)
        })
        clean();
        navigation.goBack();
        if(route.params && route.params.fnRepintarLista){
          route.params.fnRepintarLista();
        }
       
      }
    }
}
const modificar=()=>{
  console.log('working button-mode');
  refreshError();
  validacion();
  if(!hasError){
    guardar({
      codigo:codigo,
      producto:producto,
      categoria:categoria,
      precio:parseFloat(precio)
    })
    clean();
    navigation.goBack();
    if(route.params && route.params.fnRepintarLista){
      route.params.fnRepintarLista();
    }
   
  }
}
const validacion= ()=>{

  if(codigo==null || codigo=="" ){
    setErrorCodigo('Debe ingresar un codigo');
    hasError=true;
  }
  if(producto==null || producto=="" ){
    setErrorProducto('Debe ingresar un producto');
    hasError=true;
  }
  if(categoria==null || categoria=="" ){
    setErrorCategoria('Debe ingresar una categoria');
    hasError=true;
  }
  let precioFloat =parseFloat(precio)
  if(precioFloat==null || isNaN(precioFloat) || precioFloat<0 ){
    setErrorPrecio('Debe ingresar un precio valido');
    hasError=true;
  }

}
const clean =()=>{
  setCodigo(null);
  setProducto(null);
  setCategoria(null);
  setPrecio(null);
}
const refreshError=()=>{
  setErrorCodigo(null);
  setErrorProducto(null);
  setErrorCategoria(null);
  setErrorPrecio(null);
}
  return (
    <View style={styles.container}>
      <Text style={{marginTop:10,fontWeight:'bold',fontSize:25,color:'#517fa4'}}>Ingresa tu producto </Text>
        <Text style={{marginBottom:10}}>
        <Icon
        name='shopping-bag'
        type='entypo'
        color='#517fa4'
        size={50}
      />
      </Text>

       <Input
      placeholder='Codigo del producto'
      value={codigo}
      onChangeText={setCodigo}
      label='Codigo'
      labelStyle={{color:'#517fa4',fontWeight:'300'}}
      keyboardType='numeric'
      leftIcon={{ type: 'antdesign', name: 'barcode' }}
      errorMessage={errorCodigo}
      disabled={!isNew}
      />
        <Input
      placeholder='Ingresar producto'
      value={producto}
      onChangeText={setProducto}
      label='Producto'
      labelStyle={{color:'#517fa4',fontWeight:'300'}}
      leftIcon={{ type: 'antdesign', name: 'shoppingcart' }}
      errorMessage={errorProducto}
      />
         <Input
      placeholder='Ingresar categoria'
      value={categoria}
      onChangeText={setCategoria}
      label='Categoria'
      labelStyle={{color:'#517fa4',fontWeight:'300'}}
      leftIcon={{ type: 'material-community', name: 'format-list-group' }}
      errorMessage={errorCategoria}
      />
        <Input
      placeholder='Ingresar precio'
      value={precio}
      onChangeText={setPrecio}
      label='Precio'
      labelStyle={{color:'#517fa4',fontWeight:'300'}}
      keyboardType='numeric'
      leftIcon={{ type: 'entypo', name: 'price-tag' }}
      errorMessage={errorPrecio}
      /> 
          <Button
      color='#37B59B'
      onPress={save}
      buttonStyle={{width:300,marginHorizontal:40,paddingHorizontal:80,
        paddingVertical:10,justifyContent:'space-evenly',borderRadius:15,opacity:btnSave}}
      disabled={!isNew}  
      >
        GUARDAR
        <Icon  name='save' type='feather' color='white' />
      </Button>
      <Button
      color='crimson'
      onPress={modificar}
      buttonStyle={{width:300,marginHorizontal:40,paddingHorizontal:80,
        paddingVertical:10,justifyContent:'space-evenly',borderRadius:15,opacity:btnMod}}
      disabled={isNew}  
      >
        MODIFICAR
        <Icon  name='exchange' type='font-awesome' color='white' />
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
import { View, Text,FlatList,StyleSheet } from 'react-native'
import React from 'react'
import { Input,Icon,Button, color,ListItem } from "@rneui/base";
import {consulta} from '../services/ProductSrv'
import { useState } from 'react';

 export const ListaProduct = () => {
    const [productos,setProductos]=useState();
    const recovery=()=>{
        console.log('recuperando datos');
        consulta(setProductos);
    }
    const ItemLista=({producto})=>{
        return <ListItem bottomDivider>
        <ListItem.Content>
      <ListItem.Title><Text style={{color:'#517fa4',fontWeight:'bold'}}>{producto.codigo}{producto.producto}{producto.precio}</Text></ListItem.Title>
    </ListItem.Content>
        </ListItem>
       
    }
  return (
    <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center',marginVertical:10}}>
        <Icon  name='shop' type='entypo' color='#37B59B' size={100}/>
        <Text style={{color:'#37B59B' ,fontSize:30,fontWeight:'100'}}>S O T A SHOP</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
       
        <Button
      color='#37B5FF'
      onPress={recovery}
      buttonStyle={{width:'60%',marginVertical:20,paddingVertical:10,justifyContent:'space-evenly',borderRadius:15}}
      >
        Recuperar datos
        <Icon  name='reload1' type='antdesign' color='white' />
      </Button>
        </View>
    
    
      
      <FlatList
      data={productos}
      renderItem={({item})=>{
        return  <ItemLista producto={item}/>
      }}
      keyExtractor={(item) => {return item.codigo}}
      />
     
    </View>
  )
}

export default ListaProduct
const styles =StyleSheet.create({
    container:{
        flex: 1, 
        color:'#012C44',
        alignItems:'stretch',
        justifyContent:'center'
    }
});
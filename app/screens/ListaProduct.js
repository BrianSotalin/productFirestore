import { View, Text,FlatList,StyleSheet } from 'react-native'
import React from 'react'
import { Input,Icon,Button, color,ListItem,FAB,Avatar } from "@rneui/base";
import {consulta,validateCodigo} from '../services/ProductSrv'
import { useState,useEffect } from 'react';

 export const ListaProduct = ({navigation}) => {
    const [productos,setProductos]=useState();
    useEffect(()=>{
     recovery();
     console.log('probano USEEFECT')
    },[])
    const recovery=()=>{
        console.log('recuperando datos');
        consulta(setProductos);
       // validateCodigo();
    }
    const ItemLista=({producto})=>{
        return <ListItem bottomDivider>
           <Avatar
    title={producto.codigo}
    titleStyle={{color:'#37B5FF'}}
    //containerStyle={{ backgroundColor: '#012C44' }}
    containerStyle={{
      borderColor: '#37B5FF',
      borderStyle: 'solid',
      borderWidth: 1,
      color:'red'
    }}
    rounded
    />
        <ListItem.Content>
      <ListItem.Title>
        <Text style={{color:'#517fa4',fontWeight:'bold'}}>{producto.producto}</Text>
        </ListItem.Title>
        <ListItem.Title>
        <Text style={{color:'orange',fontWeight:'400'}}>{producto.precio} $</Text>
        </ListItem.Title>
    </ListItem.Content>
    <ListItem.Content>
        <ListItem.Title>
        <Text style={{fontWeight:'300',color:'#517fa4'}}>
          <Text style={{color:'brown'}}>Categoria: </Text>
          {producto.categoria}
          </Text>
        </ListItem.Title>
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
       
        {/* <Button
      color='#37B5FF'
      onPress={recovery}
      buttonStyle={{width:'60%',marginVertical:20,paddingVertical:10,justifyContent:'space-evenly',borderRadius:15}}
      >
        Recuperar datos
        <Icon  name='reload1' type='antdesign' color='white' />
      </Button> */}
        </View>
      <FlatList
      data={productos}
      renderItem={({item})=>{
        return  <ItemLista producto={item}/>
      }}
      keyExtractor={(item) => {return item.codigo}}
      />
       <FAB
      icon={{ name: 'add', color: 'white' }}
      color='#37B59B'
      placement='right'
      onPress={()=>{navigation.navigate('ProductFormNav',{fnRepintarLista:recovery})}}
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
        justifyContent:'center',
        //backgroundColor:'#D7F7FF'
        backgroundColor:'#E4F9FE'
    }
});
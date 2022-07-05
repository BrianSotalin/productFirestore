import { View, Text,FlatList,StyleSheet,TouchableHighlight } from 'react-native'
import React from 'react'
import { Input,Icon,Button, color,ListItem,FAB,Avatar } from "@rneui/base";
import {consulta} from '../services/ProductSrv'
import { useState,useEffect } from 'react';

 export const ListaProduct = ({navigation}) => {
    const [productos,setProductos]=useState();
    const [refreshing,setRefreshing]=useState(false)
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
        return <TouchableHighlight onPress={()=>{navigation.navigate('ProductFormNav',{product:producto})}}>
 <ListItem bottomDivider>
           <Avatar
    title={producto.codigo}
    titleStyle={{color:'#37B5FF'}}
    //containerStyle={{ backgroundColor: '#012C44' }}
    containerStyle={{
      borderColor: '#37B5FF',
      borderStyle: 'solid',
      borderWidth: 1
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
    <ListItem.Chevron color={'#37B5FF'}/>
        </ListItem>
        </TouchableHighlight>
       
    }
  return (
    <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center',marginVertical:10}}>
        <Icon  name='shop' type='entypo' color='#37B59B' size={100}/>
        <Text style={{color:'#37B59B' ,fontSize:30,fontWeight:'100'}}>S O T A SHOP</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
       
  
        </View>
      <FlatList
      data={productos}
      renderItem={({item})=>{
        return  <ItemLista producto={item}/>
      }}
      keyExtractor={(item) => {return item.codigo}}
      showsVerticalScrollIndicator={true}
      refreshing={refreshing}
      onRefresh={async()=>{
        setRefreshing(true);
        await recovery();
        setRefreshing(false)
     } }
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
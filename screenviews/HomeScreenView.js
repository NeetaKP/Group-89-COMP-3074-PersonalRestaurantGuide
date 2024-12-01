import { View, Button, StyleSheet, Text} from 'react-native';
import {useState, useEffect} from 'react'
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function HomeScreen({route}) {
    //https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Dv1yNa0m5CkEz5V0paK3eiXl19G69Od0wnl80M2S
     //const [currency,setCurrencies] = useState([]);
     const [name,setName] = useState([]);
     const [address,setAddress] = useState([])
     const [phone,setPhone] = useState([])
     const [description,setDescription] = useState([])
     const [vegeterian,setVegeterian] = useState([])


     //const [resturantList,setRestaurantList] = React.useState()
  
     const data = {
      s1:{name:"Neeta Koirala Pant", id: "101331989"},
      s2:{name:"Nilam Pancholi",id:"101456610"},
      s3:{name:"Jacques Vidjanagni",id:"101456610"}
     };
  
     const navigation = useNavigation();
     return(
      <View style={styles.container}>
       <View  >
         <Button title="Go to About" style={styles.item} onPress={() => navigation.navigate('About',data)} />
         <Button title="Go to List of Restaurants" style={styles.item} onPress={() => navigation.navigate('RestaurantList')} />
         <Button title="Add resturant" style={styles.item} onPress={() => navigation.navigate('RestaurantAdd')} />
       </View>
           {}
      </View>
     )
   }
  

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      backgroundColor:'aqua',
      border: "2px solid black",
      marginBottom:5,
      borderRadius:10,
      marginHorizontal:10,
      color:'black'
    },
    item_details_label:{
      fontSize:24,
    },
    item_details_data:{
      fontSize:24,
    }
  });
  
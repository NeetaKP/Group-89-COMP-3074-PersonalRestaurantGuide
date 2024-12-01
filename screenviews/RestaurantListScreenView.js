
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, ScrollView} from 'react-native';

import * as React from 'react';
import {useState,useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
//import { DataTable } from 'react-native-paper'
//import * as SplashScreen from 'expo-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function RestaurantListScreen({route}){
  const [data,setData] = useState([])
  const [added, setAdded] = useState(false)
    //const data = route.params.data;
    const execute = ()=> {    
    // AsyncStorage.getAllKeys((err, keys) => {
    //   AsyncStorage.multiGet(keys, (err, values) => {
    //     console.log("MYdata",data)
    //     if(!added)
    //       values.map((item) => {
    //         setData((data) => [...data,JSON.parse(item)])
    //     })
    //   });
    //   setAdded(true)
    // });
    // to be looked at: include both key and item in data, so that key 
    // can be passed over to display to delete or edit the data. 


    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, values) => {
        console.log("MYdata",values)
        if(!added)
          values.map((item) => {
            setData((data) => [...data,{key:item[0],value:JSON.parse(item[1])}])
        })
        console.log(data)
      });
      setAdded(true)
    });

  }
  execute()
  
    //const data1 = AsyncStorage.getItem("data")
    const navigation = useNavigation();
    return(
      <>
   <FlatList 
           data={data.sort((a,b) => a.value.name > b.value.name)} 
           renderItem = {({item}) => 
           <Text 
           style={styles.item}
           onPress={() => navigation.navigate('RestaurantView',{data:item})}
           >{item.value.name},{item.value.address}</Text>}
    />
        <Text></Text>
        <Button style={{marginTop:"60px"}} title="Back to home" onPress={() => navigation.navigate("Home")}/>
</>
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
  
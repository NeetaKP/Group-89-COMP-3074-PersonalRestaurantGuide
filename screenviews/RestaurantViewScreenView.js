import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, FlatList, ScrollView} from 'react-native';

import * as React from 'react';
import {useState,useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function RestaurantViewScreen({route}){
    const data = route.params.data;

    const deleteAction = (key)=> {
       const value = AsyncStorage.getItem(key)
       if(value != null){
          AsyncStorage.removeItem(key)
          Alert.alert("Success", "data deleted")
       }else{
        Alert.alert("Failure", "data not found")
       }


    //   AsyncStorage.getAllKeys((err, keys) => {
    //     AsyncStorage.getItem()
    //     AsyncStorage.multiGet(keys, (err, values) => {
    //       console.log(values)
    //       if(!added)
    //         values.map((item) => {
    //           setData((data) => [...data,JSON.parse(item[1])])
    //       })
    //     });
    //     setAdded(true)
        navigation.navigate("RestaurantList")

    }

 
    const navigation = useNavigation();
    return(
      <>
      <View >
        <Text style={styles.item_details_label}>
          <Text style={{fontWeight:'bold'}}>Name:</Text> {data.value.name} </Text>
        <Text style={styles.item_details_label}>
          <Text style={{fontWeight:'bold'}}>Address:</Text> {data.value.address} </Text>
        <Text style={styles.item_details_label}>
          <Text style={{fontWeight:'bold'}}>Phone:</Text> {data.value.phone} </Text>
        <Text style={styles.item_details_label}>
          <Text style={{fontWeight:'bold'}}>Description:</Text> {data.value.description} </Text>
        <Text style={styles.item_details_label}>
          <Text style={{fontWeight:'bold'}}>Vegeterian:</Text>  {data.value.vegeterian?"Yes":"No"} </Text>
      </View>
      <View >
      <Text></Text>
        <Button style={{marginBottom:"60px"}} title="View on Google Map" onPress={()=> navigation.navigate("RestaurantGoogle",{data:data})}/>
        <Text></Text>
        <Button style={{marginBottom:"60px"}} title="Edit" onPress={()=> navigation.navigate("RestaurantEdit",{data:data})}/>
        <Text></Text>
        <Button style={{marginTop:"60px"}} title="Delete" onPress={() => deleteAction(data.key)}/>
        <Text></Text>
        <Button style={{marginTop:"60px"}} title="Back to home" onPress={() => navigation.navigate("Home")}/>
      </View>
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
  
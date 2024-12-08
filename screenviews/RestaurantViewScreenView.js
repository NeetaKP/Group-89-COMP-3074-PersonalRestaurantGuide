import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView} from 'react-native';

import * as React from 'react';
import {useState,useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Rating} from 'react-native-stock-star-rating'



export default function RestaurantViewScreen({route}){
    const data = route.params.data;

    // For rating the restaurant
    const [defaultRating, setDefaultRating] = useState(data.value.rating)
    const [maxRating, setMaxRating] = useState([1,2,3,4,5])
    const [rating, setRating] = useState(data.value.rating)


    //const imageForUnselected = "../assets/star_corner.png"
    //const imageForSelected = "../assets/star_filled.png"
    const imageForUnselected = "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png"
    const imageForSelected = "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png"



    const MyRatingBar = () => {
      return (
        <View style={styles.rating_bar}> 
          {
            maxRating.map((item,key) => {
              return(
                <TouchableOpacity
                  activeOpacity={0.8}
                  key={item}
                  onPress={() => setDefaultRating(item)}
                >
                  <Image 
                    style={styles.rate_image} 
                    source={
                    item <= defaultRating ? {uri:imageForSelected} : {uri:imageForUnselected}
                    
                  }
                  />
                </TouchableOpacity>
              )
            })
          }
        </View>
      )
    }

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

    const saveRating = () => {
        const item = {
          name: data.value.name,
          address: data.value.address,
          phone: data.value.phone, 
          description: data.value.description,
          vegeterian: data.value.vegeterian,
          lat: data.value.lattitude,
          lon: data.value.longitude,
          rating: defaultRating
        }
        console.log(item)

        AsyncStorage.getAllKeys((err, keys) => {
            console.log("keylen:",keys.length.toString())
            console.log("key:",data.key)
            console.log("datavalue:",data.value)
            //if(!added1)
            AsyncStorage.mergeItem(data.key,JSON.stringify(item))
            setRating(defaultRating)
        });
        //setAdded1(true)
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
        <Text style={styles.item_details_label}>
          <Text style={{fontWeight:'bold'}}>Rating:</Text>  {rating} </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.item_details_label}>
          <Text style={{fontWeight:'bold'}}>Rate this restaurant:</Text>  </Text>
        <MyRatingBar/>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={()=>{
            alert("Selected rating " + defaultRating + " saved")
            saveRating(defaultRating)
          }}
        
        >
        <Text>Save Selected Rating</Text>

        </TouchableOpacity>
         
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
    },
    rating_bar:{
      justifyContent:'center',
      flexDirection:'row',
      marginTop:30


    },
    rate_image:{
      width:40,
      height:40,
    },
    buttonStyle:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:30,
      padding:15,
      backgroundColor:'green'
    }
  });
  
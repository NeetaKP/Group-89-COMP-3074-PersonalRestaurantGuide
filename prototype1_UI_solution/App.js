import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, ScrollView} from 'react-native';

import * as React from 'react';
import {useState,useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
//import { DataTable } from 'react-native-paper'
//import * as SplashScreen from 'expo-splash-screen'

import SplashScreen from './SplashScreenView';

// to prevent screen from hiding while resources are being fetched
//SplashScreen.preventAutoHideAsync();

//SplashScreen.setOptions({
//  duration:1000,
//  fade: true,
//})

function HomeScreen() {
  //https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Dv1yNa0m5CkEz5V0paK3eiXl19G69Od0wnl80M2S
   //const [currency,setCurrencies] = useState([]);

   const data = {
    s1:{name:"Neeta Koirala Pant", id: "101331989"},
    s2:{name:"Nilam Pancholi",id:"101456610"},
    s3:{name:"Jacques Vidjanagni",id:"101456610"}
   };

   const restaurantData = [
    {
      name:"Golden Diner",
      address:"105 Carlton St., Toronto, ON",
      phone:"4169779898",
      description:"Located close to Carlton and Jarvis streets. Streetcar access. Close to Subway station.",
      vegeterian:true,
    },
    {
      name:"Sushi Gen",
      address:"1560 Yonge St, Toronto, ON",
      phone:"4169213388",
      description:"A menu of sushi, bento boxes, rice dishes & more in a contemporary Japanese restaurant.",
      vegeterian:false
    },
    {
      name:"Khau Gully",
      address:"1991 Yonge St, Toronto, ON",
      phone:"6473479993",
      description:"Stylish, relaxed setting for familiar Indian dishes presented with contemporary flair.",
      vegeterian:true
    },
    {
      name:"Saravanaa Bhavan",
      address:"1571 Sandhurst Cir Unit 153, Scarborough, ON",
      phone:"4162937755",
      description:"Woodside Square Mall - McCowan Entrance",
      vegeterian:true
    },
    {
      name:"The King's Curry",
      address:"3038 Boor St W, Toronto",
      phone:"4162399191",
      description:"Indian restaurant",
      vegeterian:false
    },
    {
      name:"Kelseys Original Roadhouse",
      address:"2870 Queen St E, Brampton, ON",
      phone:"9054706700",
      description:"Large portions of American fare & specially cocktails in a casual setting with comfy booths and TVs",
      vegeterian:false
    },
    {
      name:"Ngon Corner",
      address:"9021 Leslie St, Richmond Hill, ON",
      phone:"9057078858",
      description:"Vietnamese restaurant",
      vegeterian:false
    },
    {
      name:"Maxican Amigos",
      address:"10720 Yonge St, Richmond Hill, ON",
      phone:"9057800303",
      description:"Mexical restaurant. This colourful sports bar offers a menu of Mexican staples & hosts live music on weekends.",
      vegeterian:false
    },
   
   ];
 
 
   const navigation = useNavigation();
   return(
    <View style={styles.container}>
     <View  >
       <Button title="Go to About" onPress={() => navigation.navigate('About',data)} />
       <Button title="Go to List of Restaurants" onPress={() => navigation.navigate('RestaurantList',{data:restaurantData})} />
     </View>
         {}
    </View>
   )
 }
 
function RestaurantListScreen({route}){
  const data = route.params.data;
  const navigation = useNavigation();
  return(
 <FlatList 
         data={data} 
         renderItem = {({item}) => 
         <Text 
         style={styles.item}
         onPress={() => navigation.navigate('RestaurantView',{data:item})}
         >{item.name},{item.address}</Text>}
  />
  ) 

}

function RestaurantViewScreen({route}){
  const data = route.params.data;
  const navigation = useNavigation();

  return(
    <View >
      <Text style={styles.item_details_label}>
        <Text style={{fontWeight:'bold'}}>Name:</Text> {data.name} </Text>
      <Text style={styles.item_details_label}>
        <Text style={{fontWeight:'bold'}}>Address:</Text> {data.address} </Text>
      <Text style={styles.item_details_label}>
        <Text style={{fontWeight:'bold'}}>Phone:</Text> {data.phone} </Text>
      <Text style={styles.item_details_label}>
        <Text style={{fontWeight:'bold'}}>Description:</Text> {data.description} </Text>
      <Text style={styles.item_details_label}>
        <Text style={{fontWeight:'bold'}}>Vegeterian:</Text>  {data.vegeterian?"Yes":"No"} </Text>
    </View>
  )
}

function AboutScreen({route}){
  const navigation = useNavigation();
  const {s1,s2,s3} = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ fontSize: 32 }}>Group Members</Text>
      <Text></Text>
      <View>
      <Text style={{ fontSize: 18 }}><Text style={{fontWeight:'bold'}}>{s1.name}</Text> (Id: {s1.id})</Text>
      <Text style={{ fontSize: 18 }}><Text style={{fontWeight:'bold'}}>{s2.name}</Text> (Id: {s2.id})</Text>
      <Text style={{ fontSize: 18 }}><Text style={{fontWeight:'bold'}}>{s3.name}</Text> (Id: {s3.id})</Text>
      </View>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button title="Back to MainScreen..." onPress={() => navigation.navigate('Home')}>
        Back to MainScreen...
      </Button>
    </View>
  )
}


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home:{
    screen: HomeScreen,
    options:{
      title: 'Personal Restaurant Guide',
    }
  },
  About: AboutScreen,
  RestaurantList: RestaurantListScreen,
  RestaurantView: RestaurantViewScreen
},
})

const Navigation = createStaticNavigation(RootStack)


export default function App() {
  const [isShowSplash,setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    },3000);
  });

  return( 
    <>
    {isShowSplash ? (<SplashScreen />):(<Navigation/>)}
    </>
  );
}





// export default function App() {
//   return (
//     <Navigation />
//   );
// }

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

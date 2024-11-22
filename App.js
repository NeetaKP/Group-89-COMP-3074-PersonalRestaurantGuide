import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';

import * as React from 'react';
import useState from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';


function HomeScreen() {
  //https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Dv1yNa0m5CkEz5V0paK3eiXl19G69Od0wnl80M2S
   //const [currency,setCurrencies] = useState([]);

   const data = {
    s1:{name:"Neeta Koirala Pant", id: "101331989"},
    s2:{name:"Nilam",id:"101456610"},
    s3:{name:"Jacques",id:"100989148"}
   };

   const restaurantData = [
    {name:"Golden Diner",address:"105 Carlton St., Toronto, ON",vegeterian:true},
    {name:"Sushi Gen",address:"1560 Yonge St, Toronto, ON",vegeterian:false},
    {name:"Khau Gully",address:"1991 Yonge St, Toronto, ON",vegeterian:true},
    {name:"Saravanaa Bhavan",address:"1571 Sandhurst Cir Unit 153, Scarborough, ON",vegeterian:true},
    {name:"The King's Curry",address:"3038 Boor St W, Toronto",vegeterian:false},
    {name:"Kelseys Original Roadhouse",address:"2870 Queen St E, Brampton, ON",vegeterian:false},
    {name:"Ngon Corner",address:"9021 Leslie St, Richmond Hill, ON",vegeterian:false},
    {name:"Maxican Amigos",address:"10720 Yonge St, Richmond Hill, ON",vegeterian:false},
    {name:"Golden Diner",address:"105 Carlton St., Toronto, ON",vegeterian:true},
    {name:"Sushi Gen",address:"1560 Yonge St, Toronto, ON",vegeterian:false},
    {name:"Khau Gully",address:"1991 Yonge St, Toronto, ON",vegeterian:true},
    {name:"Saravanaa Bhavan",address:"1571 Sandhurst Cir Unit 153, Scarborough, ON",vegeterian:true},
    {name:"The King's Curry",address:"3038 Boor St W, Toronto",vegeterian:false},
    {name:"Kelseys Original Roadhouse",address:"2870 Queen St E, Brampton, ON",vegeterian:false},
    {name:"Ngon Corner",address:"9021 Leslie St, Richmond Hill, ON",vegeterian:false},
    {name:"Maxican Amigos",address:"10720 Yonge St, Richmond Hill, ON",vegeterian:false}
   ];
 
 
   const navigation = useNavigation();
   return(
     <View>
     <View>
       <Button title="ABOUT PAGE" onPress={() => navigation.navigate('About',data)} />
       <Button title="RESTAURANT LISTS" onPress={() => navigation.navigate('RestaurantList',{data:restaurantData})} />
       <Button title="RESTAURANT MAP" onPress={() => navigation.navigate('Restaurantmap',{restaurantmap})} />

       
     </View>
     /* <View>
      <FlatList
      data = {restaurantData} 
      //renderItem = {({item}) => <Text>{item.name},{item.address},{item.vegeterian}</Text>}
       />
 
       
     </View> */
     </View>
    )
  }
 // navigation of the button reataurant list
 function RestaurantListScreen({route}){
  //data = route
  const data = route.params.data
  return(
    //<Text>I am from restaurant list</Text>
    <FlatList
      data = {data}
      renderItem = {({item}) => <Text style = {styles.item}>{item.name},{item.address},{item.vegeterian}</Text>}
    />
  )
  

 }

function AboutScreen({route}){
  const navigation = useNavigation();
  const {s1,s2} = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ fontSize: 32 }}>Group Members</Text>
      <Text></Text>
      <View>
      <Text style={{ fontSize: 18 }}>Name: {s1.name} (Id: {s1.id})</Text>
      <Text style={{ fontSize: 18 }}>Name: {s2.name} (Id: {s2.id})</Text>
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
  RestaurantList: RestaurantListScreen
},
})

const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  item:{
    padding: 10,
    fontSize:18,
    height:44,
    backgroundColor:"aqua"


  }
});

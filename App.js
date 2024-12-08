import { StyleSheet} from 'react-native';
import { createStaticNavigation} from '@react-navigation/native';
import * as React from 'react';
import {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

import SplashScreen from './screenviews/SplashScreenView';
import RootStack from './navigation/RootStackNavigator';

const Navigation = createStaticNavigation(RootStack)

export default function App() {
  const [isShowSplash,setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    },3000);
  });


 function createStorage(){
  AsyncStorage.setItem("0",JSON.stringify({
    name:"Golden Diner",
    address:"105 Carlton St., Toronto, ON",
    phone:"4169779898",
    description:"Located close to Carlton and Jarvis streets. Streetcar access. Close to Subway station.",
    vegeterian:true,
    lat:43.66228542620163,
    lon:-79.37747829483344,
    rating:2.5
  }))
  AsyncStorage.mergeItem("1",JSON.stringify({
    name:"Sushi Gen",
    address:"1560 Yonge St, Toronto, ON",
    phone:"4169213388",
    description:"A menu of sushi, bento boxes, rice dishes & more in a contemporary Japanese restaurant.",
    vegeterian:false,
    lat:43.69021806111137,
    lon:-79.39487753956385,
    rating:2.5
  }))
  AsyncStorage.mergeItem("2",JSON.stringify({
    name:"Khau Gully",
    address:"1991 Yonge St, Toronto, ON",
    phone:"6473479993",
    description:"Stylish, relaxed setting for familiar Indian dishes presented with contemporary flair.",
    vegeterian:true,
    lat: 43.70066770753744,
    lon:-79.3967880090704,
    rating:2.5
  }))
  AsyncStorage.mergeItem("3",JSON.stringify({
    name:"Saravanaa Bhavan",
    address:"1571 Sandhurst Cir Unit 153, Scarborough, ON",
    phone:"4162937755",
    description:"Woodside Square Mall - McCowan Entrance",
    vegeterian:true,
    lat:43.81252656247926,
    lon:-79.26559298230912,
    rating:2.5
  }))
  AsyncStorage.mergeItem("4",JSON.stringify({
    name:"The King's Curry",
    address:"3038 Boor St W, Toronto",
    phone:"4162399191",
    description:"Indian restaurant",
    vegeterian:false,
    lat:43.647335029424326,
    lon:-79.51242099605662,
    rating:2.5
  }))
  AsyncStorage.mergeItem("5",JSON.stringify({
    name:"Kelseys Original Roadhouse",
    address:"2870 Queen St E, Brampton, ON",
    phone:"9054706700",
    description:"Large portions of American fare & specially cocktails in a casual setting with comfy booths and TVs",
    vegeterian:false,
    lat:43.7420711391759,
    lon:-79.69805280742311,
    rating:2.5
  }))
  AsyncStorage.mergeItem("6",JSON.stringify({
    name:"Ngon Corner",
    address:"9021 Leslie St, Richmond Hill, ON",
    phone:"9057078858",
    description:"Vietnamese restaurant",
    vegeterian:false,
    lat:43.84843787880502,
    lon:-79.38225451007843,
    rating:2.5
  }))
  AsyncStorage.mergeItem("7",JSON.stringify({
    name:"Maxican Amigos",
    address:"10720 Yonge St, Richmond Hill, ON",
    phone:"9057800303",
    description:"Mexical restaurant. This colourful sports bar offers a menu of Mexican staples & hosts live music on weekends.",
    vegeterian:false,
    lat:43.88934070316039,
    lon:-79.44183320699955,
    rating:2.5
  }))

 }


  return( 
    <>
    {createStorage()}
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

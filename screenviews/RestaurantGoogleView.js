import * as Location from "expo-location"
import {Text, View} from 'react-native'

import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';


export default function RestaurantGoogleViewScreen({route}){

    const data = route.params.data;
    console.log("data",data.value)

    return(
        <>
        <Text>Google View {data.value.name}</Text>
        <View style={styles.mapcontainer}>
   <MapView
       provider={PROVIDER_GOOGLE}
       style={styles.map}
       initialRegion={{
         latitude: data.value.lat,
         longitude: data.value.lon,
         latitudeDelta: 0.025,
         longitudeDelta: 0.0221,
       }}
       showUserLocation={true} >
       <Marker coordinate={{
         latitude: data.value.lat,
         longitude: data.value.lon,
       }}  />
   </MapView>
</View>

        </>
    )
}

/*
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
...
<View style={styles.mapcontainer}>
   <MapView
       provider={PROVIDER_GOOGLE}
       style={styles.map}
       initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       showUserLocation={true} >
       <Marker coordinate={{
         latitude: 37.78825,
         longitude: -122.4324,
       }}  />
   </MapView>
</View>
...
*/
const styles = StyleSheet.create({
     mapcontainer: {
           height: 400,
           width: 400,
           justifyContent: 'flex-end',
           alignItems: 'center',
     },
     map: {
           ...StyleSheet.absoluteFillObject,
     },
})


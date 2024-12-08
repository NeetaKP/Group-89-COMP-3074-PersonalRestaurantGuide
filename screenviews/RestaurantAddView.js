import { useNavigation } from '@react-navigation/native';
import {Ionicons} from "@expo/vector-icons"
import { useState, useEffect } from 'react';
import { TextInput, Text, View, Button, TouchableOpacity, Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function RestaurantAddScreen(){

    const [name,setName] = useState("")
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState(0)
    const [description,setDescription] = useState("")
    const [vegeterian,setVegeterian] = useState()
    const [lattitude, setLattitude] = useState(0.0)
    const [longitude, setLongitude] = useState(0.0)
    const [rating, setRating] = useState(2.5)
    const [added, setAdded] = useState(false)

    const handleSubmit = () => {

        if(!name || !address || !phone || ! description ){
            Alert.alert("Data not valid", "Enter all fields")
        }

        Alert.alert("Success", "data saved")

        const item = {
            name: name,
            address: address,
            phone: phone, 
            description: description,
            vegeterian: vegeterian,
            lat: parseFloat(lattitude),
            lon: parseFloat(longitude),
            rating:rating
        }

        const execute = ()=> {   

            AsyncStorage.getAllKeys((err, keys) => {
                console.log("keylen",keys.length.toString())
                if(!added)
                AsyncStorage.mergeItem(keys.length.toString(),JSON.stringify(item))
                
            });
            setAdded(true)
        }

        execute()
        

        navigation.navigate("Home")

    }

    const navigation = useNavigation();

    return(
        <>
        <Text>Enter new restaurant data</Text>
        <>
        <View>
            <Text>Restaurant name:</Text>
            <TextInput 
            placeholder="Enter restaurant name"
            value={name}
            onChangeText={setName}
            />

            <Text>Address:</Text>
            <TextInput 
            placeholder="Enter address"
            value={address}
            onChangeText={setAddress}
            />

            <Text>Phone:</Text>
            <TextInput 
            placeholder="Enter phone number"
            value={phone}
            onChangeText={setPhone}
            />
            <Text>Description:</Text>
            <TextInput 
            placeholder="Enter restauration description"
            value={description}
            onChangeText={setDescription}
            />
            <Text>Vegeterian:</Text>
            <TouchableOpacity onPress={() => vegeterian?setVegeterian(false):setVegeterian(true)}>
                <Text>{vegeterian==true?"Yes":"No"}
                </Text>
            </TouchableOpacity>
            <Text>Lattitude:</Text>
            <TextInput 
            placeholder="Enter lattitude"
            keyboardType='numeric'
            value={lattitude}
            onChangeText={setLattitude}
            />
            <Text>Longitude:</Text>
            <TextInput 
            placeholder="Enter longitude"
            keyboardType='numeric'
            value={longitude}
            onChangeText={setLongitude}
            />
        </View>
        </>

        <Button title="Add and Back to home" onPress={handleSubmit}></Button>
        </>
    )
}
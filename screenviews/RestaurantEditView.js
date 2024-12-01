import { useNavigation } from '@react-navigation/native';
import {Ionicons} from "@expo/vector-icons"
import { useState, useEffect } from 'react';
import { TextInput, Text, View, Button, TouchableOpacity, Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function RestaurantEditScreen({route}){
    const srcData = route.params.data
    console.log("key:",route.data)

    const [data,setData] = useState({key:"a",value:"223"})
    const [added1, setAdded1] = useState(false)


    const [name,setName] = useState(srcData.value.name)
    const [address,setAddress] = useState(srcData.value.address)
    const [phone,setPhone] = useState(srcData.value.phone)
    const [description,setDescription] = useState(srcData.value.description)
    const [vegeterian,setVegeterian] = useState(srcData.value.vegeterian)
    const [lattitude,setLattitude] = useState(srcData.value.lat)
    const [longitude,setLongitude] = useState(srcData.value.lon)
    const [added, setAdded] = useState(false)

    const initialData = () => {
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, values) => {
              console.log("MY2data",values)
              if(!added1)
                values.map((item) => {
                    console.log("key:",srcData.key,",item[0]:",item[0])
                    if(item[0] == srcData.key){
                        console.log("equality valid")
                         setData({key:item[0],value:JSON.parse(item[1])})
                    }
              })
              console.log("My3data",data)
            });
            setAdded1(true)
          });
        
    }
    initialData()

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
            lon: parseFloat(longitude)
        }

        const execute = ()=> {   

            AsyncStorage.getAllKeys((err, keys) => {
                console.log("keylen",keys.length.toString())
                if(!added)
                AsyncStorage.mergeItem(srcData.key,JSON.stringify(item))
                
            });
            setAdded(true)
        }

        execute()
        

        navigation.navigate("RestaurantList")

    }

    const navigation = useNavigation();

    return(
        <>
        <Text>Enter new restaurant data</Text>
        <>
        <View>
            <Text>Restaurant name:</Text>
            <TextInput 
            placeholder={data.value.name}
            value={name}
            onChangeText={setName}
            />

            <Text>Address:</Text>
            <TextInput 
            placeholder={data.value.address}
            value={address}
            onChangeText={setAddress}
            />

            <Text>Phone:</Text>
            <TextInput
            placeholder={data.value.phone} 
            value={phone}
            onChangeText={setPhone}
            />
            <Text>Description:</Text>
            <TextInput 
            placeholder={data.value.description}
            value={description}
            onChangeText={setDescription}
            />
            <Text>Vegeterian:</Text>
            <TouchableOpacity onPress={() => vegeterian?setVegeterian(false):setVegeterian(true)}>
                <Text>{data.value.vegeterian==true?"Yes":"No"}
                </Text>
            </TouchableOpacity>
            <Text>Lattitude:</Text>
            <TextInput 
            placeholder={data.value.lat}
            keyboardType='numeric'
            value={lattitude}
            onChangeText={setLattitude}
            />
            <Text>Longitude:</Text>
            <TextInput 
            placeholder={data.value.lon}
            keyboardType='numeric'
            value={longitude}
            onChangeText={setLongitude}
            />
        </View>
        </>

        <Button title="Save" onPress={handleSubmit}></Button>
        </>
    )
}
import { View, Text, Button} from 'react-native';

import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function AboutScreen({route}){
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
        <Text>{AsyncStorage.getItem('data')}</Text>

        <Button title="Back to MainScreen..." onPress={() => navigation.navigate('Home')}>
          Back to MainScreen...
        </Button>
      </View>
    )
  }
  
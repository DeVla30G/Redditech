import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from '../components/Themed';
import { useEffect, useState } from 'react';
import React from 'react';
import { Avatar } from "@react-native-material/core";

export default function ModalScreen() {
  const [User, setUser] = useState({name:'', snoovatar_img: ''});


  useEffect(() => {
    const getUser= async () => {
      let token = await AsyncStorage.getItem('access_token'); 
      console.log(token);  
        fetch('https://oauth.reddit.com/api/v1/me',{
          method: 'GET',
          mode: 'cors',
          headers: {
            'Authorization': 'Bearer ' + token,
        },
        })
        .then(response => response.json())
        .then(result => setUser(result))
        .catch(error => console.log('error', error));

    }
    getUser()
    console.log([User.name]);
    }, []);

    const [User2, setUser2] = useState({public_description:''});


  useEffect(() => {
    const getUser2= async () => {
      let token = await AsyncStorage.getItem('access_token'); 
      console.log(token);  
        fetch('https://oauth.reddit.com/api/v1/me',{
          method: 'GET',
          mode: 'cors',
          headers: {
            'Authorization': 'Bearer ' + token,
        },
        })
        .then(response2 => response2.json())
        .then(result2 => setUser2(result2.subreddit))
        .catch(error => console.log('error', error));

    }
    getUser2()
    console.log([User2]);
    }, []);
    
  return (
    <View style={styles.container}>  
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>{User.name}</Text>
      <Avatar image={{uri: User.snoovatar_img}} style={styles.title}/>
      <Text style={styles.title}>{User2.public_description}</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDC9B5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

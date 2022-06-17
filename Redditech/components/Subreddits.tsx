import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {useEffect, useState} from 'react';
import axios from 'axios'
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { response } from 'express';


//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Subreddits () {

  const [subs, setSubreddits] = useState<Array<String>>([]);


  useEffect(() => {
    const getSubreddits= () => {

        fetch('https://oauth.reddit.com/subreddits/mine',{
          method: 'GET',
          mode: 'cors',
          redirect: 'follow',
          headers: {
            'Authorization': 'Bearer ' + '1603171122571-yjAvq2nZeIU0bDZNaYr4euEwhU-tmQ',
        },
        })
        .then(response => response.json())
        .then(result => setSubreddits(result.data.children))
        .catch(error => console.log('error', error));

    }
    getSubreddits()
    console.log(subs);
    }, []);


return (
       <>
         <View>

          {subs.map((sub: any) => {return (
                 <View>
                    <Text>{sub.title}</Text>
                </View>
          )})}


               </View>
                </>

)
}


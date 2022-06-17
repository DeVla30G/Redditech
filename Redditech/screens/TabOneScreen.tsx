import { StyleSheet } from 'react-native';
import React from "react";
import { Stack, Button, Avatar } from "@react-native-material/core";
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, ResponseType, useAuthRequest } from 'expo-auth-session';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from 'react';
import TypeData from '../constants/types/conf.types';


WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
  tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
};

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: 'TstECZY15hIwJOpJf9RpCA',
      scopes: ['*'],
      redirectUri: makeRedirectUri({
        native: 'http://localhost:19006'
        }),
    },
    discovery
  );

  
  React.useEffect(() => {
    if (response?.type === 'success') {
      console.log(response.params.access_token);
      console.log(response);
        try {
          AsyncStorage.setItem('access_token', response.params.access_token);
        } catch (error) {
          // Error saving data
        }
      }
  }, [response]);

  return (
    
    <Stack style={styles.container} fill center spacing={30}>
    <Text style={styles.title} >Welcome on Redditech !</Text>
    <Avatar image={{ uri: "https://www.redditinc.com/assets/images/site/reddit-logo.png" }} />
    <Button
      disabled={!request}
      title="Login"
      color="error"
      onPress={() => {
        promptAsync();
        }}
    />
  </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEBFD6'
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'red',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});



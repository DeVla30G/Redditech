import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import SearchBar from '../components/SearchBar';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Subreddits from '../components/Subreddits';
import axios from 'axios';
import React, {useCallback, useState, useEffect} from 'react';
import SubPosts from '../components/Posts/SubPosts';
import { PostTypes } from '../constants/types/PostTypes';



export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
       <SearchBar/>
      <Text style={styles.title}>Subreddits</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/*<EditScreenInfo path="/screens/TabTwoScreen.tsx" />*/}
      <Subreddits />
      <SubPosts />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDC9B5'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    borderBottomColor: 'black',
  },
});

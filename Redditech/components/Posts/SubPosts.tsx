import {View, Text, StyleSheet} from 'react-native';
import { Stack, Button, Avatar, Icon } from "@react-native-material/core";
import React, {useMemo, useState, useEffect} from 'react';
import { PostTypes } from '../../constants/types/PostTypes';
import { PostContext } from './context';
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props{
  icon: string
}

export default function SubPosts () {

  const [posts, setPostData] = useState<Array<PostTypes>>([]);
  const [text, setQuery] = React.useState("");
  const subreddit = ""; 

useEffect(() => {
 const getPosts = async() => {

  let token = await AsyncStorage.getItem('access_token')
      fetch('https://oauth.reddit.com/r/subreddit/new.json' + text, {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
      headers: {
          Authorization: "Bearer" + token
        },
      
      })
      .then((response) => response.json())
      .then((result) => setPostData(result.data.children))
      .catch((err) => console.log("error", err))
 };
 getPosts();
 console.log(posts)
}, []);

  return (
    <>
    <View> <Text>POSTS</Text></View>
      {posts.map((post:any) => { return (
     <View >
        <View style={{height: 300, backgroundColor: 'white'}}>
        <Avatar image={{ uri: post.data.thumbnail }} />
        <Text> {post.data.subreddit_name_prefixed}</Text>
          <Text style={styles.auth} > {post.data.author}</Text>
          <Text style={styles.title}> {post.data.title}</Text>
          <Text style={styles.selftext}> {post.data.selftext} </Text>
        

          <Text > {post.data.ups} </Text>
      
    
          <Text >{post.data.downs} </Text>
        </View>
      
</View>
)})}
</>
  );
};

const styles = StyleSheet.create({ 
 
  auth:{
    fontWeight: 'bold',
  },
  selftext:{
    margin: '1em',
  },
  title:{
    textTransform: 'uppercase',
    alignContent: 'center',
  }

})


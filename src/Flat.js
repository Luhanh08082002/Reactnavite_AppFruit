import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import react, { useState } from 'react';




export default function Flastlist(s) {

  const [dat, setData] = useState('lữ hành đã sai ');
  const [text, setText] = useState('lữ hành viết text ');

  const mang_dulieu = [
    {
      id: 1,
      title: 'tôi là số 1'
    },
    {
      id: 2,
      title: 'tôi là số 2'
    },
    {
      id: 3,
      title: 'tôi là số 3'
    },
    {
      id: 4,
      title: 'tôi là số 3'
    },
    {
      id: 5,
      title: 'tôi là số 3'
    },
    {
      id: 10,
      title: 'tôi là số 1'
    },
    {
      id: 20,
      title: 'tôi là số 2'
    },
    {
      id: 30,
      title: 'tôi là số 3'
    },
    {
      id: 40,
      title: 'tôi là số 3'
    },
    {
      id: 50,
      title: 'tôi là số 3'
    },
    {
      id: 11,
      title: 'tôi là số 1'
    },
    {
      id: 12,
      title: 'tôi là số 2'
    },
    {
      id: 13,
      title: 'tôi là số 3'
    },
    {
      id: 14,
      title: 'tôi là số 3'
    },
    {
      id: 15,
      title: 'tôi là số 3'
    }
  ]

  return (
    <View>
      <FlatList data={mang_dulieu} renderItem={({ item }) =>
        <TouchableOpacity onPress={()=>alert(item.title)}>
          <View>
            <Text>==================================</Text>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>

      } />

    </View>
  );
}

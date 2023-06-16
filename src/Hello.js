import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import react, { useState } from 'react';




export default function Hello(s) {

  const [dat, setData] = useState('lữ hành đã sai ');
  const [text, setText] = useState('lữ hành viết text ');
  const [number, SetNumber] = useState(0);



  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>

      <Text>{s.data}</Text>
      <Text>{s.date}</Text>
      <Text onPress={() => setData('lữ hành ơi bạn đã đúng ')}>{dat}</Text>
      <TextInput style={styles.texts} onChangeText={(text) => setText(text)} />
      <Button title='oK' onPress={()=>{SetNumber(number +1)}}></Button>
      <Text>{text}</Text>
      <Text>{number}</Text>
      <Text ></Text>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({

  texts: {
    borderColor: 'blue',
    borderWidth: 2,
    padding: 8
  }
})

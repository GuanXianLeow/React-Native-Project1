import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.fillerContainer}></View>

      <View style={styles.titleContainer}>
      <Text style={styles.text}>Hello</Text><br></br>
      <Text style={{color:"pink"}}>Mala</Text><br/>
      <Text>Ramen</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48bbe8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  text:{
    color:'white',
    fontSize: 30,
    fontWeight: "bold",
  },
});




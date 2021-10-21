import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Posts from './components/Posts';

import Constants from 'expo-constants';

export default function App() {
  return (
  <SafeAreaView style={styles.container} >
    <Posts 
    style={styles.post}
     />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  // post:{
  //   width: "80%"
  // }
});

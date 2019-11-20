import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import {LoginScreen} from './screens/loginScreen';
import AppStackNavigator from './navigations/stackNavigation';
export default function App() {
  return (
      <AppStackNavigator/>
     );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

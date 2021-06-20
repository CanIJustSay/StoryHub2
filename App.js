import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import ReadStory from './screens/readStory';
import WriteStory from './screens/writeStory';
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component{
  render(){
  return (
      <AppContainer/>
  
  );
  }
}
var tabNav = createMaterialBottomTabNavigator({
  Read:{
    screen:ReadStory
  },
  Write:{
    screen: WriteStory
  }
});
var AppContainer = createAppContainer(tabNav);
const styles = StyleSheet.create({

});

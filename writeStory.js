import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import firebase from "firebase";
import db from "../config";
export default class WriteStory extends React.Component {
  constructor() {
    super();
    this.state = {
      holdAuthor: "",
      holdTitle: "",
      holdStory: "",
    };
  }
  addStories = () => {
    db.collection("Stories").add({
      Author: this.state.holdAuthor,
      Title: this.state.holdTitle,
      Content: this.state.holdStory,
    });
    console.log("yes");
  };
  render() {
    return (
      <View>
        <Text style={{ position: "absolute", left: 165, top: 100 }}>
          Write story
        </Text>
        <TextInput
          placeholder={"Title"}
          style={{
            position: "absolute",
            left: 165,
            top: 120,
            borderWidth: 1,
            borderColor: "black",
            textAlign: "center",
          }}
          onChangeText={(value)=>{
              this.setState({
                holdTitle:value,
              })
          }}
        ></TextInput>
        <TextInput
          placeholder={"Author"}
          style={{
            position: "absolute",
            left: 165,
            top: 150,
            borderWidth: 1,
            borderColor: "black",
            textAlign: "center",
          }}
          onChangeText={(value)=>{
              this.setState({
                  holdAuthor:value,
              })
          }}
        ></TextInput>
        <TextInput
          placeholder={"Your Story"}
          style={{
            position: "absolute",
            left: 165,
            top: 180,
            borderWidth: 1,
            borderColor: "black",
            height: 200,
            textAlign: "center",
          }}
          multiline={true}
          onChangeText={(value)=>{
            this.setState({
                holdStory:value,
            })
          }}
        ></TextInput>

        <TouchableOpacity
          style={{
            position: "absolute",
            left: 165,
            top: 450,
            borderWidth: 1,
          }}
          onPress={() => {this.addStories();}}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

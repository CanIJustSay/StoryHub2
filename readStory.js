import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, TextInput, Alert, FlatList } from "react-native";
import { Value } from "react-native-reanimated";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import db from "../config";
export default class ReadStory extends React.Component {
  constructor() {
    super();
    this.state = {
      searched: "",
      stories: [],
    };
  }

  fetchStories = async() => {
    var stRef = await db
      .collection("Stories")
      .where("Title", "==", this.state.searched)
      .get();

    if (stRef.docs.length == 0) {
      Alert.alert("That title does not exist");
    } else {
      var titles = [];
      stRef.docs.map((title) => {
        var data = title.data();
        titles.push(data);
      });
      this.setState({
        stories: titles,
      });
    }
    console.log(this.state.stories);
  };
  showStories = () => {
return(
<FlatList data={this.state.stories}
renderItem={({item})=>(
  <View>
    <Text>Title: {item.Title}</Text>
    <Text>Author: {item.Author}</Text>
  </View>
)}
>

</FlatList>
);
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder={"Search Book"}
          style={{
            position: "absolute",
            left: 165,
            top: 50,
            borderWidth: 1,
            borderColor: "black",
          }}
          onChangeText={(value) => {
            this.setState({
              searched: value,
            });
          }}
        ></TextInput>
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 165,
            top: 70,
            borderWidth: 1,
            borderColor: "black",
          }}
          onPress={() => {this.fetchStories();}}
        >
          <Text>Search</Text>
        </TouchableOpacity>

        {this.showStories()}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

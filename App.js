import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

export default class App extends Component {
  render() {
    console.log("App Strted Successfully!!!");
    return <Text style={styles.component}>HelloWorld</Text>;
  }
}

const styles = StyleSheet.create({
  component: {
    fontSize: 21,
    alignItems: "center",
  },
});

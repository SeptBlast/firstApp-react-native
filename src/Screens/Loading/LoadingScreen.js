import React, { Component } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import firebase from "firebase";

export class LoadingCogWheel extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate("Dashboard");
      } else {
        this.props.navigation.navigate("Login");
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00a" />
      </View>
    );
  }
}

export default LoadingCogWheel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

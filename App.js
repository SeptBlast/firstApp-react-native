import { LogBox } from "react-native";
import React from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import firebase from "firebase";

import AppNavigator from "./src/Routes/Navigator";
import { firebaseConfig } from "./src/config/firebase.config";

firebase.initializeApp(firebaseConfig);
LogBox.ignoreLogs(["Setting a timer"]);

export default class App extends React.Component {
  state = {
    isFontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      // @ts-ignore
      SemiBold: require("./src/Fonts/Montserrat-SemiBold.otf"),
      // @ts-ignore
      Medium: require("./src/Fonts/Montserrat-Medium.otf"),
      // @ts-ignore
      Regular: require("./src/Fonts/Montserrat-Regular.otf"),
    });
    this.setState({ isFontLoaded: true });
  }

  render() {
    return this.state.isFontLoaded === true ? <AppNavigator /> : AppLoading;
  }
}

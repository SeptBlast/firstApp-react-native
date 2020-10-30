import { StatusBar } from "expo-status-bar";
import React from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import AppNavigator from "./src/Routes/Navigator";

export default class App extends React.Component {
  state = {
    isFontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      SemiBold: require("./src/Fonts/Montserrat-SemiBold.otf"),
      Medium: require("./src/Fonts/Montserrat-Medium.otf"),
      Regular: require("./src/Fonts/Montserrat-Regular.otf"),
    });
    this.setState({ isFontLoaded: true });
  }

  render() {
    return this.state.isFontLoaded === true ? <AppNavigator /> : AppLoading;
  }
}

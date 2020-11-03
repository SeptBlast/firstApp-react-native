import { LogBox } from "react-native";
import React, { useEffect } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import firebase from "firebase";
import { FontAwesome } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import AsyncStorage from "@react-native-community/async-storage";

import AppNavigator from "./src/Routes/Navigator";
import { firebaseConfig } from "./src/config/firebase.config";

firebase.initializeApp(firebaseConfig);
LogBox.ignoreLogs(["Setting a timer"]);

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}

// const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

// useEffect(() => {
//   AsyncStorage.getItem("alreadyLaunched").then((value) => {
//     if (value == null) {
//       AsyncStorage.setItem("alreadyLaunched", "true");
//       setIsFirstLaunch(true);
//     } else {
//       setIsFirstLaunch(false);
//     }
//   });
// }, []);

export default class App extends React.Component {
  constructor() {
    // @ts-ignore
    super();

    this.state = {
      isReady: false,
      isFontLoaded: false,
    };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require("./src/Images/image1.png")]);
    const fontAssets = cacheFonts([FontAwesome.font]);
    await Promise.all([...fontAssets, ...imageAssets]);
  }

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
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return this.state.isFontLoaded === true ? <AppNavigator /> : AppLoading;
  }
}

import React, { Component } from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export class PreOnBoardingScreen extends Component {
  render() {
    const handleOnClosePress = () => this.props.navigation.navigate("Loading");
    return (
      <Onboarding
        titleStyles={{ fontFamily: "Medium" }}
        subTitleStyles={{ fontFamily: "Medium", fontSize: 10 }}
        pages={[
          {
            title: "Legal Consultation",
            backgroundColor: "#ffd",
            image: <Image source={require("../../Images/Legal.png")} />,
            subtitle:
              "Helps in giving the legal Backups for the Startups to focus more on making the products more effective.",
          },
          {
            title: "Technical Consultation",
            backgroundColor: "#fef",
            image: <Image source={require("../../Images/Tech.png")} />,
            subtitle:
              "Helps in giving the legal Backups for the Startups to focus more on making the products more effective.",
          },
        ]}
        onDone={() => this.props.navigation.navigate("Loading")}
        onSkip={() => this.props.navigation.navigate("Loading")}
      />
    );
  }
}

export default PreOnBoardingScreen;

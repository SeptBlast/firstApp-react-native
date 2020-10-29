import React from "react";
import { Text, View, Image, StyleSheet, TextInput, Button } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
// import { TextInput } from "react-native-gesture-handler";

export default class Register extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={stylesSheetVar.bodyComponent}>
        <Image
          // @ts-ignore
          source={require("../../Images/image1.png")}
          style={stylesSheetVar.imageComponent}
        />
        <Text style={stylesSheetVar.textHeader}>Join the world of Keepers</Text>

        <Text style={stylesSheetVar.textBody}>
          We being keepers tries our best to reduce the uses of natural
          resources and tries to keep the society polutant friendly.
        </Text>

        <View style={stylesSheetVar.formInput1Body}>
          <Icon name="mail" size={24} />
          <TextInput
            placeholder="Email"
            style={stylesSheetVar.textInputFormBody}
          />
        </View>
        <View style={stylesSheetVar.formInput2Body}>
          <Icon name="lock" size={24} />
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={stylesSheetVar.textInputFormBody}
          />
        </View>
        <View style={stylesSheetVar.formInput2Body}>
          <Icon name="lock" size={24} />
          <TextInput
            secureTextEntry
            placeholder="Confirm Password"
            style={stylesSheetVar.textInputFormBody}
          />
        </View>
        <View style={stylesSheetVar.buttonRegister}>
          <Text style={stylesSheetVar.buttonPlaceHolder}>Register</Text>
        </View>
        <Text
          onPress={() => navigate("Login")}
          style={stylesSheetVar.buttonNewUser}
        >
          Already a User!!!
        </Text>
      </View>
    );
  }
}

const stylesSheetVar = StyleSheet.create({
  bodyComponent: {
    backgroundColor: "#fff",
    height: "100%",
  },
  imageComponent: {
    width: "100%",
    height: "50%",
  },
  textHeader: {
    fontSize: 28,
    fontFamily: "SemiBold",
    alignSelf: "center",
    marginTop: 25,
  },
  textBody: {
    fontFamily: "Medium",
    marginHorizontal: 20,
    textAlign: "center",
    marginTop: 25,
    opacity: 0.75,
  },
  formInput1Body: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop: 35,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 2,
    fontFamily: "Medium",
  },
  formInput2Body: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop: 15,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 2,
    fontFamily: "Medium",
  },
  textInputFormBody: {
    paddingHorizontal: 10,
  },
  buttonRegister: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "#000",
    paddingVertical: 10,
    borderRadius: 25,
  },
  buttonPlaceHolder: {
    color: "white",
    fontFamily: "Medium",
  },
  buttonNewUser: {
    alignSelf: "center",
    fontFamily: "SemiBold",
    paddingVertical: 20,
  },
});

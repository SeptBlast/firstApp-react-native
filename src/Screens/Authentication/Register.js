import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import Iconicon from "@expo/vector-icons/Ionicons";
import firebase from "firebase";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      password: "",
    };
  }

  signUpUser = (fullName, email, password) => {
    try {
      if (this.state.password.length < 8) {
        alert("Enter 8 character password");
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function (resultUser) {
          if (resultUser.additionalUserInfo.isNewUser) {
            firebase
              .database()
              .ref("/users/" + resultUser.user.uid)
              .set({
                user_host: "email",
                created_at: Date.now(),
                email: resultUser.user.email,
                first_name: fullName,
              });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

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
          resources and tries to keep the society pollutant friendly.
        </Text>

        <View style={stylesSheetVar.formInput1Body}>
          <Icon name="adduser" size={24} />
          <TextInput
            onChangeText={(fullName) => this.setState({ fullName })}
            placeholder="Full Name"
            style={stylesSheetVar.textInputFormBody}
          />
        </View>

        <View style={stylesSheetVar.formInput2Body}>
          <Iconicon name="ios-at" size={24} />
          <TextInput
            onChangeText={(email) => this.setState({ email })}
            placeholder="Email"
            style={stylesSheetVar.textInputFormBody}
          />
        </View>

        <View style={stylesSheetVar.formInput2Body}>
          <Iconicon name="ios-lock" size={24} />
          <TextInput
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
            placeholder="Password"
            style={stylesSheetVar.textInputFormBody}
          />
        </View>

        <TouchableOpacity
          onPress={() =>
            this.signUpUser(
              this.state.fullName,
              this.state.email,
              this.state.password
            )
          }
        >
          <View style={stylesSheetVar.buttonRegister}>
            <Text
              onPress={() =>
                this.signUpUser(
                  this.state.fullName,
                  this.state.email,
                  this.state.password
                )
              }
              style={stylesSheetVar.buttonPlaceHolder}
            >
              Register
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("Login")}>
          <Text
            onPress={() => navigate("Login")}
            style={stylesSheetVar.buttonNewUser}
          >
            I am Already a User!!!
          </Text>
        </TouchableOpacity>
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

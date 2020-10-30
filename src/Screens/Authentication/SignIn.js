import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TextInput, Button } from "react-native";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";
import Icon from "@expo/vector-icons/Ionicons";
import Animated from "react-native-reanimated";
import {
  TapGestureHandler,
  State,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  signInUser = (email, password) => {
    try {
      if (!this.state.password || !this.state.email) {
        alert("Entered Email and Password are ill Structured");
        return;
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (user) {
          console.log(user);
        });
    } catch (error) {
      console.log(error);
    }
  };

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = (googleUser) => {
    // console.log("Google Auth Response", googleUser);
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function (firebaseUser) {
        unsubscribe();
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function (result) {
              if (result.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref("/users/" + result.user.uid)
                  .set({
                    user_host: "gmail",
                    email: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    locale: result.additionalUserInfo.profile.locale,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now(),
                  })
                  .then(function (snapshot) {});
              } else {
                firebase
                  .database()
                  .ref("/users/" + result.user.uid)
                  .update({
                    last_logged_in: Date.now(),
                  });
              }
            })
            .catch(function (error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              var email = error.email;
              var credential = error.credential;
              // ...
            });
        } else {
          console.log("User already signed-in Firebase.");
        }
      }.bind(this)
    );
  };

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        // behavior: "web",
        androidClientId:
          "149981397597-ol90ea0u6omubcuea49m9ipsb2a42ood.apps.googleusercontent.com",
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
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
          <Icon name="ios-at" size={24} />
          <TextInput
            onChangeText={(email) => this.setState({ email })}
            placeholder="Email"
            style={stylesSheetVar.textInputFormBody}
          />
        </View>
        <View style={stylesSheetVar.formInput2Body}>
          <Icon name="ios-lock" size={24} />
          <TextInput
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry
            placeholder="Password"
            style={stylesSheetVar.textInputFormBody}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.signInUser(this.state.email, this.state.password)}
        >
          <View style={stylesSheetVar.buttonLogin}>
            <Text
              onPress={() =>
                this.signInUser(this.state.email, this.state.password)
              }
              style={stylesSheetVar.buttonPlaceHolder}
            >
              Already a Member
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.signInWithGoogleAsync()}>
          <View style={stylesSheetVar.buttonLogin}>
            <Text
              onPress={() => this.signInWithGoogleAsync()}
              style={stylesSheetVar.buttonPlaceHolder}
            >
              Sign In with Google
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("Register")}>
          <Text
            onPress={() => navigate("Register")}
            style={stylesSheetVar.buttonNewUser}
          >
            It's my First Visit!!!
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
  buttonLogin: {
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
    paddingVertical: 25,
  },
});

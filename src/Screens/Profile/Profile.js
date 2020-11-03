import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  SafeAreaView,
  Alert,
} from "react-native";
import { MaterialIcons, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "firebase";

const showAlert = () => {
  Alert.alert("⚠️ Warning", "Are you sure you wanna logout!!!", [
    { text: "👍🏻 Yes", onPress: () => firebase.auth().signOut() },
    { text: "❌ Cancel" },
  ]);
};

export default class Profile extends Component {
  state = { user: {} };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.setState({ user: user });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <View
          style={{
            backgroundColor: "#ababab",
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
        >
          <View style={styles.titleBar}>
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="#52575d"
              onPress={() => this.props.navigation.navigate("Dashboard")}
            />
            <SimpleLineIcons
              name="logout"
              size={24}
              color="#52575d"
              onPress={showAlert}
            />
          </View>

          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
              <Image
                source={require("../../Images/Profile.png")}
                style={styles.image}
                resizeMode="center"
              />
            </View>
            <View style={styles.dm}>
              <MaterialIcons name="chat" size={18} color="#ded8c8" />
            </View>
            <View style={styles.active}></View>
            <View style={styles.add}>
              <Ionicons
                name="ios-add"
                size={48}
                color="#dfd8cb"
                style={{ marginTop: 1, marginLeft: 2 }}
              />
            </View>
          </View>

          <View style={styles.profileInfo}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
              Devesh
            </Text>
            <Text style={[styles.text, { color: "#dfd8c8", fontSize: 14 }]}>
              Developer
            </Text>
            <Text style={[styles.text, { color: "#dfd8c8", fontSize: 14 }]}>
              {this.state.user.email}
            </Text>
          </View>

          <View
            style={[
              styles.statsContainer,
              {
                paddingBottom: 32,
              },
            ]}
          >
            <View style={styles.statsBox}>
              <Text style={[styles.text, { fontSize: 24 }]}>4</Text>
              <Text style={[styles.text, styles.subText, { color: "#dfd8c8" }]}>
                Services
              </Text>
            </View>
            <View
              style={[
                styles.statsBox,
                {
                  borderColor: "#dfd8c8",
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                },
              ]}
            >
              <Text style={[styles.text, { fontSize: 24 }]}>5,000,000</Text>
              <Text style={[styles.text, styles.subText, { color: "#dfd8c8" }]}>
                Revenue
              </Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={[styles.text, { fontSize: 24 }]}>2</Text>
              <Text style={[styles.text, styles.subText, { color: "#dfd8c8" }]}>
                Investors
              </Text>
            </View>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 32 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../Images/Photo.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../Images/Photo.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../Images/Photo.jpeg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../Images/Photo.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../Images/Photo.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
            </ScrollView>

            {/* <View style={styles.mediaCount}>
              <Text
                style={[
                  styles.text,
                  { fontSize: 24, color: "#ded8cb", fontWeight: "300" },
                ]}
              >
                10
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 12,
                    color: "#dfd8c8",
                    textTransform: "uppercase",
                  },
                ]}
              >
                Media
              </Text>
            </View> */}
          </View>

          <Text style={[styles.subText, styles.recent]}>Recent Activities</Text>

          <View style={{ alignItems: "center" }}>
            <View style={styles.recentItem}>
              <View style={styles.recentItemIndicator}></View>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444b", fontWeight: "300" }]}
                >
                  Started following{" "}
                  <Text style={{ fontWeight: "400" }}>StartupManch</Text> and{" "}
                  <Text style={{ fontWeight: "400" }}>StartupIndia</Text>
                </Text>
              </View>
            </View>
            <View style={styles.recentItem}>
              <View style={styles.recentItemIndicator}></View>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444b", fontWeight: "300" }]}
                >
                  Started following{" "}
                  <Text style={{ fontWeight: "400" }}>Devesh Kumar</Text>
                </Text>
              </View>
            </View>
            <View style={styles.recentItem}>
              <View style={styles.recentItemIndicator}></View>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444b", fontWeight: "300" }]}
                >
                  Started following{" "}
                  <Text style={{ fontWeight: "400" }}>NDTV</Text>
                </Text>
              </View>
            </View>
            <View style={styles.recentItem}>
              <View style={styles.recentItemIndicator}></View>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444b", fontWeight: "300" }]}
                >
                  Started following{" "}
                  <Text style={{ fontWeight: "400" }}>StartupStates</Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef",
  },
  text: {
    fontFamily: "Medium",
    color: "#52575d",
  },
  subText: {
    fontSize: 12,
    color: "#aeb5bc",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginRight: 38,
    marginLeft: 30,
    marginHorizontal: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444b",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34ffb9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444b",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  profileInfo: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444b",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 80,
    marginTop: 32,
    marginBottom: 10,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  recentItemIndicator: {
    backgroundColor: "#cabfab",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../Screens/Authentication/SignIn";
import Register from "../Screens/Authentication/Register";

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(AppNavigator);

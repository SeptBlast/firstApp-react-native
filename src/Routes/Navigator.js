import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Loading from "../Screens/Loading/LoadingScreen";
import Login from "../Screens/Authentication/SignIn";
import Register from "../Screens/Authentication/Register";
import Dashboard from "../Screens/DashBoard/DashboardScreen";

const AppNavigator = createStackNavigator(
  {
    // Loading: { screen: Loading },
    Login: { screen: Login },
    Register: { screen: Register },
    Dashboard: { screen: Dashboard },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(AppNavigator);

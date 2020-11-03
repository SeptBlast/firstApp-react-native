import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Loading from "../Screens/Loading/LoadingScreen";
import Login from "../Screens/Authentication/SignIn";
import Register from "../Screens/Authentication/Register";
import Dashboard from "../Screens/DashBoard/DashboardScreen";
import PreOnboard from "../Screens/PreLaunch/PreOnBoardingScreen";
import Profile from "../Screens/Profile/Profile";

const AppSwitchNavigator = createSwitchNavigator(
  {
    PreOnboard: { screen: PreOnboard },
    Loading: { screen: Loading },
    Login: { screen: Login },
    Register: { screen: Register },
    Dashboard: { screen: Dashboard },
    Profile: { screen: Profile },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default createAppContainer(AppNavigator);

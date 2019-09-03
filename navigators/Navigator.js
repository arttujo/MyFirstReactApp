import react from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../views/Home";
import Profile from "../views/Profile";
import Single from "../views/Single";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Profile"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const Navigator = createStackNavigator(
  // RouteConfigs
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        header: null // this will hide the header
      }
    },
    Single: {
      screen: Single
    }
  }
);

export default createAppContainer(Navigator);

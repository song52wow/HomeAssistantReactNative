/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

import Welcome from "./src/views/Welcome";
import ScanNetwork from "./src/views/ScanNetwork";
import SetNetwork from "./src/views/SetNetwork";
import Authen from "./src/views/Authen";
import { Alert, Text, View } from "react-native";
import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";

interface INavList {
  [key: string]: {
    component: React.ComponentType<any>;
    options?: DrawerNavigationOptions;
  };
}

const navList: INavList = {
  Welcome: {
    component: Welcome,
  },
  ScanNetwork: {
    component: ScanNetwork
  },
  SetNetwork: {
    component: SetNetwork
  },
  Authen: {
    component: Authen
  }
};

const App = () => {
  const Drawer = createDrawerNavigator();
  // const Stake = createStackNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {Object.entries(navList).map(([key, value]) => (
          <Drawer.Screen key={key} name={key} component={value.component} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

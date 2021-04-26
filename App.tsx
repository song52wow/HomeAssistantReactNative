/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler'
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


import Welcome from "./src/views/Welcome";
import ScanNetwork from './src/views/ScanNetwork';
import SetNetwork from './src/views/SetNetwork';
import Authen from './src/views/Authen';

const Stack = createStackNavigator()

const App = () => {
  const navList = {
    Welcome,
    ScanNetwork,
    SetNetwork,
    Authen
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          Object.entries(navList).map(([key, value]) => (
            <Stack.Screen key={key} name={key} component={value} />
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

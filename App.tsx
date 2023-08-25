import React from "react";
import { Platform,SafeAreaView } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import Router from "./src/configurations/Router";
import {  StatusBar as ExpoStatusBar } from "expo-status-bar"; // Import ExpoStatusBar
import { useColorScheme } from 'react-native';
import DrawerMenu from "./src/components/DrawerMenu";
const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#3D4147", // Set your background color here
    primary: "#3D4147", // Set the primary color to red
  },
};

export default function App() {
  const scheme = useColorScheme();
  const isIOS = Platform.OS === "ios";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#3D4147",paddingTop:0 }}>
      {/* Use ExpoStatusBar from expo-status-bar package */}
      <ExpoStatusBar style={isIOS ? "light" : "auto"} backgroundColor="#3D4147" />
      <NavigationContainer theme={scheme === 'dark' ? CustomDarkTheme : DefaultTheme}>
      <DrawerMenu component={Router}/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

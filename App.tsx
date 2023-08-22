import React from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import Router from "./src/configurations/Router";
import { SafeAreaView } from "react-native";
import { useColorScheme } from 'react-native';

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#3D4147" }}>
      {isIOS && <StatusBar style="light" />}
      <NavigationContainer theme={scheme === 'dark' ? CustomDarkTheme : DefaultTheme}>
        <Router />
      </NavigationContainer>
    </SafeAreaView>
  );
}

import React from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/configurations/Router";
import { SafeAreaView } from "react-native";

export default function App() {
  const isIOS = Platform.OS === "ios";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#3D4147" }}>
      {isIOS && <StatusBar style="light" />}
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaView>
  );
}

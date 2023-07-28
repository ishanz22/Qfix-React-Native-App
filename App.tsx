import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/configurations/Router";
import { SafeAreaView } from "react-native";


export default function App() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#3D4147'}}>
   <StatusBar style="light" />
    <NavigationContainer>
     
      <Router />
    </NavigationContainer>
          
    </SafeAreaView>
  );
}

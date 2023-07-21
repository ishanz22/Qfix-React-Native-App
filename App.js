import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/configurations/Router";

export default function App() {
  return (
    <NavigationContainer>
           {/* {Platform.OS === 'ios' && <StatusBar style="auto" />}  */}
    <Router />
  </NavigationContainer>
  );
}


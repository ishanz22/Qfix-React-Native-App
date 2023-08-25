import React from "react";
import { Alert, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";

import HeaderRight from "./HeaderRight";
import Header from "./Header";

import { useNavigation } from "@react-navigation/native";
const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation();



  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props}/> */}
      <View style={{ paddingHorizontal: 16, marginTop: "10%" }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            paddingTop: 15,
            color: 'red',
          }}
        >
          Shashika Mahindapala{" "}
        </Text>
        <Text style={{ fontSize: 14, color: "#666" }}>Shaskika@gmail.com</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.separator} />

      <View style={styles.separator} />

      <View style={styles.separator} />
    </DrawerContentScrollView>
  );
};

// @ts-ignore
const DrawerMenu = ({ component }) => {
  const Drawer = createDrawerNavigator();
  const renderHeader = (title: string) => {
    return () => <Header title={title} />; // use the Header component
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        headerTitle: renderHeader("Text Based Ticketing"),
 
      }}
      initialRouteName="Home"
      detachInactiveScreens={true}
      defaultStatus={"closed"}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={component}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 16,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  icon: {
    color: "rgba(58, 79, 102, 0.7)",
  },
  text: {
    fontSize: 15,
    color:'red',
    width: "70%",
    textAlign: "left",
    paddingLeft: 15,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(204, 204, 204, 0.8)",
    marginHorizontal: 16,
    width: "85%",
    alignSelf: "flex-end",
  },
  logoutText: {
    fontSize: 15,
    color: "#DC3545",
    width: "70%",
    textAlign: "left",
    paddingLeft: 15,
  },
  logoutIcon: {
    color: "#DC3545",
  },
});

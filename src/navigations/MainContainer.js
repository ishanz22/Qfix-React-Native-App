import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View, Image, StyleSheet, Text } from "react-native";
import HomeScreen from "../views/HomeScreen";
import ContractScreen from "../views/ContractScreen";
import SupportScreen from "../views/SupportScreen";
import HomeStack from "./Stack/HomeStack";
import ContractStack from "./Stack/ContractStack";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#FBB92B",
        tabBarStyle: { height: 70 },
        tabBarItemStyle: { backgroundColor: "rgb(96,99,104)", padding: 10 },

        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let iconColor = focused ? "#FBB92B" : "white";

          if (route.name === "Screen1") {
            iconName = "home";
          } else if (route.name === "Screen2") {
            iconName = "settings";
          } else if (route.name === "Screen3") {
            iconName = "person";
          }

          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },

        tabBarLabel: ({ focused, color }) => {
          let labelText;

          if (route.name === "Screen1") {
            labelText = "Homess"; // Change the label text for 'Screen1'
          } else if (route.name === "Screen2") {
            labelText = "Contracts"; // Change the label text for 'Screen2'
          } else if (route.name === "Screen3") {
            labelText = "Support"; // Change the label text for 'Screen3'
          }

          return (
            <Text
              style={{ color: focused ? "#FBB92B" : "white", fontSize: 12 }}
            >
              {labelText}
            </Text>
          );
        },
        header: ({ navigation }) => (
          <View style={styles.headerContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../assets/qlogo.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            <View style={styles.cartIconWrapper}>
              {/* Add the Expo vector icon here */}
              <TouchableOpacity
                onPress={() => console.log("Cart icon pressed")}
                

                style={styles.cartIcon}
              >
                <AntDesign name="shoppingcart" size={27} color="#FBB92B" />
              </TouchableOpacity>
            </View>
          </View>
        ),
      })}
    >
      {/* <Tab.Screen name="Screen1" component={HomeScreen} /> */}
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{ color: focused ? "#FBB92B" : "white", fontSize: 12 }}
            >
              Home
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="home"
              color={focused ? "#FBB92B" : "white"}
              size={25}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Screen2"
        options={{ headerShown: false }}
        component={ContractStack}
      />
      <Tab.Screen name="Screen3" component={SupportScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3D4147",
    height: 90,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",
  },
  logo: {
    width: 100,
    height: 50,
  },
  cartIconWrapper: {
    position: "absolute",
    right: 15,
    top: "45%",
  },
  cartIcon: {},
});

export default MainContainer;

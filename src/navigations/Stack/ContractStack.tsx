import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../views/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import ACService from "../../views/services/ac/ACService";
import { Ionicons } from "@expo/vector-icons";
import SalonAnnualPackages from "../../views/Packages/SalonAnnualPackages";
import ContractScreen from "../../views/ContractScreen";
import VillaAnnualPackages from "../../views/Packages/VillaAnnualPackages";
import RestaurantAnnualPackages from "../../views/Packages/RestaurantAnnualPackages";
import ClinicAnnualPackages from "../../views/Packages/ClinicAnnualPackages";
const Stack = createStackNavigator();

const ContractStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="contract"
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
            iconName = "home";
          } else if (route.name === "Screen3") {
            iconName = "person";
          }

          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },

        tabBarLabel: ({ focused, color }) => {
          let labelText;

          if (route.name === "Screen1") {
            labelText = "Home"; // Change the label text for 'Screen1'
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
        header: ({ navigation }) => {
          let headerLeftButton;

          if (route.name === "villaAnnual" || route.name === "salonAnnual" ||route.name === "restaurantAnnual" || route.name === "clinicAnnual"  ) {
            headerLeftButton = (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
              >
                <Ionicons
               
                  name="chevron-back"
                  size={27}
                  color="#FBB92B"
                />
              </TouchableOpacity>
            );
          } else {
            headerLeftButton = null;
          }

          return (
            <View style={styles.headerContainer}>
              <View style={styles.logoContainer}>
                <Image
                  source={require("../../assets/qlogo.png")}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.cartIconWrapper}>
                <TouchableOpacity
                 onPress={() =>   navigation.navigate('cartScreen')}
                  style={styles.cartIcon}
                >
                  <AntDesign name="shoppingcart" size={27} color="#FBB92B" />
                </TouchableOpacity>
              </View>

              {headerLeftButton}
            </View>
          );
        },
      })}
    >
      <Stack.Screen
        name="contract"
        component={ContractScreen}
        options={{
          title: " ", // Hide the header for ContractScreen
        }}
      />

      {/* Salon*/}
      <Stack.Screen
        name="villaAnnual"
        component={VillaAnnualPackages}
        options={{
          title: " ",
        }}
      />
      <Stack.Screen
        name="salonAnnual"
        component={SalonAnnualPackages}
        options={{
          title: " ",
        }}
      />

      <Stack.Screen
        name="restaurantAnnual"
        component={RestaurantAnnualPackages}
        options={{
          title: " ",
        }}
      />
      {/* clinicAnnual */}

      <Stack.Screen
        name="clinicAnnual"
        component={ClinicAnnualPackages}
        options={{
          title: " ",
        }}
      />
    </Stack.Navigator>
  );
};

export default ContractStack;

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
  backButton: {
    position: "absolute",
    left: 12,
    top: "45%",
  },
});

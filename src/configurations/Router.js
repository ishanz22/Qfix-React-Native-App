import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MainContainer from "../navigations/MainContainer";
import HomeScreen from "../views/HomeScreen";
import ContractScreen from "../views/ContractScreen";
import SupportScreen from "../views/SupportScreen";
import ACService from "../views/services/ac/ACService";
import ACSupplyService from "../views/services/ac/ACSupplyService";
import { Ionicons } from "@expo/vector-icons";
import SalonAnnualPackages from "../views/Packages/SalonAnnualPackages";
import VillaAnnualPackages from "../views/Packages/VillaAnnualPackages";
import RestaurantAnnualPackages from "../views/Packages/RestaurantAnnualPackages";
import ClinicAnnualPackages from "../views/Packages/ClinicAnnualPackages";
import CartScreen from "../views/payment/CartScreen";
import Checkout from "../views/payment/CheckoutScreen";
import PlumbingService from "../views/services/Plumbing/PlumbingService";
import ElectricalService from "../views/services/electrical/ElectricalService";
import PaintingService from "../views/services/painting/PaintingService";
import HandymanService from "../views/services/handyman/HandymanService";
import CarpentryService from "../views/services/carpentry/CarpentryService";
import CleaningService from "../views/services/cleaning/CleaningService";
import PestControlService from "../views/services/pest/PestControlService";
import ShopScreen from "../views/ShopScreen";
import ViewItemScreen from "../views/viewItems/ViewItemScreen";
const Stack = createStackNavigator();

const hide = { headerShown: true };
const hideHeader = { headerShown: false };

const ACSupplyServiceHeader = ({ navigation }) => (
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
        onPress={() => navigation.navigate("cartScreen")}
        style={styles.cartIcon}
      >
        <AntDesign name="shoppingcart" size={27} color="#FBB92B" />
      </TouchableOpacity>
    </View>

    <View style={styles.cheveronWrapper}>
      {/* Add the Expo vector icon here */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.cheveron}
      >
        <Ionicons name="chevron-back" size={27} color="#FBB92B" />
      </TouchableOpacity>
    </View>
  </View>
);

const ACSupplyHeader = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/qlogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>

    <View style={styles.cheveronWrapper}>
      {/* Add the Expo vector icon here */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.cheveron}
      >
        <Ionicons name="chevron-back" size={27} color="#FBB92B" />
      </TouchableOpacity>
    </View>
  </View>
);

const AnnualPackageHeader = ({ navigation }) => (
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
        onPress={() => navigation.navigate("cartScreen")}
        style={styles.cartIcon}
      >
        <AntDesign name="shoppingcart" size={27} color="#FBB92B" />
      </TouchableOpacity>
    </View>

    <View style={styles.cheveronWrapper}>
      {/* Add the Expo vector icon here */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.cheveron}
      >
        <Ionicons name="chevron-back" size={27} color="#FBB92B" />
      </TouchableOpacity>
    </View>
  </View>
);
const CartHeader = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <View style={styles.logoContainer}>
      <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
        Cart
      </Text>
    </View>

    <View style={styles.cheveronWrapper}>
      {/* Add the Expo vector icon here */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.cheveron}
      >
        <Ionicons name="chevron-back" size={27} color="#FBB92B" />
      </TouchableOpacity>
    </View>
  </View>
);

const CheckoutHeader = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <View style={styles.logoContainer}>
      <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
        Checkout
      </Text>
    </View>

    <View style={styles.cheveronWrapper}>
      {/* Add the Expo vector icon here */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.cheveron}
      >
        <Ionicons name="chevron-back" size={27} color="#FBB92B" />
      </TouchableOpacity>
    </View>
  </View>
);
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainContainer">
      <Stack.Screen
        name="MainContainer"
        component={MainContainer}
        options={hideHeader}
      />
      <Stack.Screen name="home" component={HomeScreen} options={hide} />
      <Stack.Screen name="contract" component={ContractScreen} options={hide} />
      <Stack.Screen name="support" component={SupportScreen} options={hide} />
      <Stack.Screen name="acservice" component={ACService} options={hide} />
      <Stack.Screen
        name="plumbing"
        component={PlumbingService}
        options={hide}
      />
      <Stack.Screen
        name="electric"
        component={ElectricalService}
        options={hide}
      />
      <Stack.Screen
        name="painting"
        component={PaintingService}
        options={hide}
      />
      <Stack.Screen
        name="handyman"
        component={HandymanService}
        options={hide}
      />
      <Stack.Screen
        name="carpentry"
        component={CarpentryService}
        options={hide}
      />
      <Stack.Screen
        name="cleaning"
        component={CleaningService}
        options={hide}
      />
      <Stack.Screen name="pest" component={PestControlService} options={hide} />
      <Stack.Screen name="shop" component={ShopScreen} options={hide} />

      <Stack.Screen
        name="acsupplyservice"
        component={ACSupplyService}
        options={{
          header: ACSupplyHeader,
        }}
      />

      <Stack.Screen
        name="salonAnnual"
        component={SalonAnnualPackages}
        options={{
          header: AnnualPackageHeader,
        }}
      />
      <Stack.Screen
        name="villaAnnual"
        component={VillaAnnualPackages}
        options={{
          header: AnnualPackageHeader,
        }}
      />

      <Stack.Screen
        name="restaurantAnnual"
        component={RestaurantAnnualPackages}
        options={{
          header: AnnualPackageHeader,
        }}
      />

      <Stack.Screen
        name="clinicAnnual"
        component={ClinicAnnualPackages}
        options={{
          header: AnnualPackageHeader,
        }}
      />
      <Stack.Screen
        name="cartScreen"
        component={CartScreen}
        options={{
          header: CartHeader,
        }}
      />
      <Stack.Screen
        name="viewItem"
        component={ViewItemScreen}
        options={{
          header: AnnualPackageHeader,
        }}
      />

      {/*  */}
      <Stack.Screen
        name="checkout"
        component={Checkout}
        options={{
          header: CheckoutHeader,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;

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
  cheveronWrapper: {
    position: "absolute",
    left: 12,
    top: "45%",
  },
  cartIcon: {},
  cheveron: {},
});

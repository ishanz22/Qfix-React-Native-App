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
import ACInstall from "../components/services/AC/ACInstall";
import ACRepair from "../components/services/AC/ACRepair";
import ElectricSupply from "../components/services/Electric/ElectricalSupply";
import ElectricInstall from "../components/services/Electric/ElectricInstall";
import ElectricRepair from "../components/services/Electric/ElectricalRepair";
import PlumbingInstall from "../components/services/Plumbing/PlumbingInstall";
import PlumbingRepair from "../components/services/Plumbing/PlumbingRepair";
import PlumbingSupply from "../components/services/Plumbing/PlumbingSupply";
import BookingScreen from "../views/services/booking/BookingScreen";
import LoginScreen from "../views/LoginScreen";
import SignUpScreen from "../views/SignUpScreen";
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

const ACSupplyHeader = ({ navigation }): any => (
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

const BookingHeader = ({ navigation }): any => (
  <View style={styles.headerContainer}>
    <View style={styles.logoContainer}>
      <Text
        style={{
          fontSize: 24,
          color: "white",
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        Booking
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
const AnnualPackageHeader = ({ navigation }): any => (
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
const CartHeader = ({ navigation }): any => (
  <View style={[styles.headerContainer, styles.additionalStyle]}>
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

const CheckoutHeader = ({ navigation }): any => (
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
    <Stack.Navigator >
               <Stack.Screen name="login" component={LoginScreen} options={hideHeader} />
         <Stack.Screen name="signup" component={SignUpScreen} options={hideHeader} />
      <Stack.Screen
        name="MainContainer"
        component={MainContainer}
        options={hideHeader}
      />

      <Stack.Screen name="home" component={HomeScreen} options={hide} />
      <Stack.Screen name="contract" component={ContractScreen} options={hide} />
      <Stack.Screen name="support" component={SupportScreen} options={hide} />
      <Stack.Screen
        name="acservice"
        component={ACService}
        options={{
          header: ACSupplyHeader,
        }}
      />
      <Stack.Screen
        name="plumbing"
        component={PlumbingService}
        options={{
          header: ACSupplyHeader,
        }}
      />

      {/*  */}
      <Stack.Screen
        name="electric"
        component={ElectricalService}
        options={{
          header: ACSupplyHeader,
        }}
      />
      <Stack.Screen
        name="painting"
        component={PaintingService}
        options={{
          header: ACSupplyHeader,
        }}
      />
      <Stack.Screen
        name="handyman"
        component={HandymanService}
        options={{
          header: ACSupplyHeader,
        }}
      />
      <Stack.Screen
        name="carpentry"
        component={CarpentryService}
        options={{
          header: ACSupplyHeader,
        }}
      />
      <Stack.Screen
        name="cleaning"
        component={CleaningService}
        options={{
          header: ACSupplyHeader,
        }}
      />
      <Stack.Screen
        name="pest"
        component={PestControlService}
        options={{
          header: ACSupplyHeader,
        }}
      />
      <Stack.Screen
        name="booking"
        component={BookingScreen}
        options={{
          header: BookingHeader,
        }}
      />
      <Stack.Screen
        name="acsupplyservice"
        component={ACSupplyService}
        options={{
          header: ACSupplyHeader,
        }}
      />

      <Stack.Screen
        name="acinstall"
        component={ACInstall}
        options={{
          header: ACSupplyHeader,
        }}
      />

      <Stack.Screen
        name="acrepair"
        component={ACRepair}
        options={{
          header: ACSupplyHeader,
        }}
      />

      <Stack.Screen
        name="electricsupply"
        component={ElectricSupply}
        options={{
          header: ACSupplyHeader,
        }}
      />

      <Stack.Screen
        name="electricinstall"
        component={ElectricInstall}
        options={{
          header: ACSupplyHeader,
        }}
      />
      <Stack.Screen
        name="electricrepair"
        component={ElectricRepair}
        options={{
          header: ACSupplyHeader,
        }}
      />

      <Stack.Screen
        name="plumbinginstall"
        component={PlumbingInstall}
        options={{
          header: ACSupplyHeader,
        }}
      />
      <Stack.Screen
        name="plumbingrepair"
        component={PlumbingRepair}
        options={{
          header: ACSupplyHeader,
        }}
      />
      <Stack.Screen
        name="plumbingsupply"
        component={PlumbingSupply}
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
    paddingBottom: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 50,
  },
  cartIconWrapper: {
    position: "absolute",
    right: 15,
  },
  cheveronWrapper: {
    position: "absolute",
    left: 12,
  },
  cartIcon: {},
  cheveron: {},
  additionalStyle: {
    paddingTop: 15,
    paddingBottom: 15,
  },
});

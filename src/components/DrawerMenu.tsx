
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from the appropriate library

import Header from "./Header";

import { useNavigation } from "@react-navigation/native";

import { getAuth, signOut } from "firebase/auth"; // Make sure the import path is correct
// Replace the above import with your Firebase authentication import

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log("User signed out successfully.");

      // Close the drawer immediately after signing out
      props.navigation.closeDrawer();

      // Reset the navigation stack to only include the "login" screen
      navigation.reset({
        index: 0,
        routes: [{ name: "login" }],
      });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: "#3D4147" }}>
      <View style={{ paddingHorizontal: 16, alignItems: "flex-end" }}>
      <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
  <Text style={styles.signOutButtonText}>Log Out</Text>
</TouchableOpacity>
      </View>
<View style={{paddingTop:10}}/>

         {/* Button for Book Now */}
         <TouchableOpacity  style={styles.buttonContainer}>
        <Ionicons name="calendar-outline" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.text}>Book Now</Text>
        <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.chevronIcon} />
      </TouchableOpacity>

      {/* Button for Service */}
      <TouchableOpacity style={styles.buttonContainer}>
        <Ionicons name="settings-outline" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.text}>Service</Text>
        <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.chevronIcon} />
      </TouchableOpacity>

      {/* Button for My Bookings */}
      <TouchableOpacity  style={styles.buttonContainer}>
        <Ionicons name="book-outline" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.text}>My Bookings</Text>
        <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.chevronIcon} />
      </TouchableOpacity>

      <TouchableOpacity  style={styles.buttonContainer}>
        <Ionicons name="person-outline" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.text}>My Account</Text>
        <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.chevronIcon} />
      </TouchableOpacity>

      <TouchableOpacity  style={styles.buttonContainer}>
        <Ionicons name="information-circle-outline" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.text}>About Qfixs</Text>
        <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.chevronIcon} />
      </TouchableOpacity>

      <TouchableOpacity  style={styles.buttonContainer}>
        <Ionicons name="share-outline" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.text}>Share the App</Text>
        <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.chevronIcon} />
      </TouchableOpacity>


      
    </DrawerContentScrollView>
  );
};

const DrawerMenu = ({ component }) => {
  const Drawer = createDrawerNavigator();
  const renderHeader = (title) => {
    return () => <Header title={title} />;
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        swipeEnabled: false, 
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
  signOutButton: {
    borderWidth: 1,
    borderColor: "#FBB92B",
    backgroundColor: "#3D4147",
    padding: 10,
    borderRadius: 5,
  },

  signOutButtonText: {
    color: "#FBB92B",
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: "#35383D",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'white'
  },
  icon: {
    marginRight: 15
  },
  text: {
    color: "#fff",
    flex: 1
  },
  chevronIcon: {
    marginLeft: 10
  },
});


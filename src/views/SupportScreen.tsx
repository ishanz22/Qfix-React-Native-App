import React from "react";
import { View, ScrollView, StyleSheet, Text,TouchableOpacity } from "react-native";
import BookingCard from "../components/BookingCard";
import { navigate } from "@react-navigation/routers/lib/typescript/src/CommonActions";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";

const BookingScreen = () => {
  const navigation = useNavigation();
  // Dummy data for testing
  const bookings = [
    {
      fullName: "Kamal",
      email: "test@gmail.com",
      city: "Debai",
      street: "Deira",
      selectedDate: "2023-08-03",
      selectedTime: "9.30",
      issue: "ElectricRepair",
      acMechanics: 1,
      Purchase: 500,
    },
    {
      fullName: "Kamal",
      email: "test@gmail.com",
      city: "Debai",
      street: "Deira",
      selectedDate: "2023-08-03",
      selectedTime: "9.30",
      issue: "ElectricRepair",
      acMechanics: 1,
      Purchase: 500,
    },
    // Add more dummy data here if you want to test with multiple cards
  ];

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful
        
        console.log("User signed out successfully.");
        navigation.replace("login");
      })
      .catch((error) => {
        // An error occurred
        console.error("Error signing out:", error);
      });
  };

  return (
    <View style={{backgroundColor:'#3D4147'}}>


    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Bookings</Text>
        <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      </View>
      {bookings.map((booking, index) => (
        <BookingCard key={index} {...booking} />
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#3D4147",
    height: "100%",
  },
  headingContainer: {
    alignSelf: "flex-start",
  },
  headingText: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
    paddingBottom: 10,
  },
});

export default BookingScreen;

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


  return (
    <View style={{backgroundColor:'#3D4147'}}>


    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Bookings</Text>
        
      </View>
 
        <BookingCard  />
   
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

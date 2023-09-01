import React from "react";
import { View, ScrollView, StyleSheet, Text,TouchableOpacity } from "react-native";
import BookingCard from "../components/BookingCard";
import { navigate } from "@react-navigation/routers/lib/typescript/src/CommonActions";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";

const BookingScreen = () => {
  const navigation = useNavigation();



  return (
    <View style={{backgroundColor:'#3D4147'}}>


    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingContainer}>
        {/* <Text style={styles.headingText}><Text style={{fontSize:10}}>{"\n"}</Text>Bookings</Text> */}
        
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
    paddingTop:8
  },
  headingText: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
    paddingBottom: 10,
  },
});

export default BookingScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Checkout from "../../components/payment/Checkout";
import PaymentMethod from "../../components/payment/PaymentMethod";

const CheckoutScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <ScrollView style={{ backgroundColor: "#3D4147", height: "100%" }}>
      <View
        style={{
          paddingHorizontal: 16,
          backgroundColor: "#3D4147",
          height: "100%",
        }}
      >
        <Checkout />

        <View style={{ paddingTop: 10, alignItems: "center" }}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Pay with Link</Text>
          </TouchableOpacity>

          <Text style={{ color: "white", paddingTop: 10 }}>--OR--</Text>
        </View>

        <Text style={{ fontSize: 26, color: "white", fontWeight: "bold" }}>
          Billing Address
        </Text>

        <View style={styles.rowContainer}>
          {/* First Name Input */}
          <TextInput
            style={[styles.input, styles.rowItem, { width: "80%" }]}
            placeholder="First Name"
            placeholderTextColor="#888"
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
          />

          {/* Last Name Input */}
          <TextInput
            style={[
              styles.input,
              styles.rowItem,
              { width: "80%", marginLeft: 20 },
            ]}
            placeholder="Last Name"
            placeholderTextColor="#888"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
        </View>

        <View style={{ paddingTop: 5 }}>
          <TextInput
            style={[styles.input, styles.rowItem, { width: "100%" }]}
            placeholder="Company Name"
            placeholderTextColor="#888"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
        </View>
        <View style={{ paddingTop: 5 }}>
          <TextInput
            style={[styles.input, styles.rowItem, { width: "100%" }]}
            placeholder="Street Address"
            placeholderTextColor="#888"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
        </View>
        <View style={{ paddingTop: 5 }}>
          <TextInput
            style={[styles.input, styles.rowItem, { width: "100%" }]}
            placeholder="Street Address"
            placeholderTextColor="#888"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
        </View>

        <View style={{ paddingTop: 5 }}>
          <TextInput
            style={[styles.input, styles.rowItem, { width: "100%" }]}
            placeholder="Town / City"
            placeholderTextColor="#888"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
        </View>

        <View style={{ paddingTop: 5 }}>
          <TextInput
            style={[styles.input, styles.rowItem, { width: "100%" }]}
            placeholder="Phone"
            placeholderTextColor="#888"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
        </View>

        <View style={{ paddingTop: 5 }}>
          <TextInput
            style={[styles.input, styles.rowItem, { width: "100%" }]}
            placeholder="Email"
            placeholderTextColor="#888"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
        </View>
        <View style={{ paddingTop: 20 }} />
        <PaymentMethod />

        {/* Additional Address Inputs */}
        {/* Add more TextInput components as needed for additional address fields */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#33DDB3",
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonText: {
    color: "#3D4147",
    fontSize: 16,
    fontWeight: "normal",
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 7,
    marginTop: 10,
    width: "100%",
    color: "#000000",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowItem: {
    flex: 1,
  },
});

export default CheckoutScreen;

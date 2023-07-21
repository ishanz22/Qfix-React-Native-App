import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const PaymentMethod = () => {
  const [selectedOption, setSelectedOption] = useState("PayPal");
  const [checked, setChecked] = React.useState("first");

  const [isChecked, setIsChecked] = useState(false);

  const handleRadioClick = (option) => {
    setSelectedOption(option);
  };
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
        <View style={{ padding: 20, borderRadius: 8, backgroundColor: "#616571" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
          color: "white",
        }}
      >
        Choose Payment Method
      </Text>

      <TouchableOpacity onPress={() => handleRadioClick("PayPal")}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: selectedOption === "PayPal" ? "#007BFF" : "#ccc",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              backgroundColor: "white",
            }}
          >
            {selectedOption === "PayPal" && (
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: "#007BFF",
                }}
              />
            )}
          </View>
          <Text style={{ fontSize: 16, color: "white" }}>PayPal</Text>
        </View>
      </TouchableOpacity>
      <View style={{ height: 10 }} />
      <TouchableOpacity
        onPress={() => handleRadioClick("Debit & Credit Cards")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 12,
              borderWidth: 2,
              borderColor:
                selectedOption === "Debit & Credit Cards" ? "#007BFF" : "#ccc",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              backgroundColor: "white",
            }}
          >
            {selectedOption === "Debit & Credit Cards" && (
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: "#007BFF",
                }}
              />
            )}
          </View>
          <Text style={{ fontSize: 16, color: "white" }}>
            Debit & Credit Cards
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ height: 10 }} />
      <TouchableOpacity
        onPress={() => handleRadioClick("Credit Card (Stripe)")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 12,
              borderWidth: 2,
              borderColor:
                selectedOption === "Credit Card (Stripe)" ? "#007BFF" : "#ccc",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              backgroundColor: "white",
            }}
          >
            {selectedOption === "Credit Card (Stripe)" && (
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: "#007BFF",
                }}
              />
            )}
          </View>
          <Text style={{ fontSize: 16, color: "white" }}>
            Credit Card (Stripe)
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ paddingTop: 10 }} />
      <View style={styles.separator} />

      <Text style={{ color: "white", fontSize: 16 }}>
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our <Text style={{ fontWeight: "bold" }}>privacy policy.</Text>
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          onPress={handleCheckboxClick}
          style={{
            width: 22,
            height: 22,
            borderRadius: 4,

            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            backgroundColor: isChecked ? "#007BFF" : "#ccc",
          }}
        >
          {isChecked && <MaterialIcons name="check" size={16} color="white" />}
        </TouchableOpacity>
        <Text style={{ fontSize: 16, color: "white", paddingTop: 10 }}>
          I have read and agree to{" "}
          <Text style={{ color: "#FF76A4" }}> terms and conditions </Text>
        </Text>
      </View>
      <View style={{ paddingTop: 10 }} />
      <TouchableOpacity style={styles.buttonContainer}>
        <YourLogo size={80} />
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>


    </View>

    <View style={{height:30}}/>
    </>


  );
};

export default PaymentMethod;

const YourLogo = ({ size }) => {
  // Replace this component with your actual logo component or image rendering logic
  return (
    <Image
      source={require("../../assets/package/PayPal-Logo.png")}
      style={[styles.logo, { width: size, height: size }]}
      resizeMode="contain" // Adjust the resizeMode property as needed
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  buttonContainer: {
    backgroundColor: "#FBB92B",
    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row", // Use row to align logo and text side by side
    width: "100%",
height:40
    // Set a minimum height for the button container to prevent size changes
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});

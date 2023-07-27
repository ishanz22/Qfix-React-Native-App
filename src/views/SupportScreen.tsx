import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CenteredText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>We're Building Something Awesome!❤️</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D4147",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  subText: {
    paddingHorizontal: 16,
    fontSize: 20,
    fontStyle: "italic",
    color: "#555",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width: 300, // Set the width of your image
    height: 300, // Set the height of your image
    resizeMode: "contain", // Adjust the resizeMode as per your requirement
  },
});

export default CenteredText;

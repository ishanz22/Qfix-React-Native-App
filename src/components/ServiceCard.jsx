import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ServiceCard = ({ title, imageSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ServiceCard;

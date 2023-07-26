import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ShopCard = ({ title, imageSource, price, service }) => {
  const navigation = useNavigation();
  const [isAdded, setIsAdded] = useState(false);

  const handleMoreInfo = () => {
    // Add any logic here to handle the 'Add to Cart' functionality
    // For demonstration purposes, we'll just toggle the 'isAdded' state.
    setIsAdded(!isAdded);
  };

  return (
    <TouchableOpacity   onPress={() =>   navigation.navigate('viewItem')} style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <TouchableOpacity
        style={[styles.button, isAdded && styles.buttonDisabled ]}
        onPress={handleMoreInfo}
        disabled={isAdded} // Disable the button when it's added to the cart
      >
        <Text style={[styles.buttonText, isAdded && styles.addedButtonText]}>
          {isAdded ? "Added" : "Add To Cart"}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ShopCard;

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
    width: 95,
    height: 95,
    borderRadius: 40,
    overflow: "hidden",

    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color:'#CC3366'
  },
  price: {
    fontSize: 14,
    color: "green",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#DCDCDC",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 10,
    width: "90%",
  },
  buttonText: {
    color: "#515151",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonDisabled: {
    backgroundColor: "#EBE9EB", // Customize the disabled button appearance
  },

  addedButtonText: {
    color: "rgba(81, 81, 81, 0.5)", // Change the text color for the added state
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome from Expo vector icons

const Card = ({ item }) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleDelete = () => {
    // Add your delete logic here
    // This function will be called when the delete button is pressed
  };

  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={{ flex: 1 }}>
            <Text numberOfLines={3} ellipsizeMode="tail" style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {/* increament button */}
          <View style={{ width: "26%" }}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleDecrement} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.valueText}>{value}</Text>
              <TouchableOpacity onPress={handleIncrement} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* delete button */}
          <TouchableOpacity onPress={handleDelete} style={styles.smallButton}>
            <FontAwesome
              name="trash"
              size={14}
              color="#FFFFFF"
              style={styles.deleteIcon}
            />
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const data = [
  {
    id: "1",
    title: "Mini Cost Package - Restaurant Annual Maintenance",
    price: "$19.99",
    image: require("../../assets/package/standard-package.png"),
  },
  {
    id: "2",
    title: "Mini Cost Package - Restaurant Annual Maintenance",
    price: "$19.99",
    image: require("../../assets/package/bronze.png"),
  },
  {
    id: "3",
    title: "Mini Cost Package - Restaurant Annual Maintenance",
    price: "$19.99",
    image: require("../../assets/package/bronze.png"),
  },
  // Add more dummy data items as needed...
];

const Cart = () => {
  const renderItem = ({ item }) => <Card item={item} />;
  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={{ height: "80%" }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: "25%",
  },

  cardContainer: {
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    marginTop: 16,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    color: "#3D4147",
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "grey",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  button: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3D4147",
  

    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  valueText: {
    fontSize: 18,
    color: "#3D4147",
  },

  smallButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    marginVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  deleteIcon: {
    marginRight: 6,
    color: "red",
  },
  deleteText: {
    color: "red",
    fontSize: 14,
  },
  separator: {
    height: 0, // The height of the space between the cards
  },
});

export default Cart;

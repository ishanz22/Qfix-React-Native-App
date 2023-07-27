import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Cart from "../../components/payment/Cart";
import { useNavigation } from '@react-navigation/native';


const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{ flex: 1, paddingHorizontal: 16, backgroundColor: "#3D4147" }}
    >
      <Cart />
      <View style={styles.bottomBox}>
        <View style={styles.bottomTotal}>
          <Text style={styles.totalText}>Total:</Text>

          <Text style={styles.totalValueText}>$100.00</Text>
        </View>
        <View style={{ paddingTop: 10 }} />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Pay with Link</Text>
        </TouchableOpacity>
        <View
          style={{ padding: 5, justifyContent: "center", alignItems: "center" }}
        >
          <Text>--OR--</Text>
        </View>

        <TouchableOpacity  onPress={()=> navigation.navigate('checkout')}  style={styles.proceedToCheckOut}>
          <Text style={styles.buttonTextProceed}>Proceed To Checkout</Text>
        </TouchableOpacity>
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBox: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,

    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  bottomTotal: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalValueText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3D4147",
  },
  buttonContainer: {
    backgroundColor: "#33DDB3",
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  proceedToCheckOut: {
    backgroundColor: "#3D4147",
    borderRadius: 20,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom:10
  },
  buttonText: {
    color: "#3D4147",
    fontSize: 16,
    fontWeight: "normal",
  },

  buttonTextProceed: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CartScreen;

import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SuccessScreen = ({ navigation }) => {


  const navigateToMainContainer = () => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'MainContainer' }],
      });
  };

 
  return (
    <View style={styles.container}>
      <View style={styles.successBox}>
        <Image
          source={require('../../assets/succ.png')}
          style={styles.successImage}
        />
        <Text style={styles.successText}>Thank You for Booking</Text>
        <Text style={styles.thanksMessage}>
          We are excited to serve you and look forward to providing top-notch
          service for your AC needs. Your satisfaction is our priority!
        </Text>
        <TouchableOpacity
          style={styles.goToHomeButton}
          onPress={navigateToMainContainer} // Use navigateToMainContainer
        >
          <Text style={styles.goToHomeButtonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
  },
  successBox: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  successImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  successText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  thanksMessage: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  goToHomeButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  goToHomeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SuccessScreen;

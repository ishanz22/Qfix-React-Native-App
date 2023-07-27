import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Linking } from 'react-native';

const ContactUsBtn = ({ title, phoneNumber }) => {
  const handleButtonPress = () => {
    const url = `whatsapp://send?text=Hello&phone=${+94767021100}`;

    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={styles.contain}>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    paddingTop: 20,
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: '#FBB92B',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactUsBtn;

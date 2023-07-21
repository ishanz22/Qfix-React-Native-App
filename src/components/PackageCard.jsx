import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PackageCard = ({ title, imageSource,price,service }) => {
  const navigation = useNavigation();

  const handleMoreInfo = () => {
    // Navigate to the desired screen
    navigation.navigate('cartScreen');
    
  };

  return (
    <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.title}>{price}</Text>
      <Text style={styles.service}>{service}</Text>
      <TouchableOpacity style={styles.button} onPress={handleMoreInfo}>
        <Text style={styles.buttonText}><Text>&nbsp;</Text>Buy<Text>&nbsp;</Text></Text>
      </TouchableOpacity>
    </View>
  );
};



export default PackageCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
  },
  imageContainer: {
    width: 95,
    height: 95,
    borderRadius: 40,
    overflow: 'hidden',
  
    alignItems:'center',
    justifyContent:'center'
  },
  image: {
    width: '80%',
    height: '80%',

  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  
    
  },
  service:{
    fontSize: 14,
   color:"#3B414B",
    textAlign: 'center',
    
  },
  button: {
    backgroundColor: '#3D4147',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 10,
    width:"80%"
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



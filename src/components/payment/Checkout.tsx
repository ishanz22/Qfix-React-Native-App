import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Checkout = () => {
  return (
    <View style={styles.cardContainer}>
      {/* First Image and Content */}
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/package/bronze.png')}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Mini Cost - Restaurant Annual Maintenance</Text>
          <Text style={styles.price}>$19.99</Text>
        </View>
      </View>

      {/* Second Image and Content */}
         {/* Second Image and Content */}
         <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/package/silver-package.png')}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Standard Cost -  Annual Maintenance</Text>
          <Text style={styles.price}>$39.99</Text>
        </View>
      </View>
      <View style={styles.separator} />

      <View>
        <View style={{width:'100%',justifyContent:'space-between',flexDirection:'row'}}>
            <Text style={styles.subtotal}>Subtotal</Text>
            <Text style={styles.subtotal}>1150 AED</Text>
        </View>
      </View>
      <View>
        <View style={{width:'100%',justifyContent:'space-between',flexDirection:'row',paddingTop:10,paddingBottom:5}}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>1150 AED</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    backgroundColor:'white'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 3,
    paddingHorizontal: 10,
    flexDirection:'row'
  },
  title: {
    fontSize: 16,
    color:"#3D4147",
    fontWeight:'bold',
    width:'80%'
  },
  subtotal:{
    fontSize: 16,
    color:"#3D4147",
 
  },
  total:{
    fontSize: 18,
    color:"#3D4147",
  
    fontWeight:'bold'
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});

export default Checkout;

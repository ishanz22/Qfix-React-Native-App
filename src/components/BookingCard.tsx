import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookingCard = ({ fullName, email, city, street, selectedDate, selectedTime, Purchase,issue,acMechanics }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://w1.pngwing.com/pngs/202/749/png-transparent-web-design-icon-maintenance-icon-design-logo-aqua-circle-symbol.png' }} // Replace with your image URL
          style={styles.profileImage}
        />
        <View style={styles.headerContent}>
          <Text style={styles.date}>{selectedDate}  -  {selectedTime}AM</Text>
          <View style={styles.row}>
            <Icon name="cog" size={16} color="#888888" />
            <Text style={styles.text}>A/C Mechanics {acMechanics}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="map-marker" size={16} color="#888888" />
            <Text style={styles.text}>{`${street}, ${city}`}</Text>
          </View>
        </View>
      </View>

      <View style={styles.bookingDetailsContainer}>
        <View>
          <Text style={styles.madeBy}>Booking made by</Text>
          <Text style={styles.fullName}>{fullName}</Text>
        </View>
      <View>
      <Text >{' '}</Text>
      <Text style={styles.purchase}>Purchased: ${Purchase}</Text>
      </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerContent: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4285F4',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'red',
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#555555',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    marginLeft: 8,
    color: '#555555',
  },
  madeBy: {
    fontSize: 14,
    color: '#888888',
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold', // Set to bold
    color: '#555555',
  },
  purchaseContainer: {
    marginTop: 15,
    alignItems: 'flex-end',
  },
  purchase: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34A853',
  },
  bookingDetailsContainer: {
    flexDirection: 'row', // Add this to place items in a row
    justifyContent: 'space-between', // Optional, if you want to evenly space the items
 // Adjust the spacing as needed
  },
});

export default BookingCard;

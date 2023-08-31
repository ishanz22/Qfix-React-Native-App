import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { getAuth } from 'firebase/auth';
import Icon from "react-native-vector-icons/FontAwesome";


const BookingCard = () => {
  const [bookingData, setBookingData] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;
  const userId = user ? user.uid : '';

  const fetchBookingData = async () => {
    try {
      const bookingsCollectionRef = collection(FIRESTORE_DB, 'users', userId, 'payments');
      const bookingDocs = await getDocs(bookingsCollectionRef);

      const data = [];
      bookingDocs.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setBookingData(data);
      console.log("User ID:", userId);
    } catch (error) {
      console.error('Error fetching booking data:', error);
    }
  };

  useEffect(() => {
    fetchBookingData();
  }, []);

  return (
    <View style={styles.container}>
      {bookingData.length > 0 ? (
        bookingData.map(booking => (
          <View key={booking.id} style={styles.bookingContainer}>
            <BookingDetails booking={booking} />
          </View>
        ))
      ) : (
        <View style={styles.noDataContainer}>
          <Image source={require('../assets/nobk.png')} 
            style={[styles.noDataImage, { opacity: 0.5 }]} // Adjust opacity here
            />
          <Text style={styles.noDataText}>No bookings yet</Text>
          
        </View>
      )}
    </View>
  );
};

const BookingDetails = ({ booking }) => {
  return (
    <>
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.mechanicsText}>{booking.service} </Text>
        </View>
        <View style={styles.purchaseContainer}>
          <Text style={styles.purchaseAmount}> ${booking.totalCost}</Text>
        </View>
      </View>

      <View style={styles.detailsRow}>
        <View>
          <View style={styles.row}>
            <Icon name="map-marker" size={16} color="#888888" />
            <Text style={styles.addressText}> {booking.location.address}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="calendar" size={14} color="#888888" />
            <Text style={styles.dateTimeText}>
              {booking.Date}-{booking.Tima}
            </Text>
          </View>
        </View>
        <Text style={styles.confirmedText}>{"\n"}Confirmed</Text>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContent: {
    flex: 1,
  },
  mechanicsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555555",
  },
  row: {
    paddingTop:5,
    flexDirection: "row",
    alignItems: "center",
  },
  addressText: {
    fontSize: 14,
    marginLeft: 8,
    color: "#555555",
  },
  dateTimeText: {
    fontSize: 14,
    marginLeft: 8,
    color: "#555555",
  },
  confirmedText: {
    paddingTop:10,
    fontSize: 15,
    color: "#34A853",
  },
  purchaseContainer: {
    alignItems: "flex-end",
  },
  purchaseAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#34A853",
  },
  detailsRow: {
    paddingTop:3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  noDataContainer: {
  

  height:"85%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataImage: {
    width: 270,
    height: 270,
    resizeMode: 'contain',
   
  },
  noDataText: {
    fontSize: 18,
color:'white',
opacity: 0.5 ,
fontWeight:'bold'
  },
});

export default BookingCard;

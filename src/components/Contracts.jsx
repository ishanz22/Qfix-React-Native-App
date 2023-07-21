import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const Card = (props) => {
  const { imageSource, title, description } = props;
  const cardHeight = 90; // Adjust as needed


  const handleCardPress = () => {
    console.log(`Pressed ${title}`);
    // Perform the desired action when a card is pressed
    props.onPress();
  };

  return (
    <>
      <View style={[styles.cardContainer, { height: cardHeight }]}>
        <TouchableOpacity onPress={handleCardPress} style={{ flex: 1 }}>
          <Image
            source={imageSource}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.overlayBox}>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardDescription}>{description}</Text>
            </View>
          </View>
          <View style={[styles.textContainer, styles.iconContainer]}>
            <View style={styles.cardTextContainer}>
              <Ionicons
                style={styles.cardText}
                name="chevron-forward"
                size={24}
                color="#FBB92B"
              />
            </View>
          </View>
          <View
            style={[
              styles.additionalBox,
              styles.triangleCorner,
              { height: cardHeight },
            ]}
          />
        </TouchableOpacity>
      </View>
      <View style={{ height: 5 }} />
    </>
  );
};

const Contracts = () => {
  const navigation = useNavigation();
  const handleCardPress = (title) => {
    console.log(`Pressed ${title}`);
   
    // Perform the desired action when a card is pressed
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Annual Contracts</Text>
      </View>
      <Card
        // imageSource={require("../assets/spa.png")}
        title="Saloon & Spa"
        description="Annual PPM Packages"
        onPress={() => navigation.navigate('salonAnnual')}      />
      <Card
        imageSource={require("../assets/vila.jpg")}
        title="Villa"
        description="Annual  Packages"
        onPress={() => navigation.navigate('villaAnnual')}  
      />
      <Card
        imageSource={require("../assets/restaurant.jpg")}
        title="Restaurant"
        description="Annual  Packages"
        onPress={() => navigation.navigate('restaurantAnnual')}  
      />

      <Card
        imageSource={require("../assets/clinic.jpg")}
        title="Clinic"
        description="Annual  Packages"
        onPress={() => navigation.navigate('clinicAnnual')} 
  
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    top: -10,
  },
  headingContainer: {
    alignSelf: "flex-start",
  },
  headingText: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
  },
  cardsContainer: {
    alignItems: "center",
    marginTop: 10, // Adjust the top margin as needed
  },
  rectangle: {
    width: 100 * 2,
    height: 100,
    // backgroundColor: 'red',
  },
  triangleCorner: {
    width: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderRightColor: "transparent",
    borderTopColor: "rgba(255, 255, 255, 0.8)",
  },
  cardContainer: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    margin: 7,
  },
  cardImage: {
    flex: 1,
    width: "100%",
  },
  overlayBox: {
    position: "absolute",
    width: "50%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    left: 0,
  },
  cardTitleContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3D4147",
  },
  cardDescription: {
    fontSize: 14,

    color: "#3D4147",
  },
  additionalBox: {
    position: "absolute",
    width: "20%",
    backgroundColor: "rgba(255, 0, 0, 0.7)",
    left: "50%",
  },
  textContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTextContainer: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FBB92B",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  cardText: {},
});

export default Contracts;

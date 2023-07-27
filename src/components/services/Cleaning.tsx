import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Card = (props) => {
  const { imageSource, title } = props;
  const cardHeight = 90; // Adjust as needed
  const navigation = useNavigation();
  const handleCardPress = () => {
    console.log(`Pressed ${title}`);
    // Perform the desired action when a card is pressed
    props.onPress();
    navigation.navigate('acsupplyservice');
  };

  return (
    <>
  
    <View style={[styles.cardContainer, { height: cardHeight }]}>
      <TouchableOpacity onPress={handleCardPress} style={{ flex: 1 }}>
        <Image source={imageSource} style={styles.cardImage} resizeMode="cover" />
        <View style={styles.overlayBox}>
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
          </View>
        </View>
        <View style={[styles.textContainer, styles.iconContainer]}>
          <View style={styles.cardTextContainer}>
            <Ionicons style={styles.cardText} name="chevron-forward" size={24} color="#FBB92B" />
          </View>
        </View>
        <View style={[styles.additionalBox, styles.triangleCorner, { height: cardHeight }]} />
      </TouchableOpacity>
    </View>
    <View style={{height:5}}/>
    </>
  );
};

const Cleaning = () => {
  const handleCardPress = (title) => {
    console.log(`Pressed ${title}`);
    // Perform the desired action when a card is pressed
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <View style={styles.headingContainer}>
       <Text style={{ paddingHorizontal: 3 , fontSize: 26 ,color:'white',fontWeight:'bold'}}>Cleaning Services</Text>
      </View>
      <Card
        imageSource={require("../../assets/acse.jpg")}
        title="Cleaning Supply"
        onPress={() => handleCardPress("A/C Supply")}
      />
      <Card
        imageSource={require("../../assets/acc.webp")}
        title="Cleaning Installation"
        onPress={() => handleCardPress("A/C Installation")}
      />
      <Card
        imageSource={require("../../assets/csz.jpg")}
        title="Cleaning Repair"
        onPress={() => handleCardPress("A/C Repair")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    alignItems: "center",
// Adjust the vertical margin as needed

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
    borderTopColor: "rgba(251, 185, 43, 0.89)",
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
    backgroundColor: "rgba(251, 185, 43, 0.89)",
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
    color: "white",
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
  headingContainer: {
 
    alignSelf: "flex-start",
  },
  headingText: {
    fontSize: 26,
    color: "white",
  }
});

export default Cleaning;

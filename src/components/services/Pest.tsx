import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BookButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.bookButton} onPress={onPress}>
      {/* Chevron Left Icon */}

      {/* Button Text */}
      <View style={{flexDirection:'row', width:"100%",justifyContent:'space-between',alignItems:'center'}}>

      <Text style={styles.bookButtonText}>Book Pester </Text>
      <Text>{"   "}</Text>
      <View style={styles.circle}>
        <Ionicons name="chevron-forward" size={22} color="#3D4147" />
      </View>
      </View>
    
    </TouchableOpacity>
  );
};

const Card = (props) => {
  const { imageSource, title } = props;
  const cardHeight = 90; // Adjust as needed
  const navigation = useNavigation();
  const handleCardPress = () => {
    console.log(`Pressed ${title}`);
    // Perform the desired action when a card is pressed
    props.onPress();
    navigation.navigate("acsupplyservice");
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

const CallOutCard = (props) => {
  const { imageSource, title } = props;
  const cardHeight = 90; // Adjust as needed
  const navigation = useNavigation();
  const handleCardPress = () => {
    console.log(`Pressed ${title}`);
    // Perform the desired action when a card is pressed
    props.onPress();
    navigation.navigate("acsupplyservice");
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
const Pest = () => {
  const handleBookButtonPress = () => {
    // Implement the desired action when the "Book" button is pressed
    console.log("Book button pressed");
    // For example, you can navigate to a booking screen:
    // navigation.navigate("bookingScreen");
  };
  const handleCardPress = (title) => {
    console.log(`Pressed ${title}`);
    // Perform the desired action when a card is pressed
  };
  const buttonAnimation = useRef(new Animated.Value(0)).current;
  const animationConfig = {
    toValue: 1,
    duration: 1000,
    useNativeDriver: false,
    repeat: true,
    reverse: true,
  };
  useEffect(() => {
    Animated.loop(Animated.timing(buttonAnimation, animationConfig)).start();
  }, [buttonAnimation]);
  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingContainer}>
        <Text
          style={{
            paddingHorizontal: 3,
            fontSize: 26,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Pest Services
        </Text>
      </View>
      {/* <Card
        imageSource={require("../../assets/acse.jpg")}
        title="Pest Supply"
        onPress={() => handleCardPress("A/C Supply")}
      />
      <Card
        imageSource={require("../../assets/acc.webp")}
        title="Pest Installation"
        onPress={() => handleCardPress("A/C Installation")}
      />
      <Card
        imageSource={require("../../assets/csz.jpg")}
        title="Pest Repair"
        onPress={() => handleCardPress("A/C Repair")}
      />

      <View style={{ height: "3%" }} />
      <View style={styles.headingContainer}>
        <Text
          style={{
            paddingHorizontal: 3,
            fontSize: 26,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Emergencies
        </Text>
      </View> */}

      <CallOutCard
        imageSource={require("../../assets/ad.jpg")}
        title="Call Out"
        onPress={() => handleCardPress("Pest Call Out")}
      />
    </ScrollView>
    <Animated.View
    style={[
      styles.bookButtonContainer,
      {
        transform: [
          {
            translateY: buttonAnimation.interpolate({
              inputRange: [0, 3],
              outputRange: [0, 10],
            }),
          },
        ],
      },
    ]}
    >
    <BookButton onPress={handleBookButtonPress} />
    </Animated.View>
    </>
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
  },
  bookButton: {
    position: "absolute",
    bottom: 30, // Adjust the bottom position as needed
    flexDirection: "row", // To display icon and text side by side
    alignItems: "center", // To vertically center the icon and text
    alignSelf: "center",
    backgroundColor: "#FBB92B",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 4, // Add a shadow effect for Android
    width: "58%",
  },
  bookButtonText: {
    color: "#3D4147",
    fontSize: 18,
    fontWeight: "bold",
 // Add a small space between the icon and text
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#3D4147",
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 10, // Add a small space between the circle and text
  },
});

export default Pest;

import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ServiceCard from "../components/ServiceCard";
  import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const servicesData = [
    {
      id: 1,
      title: "A/C Services",
      imageSource: require("../assets/ac.png"),
      
    },
    {
      id: 2,
      title: "Plumbing Services",
      imageSource: require("../assets/plumbing.png"),
    },
    {
      id: 3,
      title: "Electrical Services",
      imageSource: require("../assets/Electrical.png"),
    },
    {
      id: 4,
      title: "Painting Services",
      imageSource: require("../assets/painting.png"),
    },
    {
      id: 5,
      title: "Handyman Services",
      imageSource: require("../assets/handyman.png"),
    },
    {
      id: 6,
      title: "Carpentry Services",
      imageSource: require("../assets/carpentry.png"),
    },
    {
      id: 7,
      title: "Cleaning Services",
      imageSource: require("../assets/Cleaning.png"),
    },
    {
      id: 8,
      title: "Pest Control Services",
      imageSource: require("../assets/Pest.png"),
    },
    // ... Add more objects with unique titles and image sources
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.headerText}>Quick Fix Technical Services</Text>
        <View style={styles.horizontalCardsContainer}>
          <ServiceCard
            title={servicesData[0].title}
            imageSource={servicesData[0].imageSource}
            onPress={() =>  navigation.navigate("acservice")}
          />
          <ServiceCard
            title={servicesData[1].title}
            imageSource={servicesData[1].imageSource}
            onPress={() =>  navigation.navigate("plumbing")}
          />
        </View>
        <View style={styles.horizontalCardsContainer}>
          <ServiceCard
            title={servicesData[2].title}
            imageSource={servicesData[2].imageSource}
            onPress={() =>  navigation.navigate("electric")}
          />
          <ServiceCard
            title={servicesData[3].title}
            imageSource={servicesData[3].imageSource}
            onPress={() =>  navigation.navigate("painting")}
          />
        </View>

        <View style={styles.horizontalCardsContainer}>
          <ServiceCard
            title={servicesData[4].title}
            imageSource={servicesData[4].imageSource}
            onPress={() =>  navigation.navigate("handyman")}
          />
          <ServiceCard
            title={servicesData[5].title}
            imageSource={servicesData[5].imageSource}
            onPress={() =>  navigation.navigate("carpentry")}
          />
        </View>
        <View style={styles.horizontalCardsContainer}>
          <ServiceCard
            title={servicesData[6].title}
            imageSource={servicesData[6].imageSource}
            onPress={() =>  navigation.navigate("cleaning")}
          />
          <ServiceCard
            title={servicesData[7].title}
            imageSource={servicesData[7].imageSource}
            onPress={() =>  navigation.navigate("pest")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#3D4147",
  },
  headerText: {
    paddingHorizontal: 7,
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
  },
  horizontalCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  verticalCardsContainer: {
    flex: 1,
  },
});

export default HomeScreen;

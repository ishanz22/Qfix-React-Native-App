import React, { useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import ContactUsBtn from "../../ContactUsBtn";

const ElectricSupply = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const descriptionText = `When it comes to AC supply to AC supplto AC supplto AC supplto AC supplto AC supplto AC supplto AC supplto Ato AC supplto AC suppl services, you must count on the professionals at QFIXs -Quick Fix Technical Services. With many years of  it comes to AC supply services, you must count on the professionals at QFIXs -Quick Fix Technical Services. With many years of experience in the HVAC industry, we have the knowledge and lorem ipsum is show more `;

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          backgroundColor: "#3D4147",
          paddingHorizontal: 16,
        }}
      >
        <View style={styles.container}>
          <Image
            source={require("../../../assets/Ac-Supply.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.title}>Electical Supply Services</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {expanded
              ? descriptionText
              : descriptionText.slice(0, 250) + "... "}
            {expanded ? (
              <Text style={styles.showMoreText} onPress={toggleDescription}>
                Show Less
              </Text>
            ) : (
              <Text style={styles.showMoreText} onPress={toggleDescription}>
                Show More
              </Text>
            )}
          </Text>
        </View>

        <ContactUsBtn />

        <Text style={styles.titleYellow}>QFIXs AC Supply Services</Text>

        <Text style={styles.details}>
          For AC supply services, it is hard to beat the quality and reliability
          offered by <Text style={styles.ywll}>QFIXs </Text>– Supply. With the
          many years of experience in the industry,{" "}
          <Text style={styles.ywll}>QFIXs </Text>– Quick Fix Technical services
          Supply has become a trusted name in the{" "}
          <Text style={styles.ywll}>HVAC </Text>– industry. From supplying the
          latest AC units to providing timely service and repair,{" "}
          <Text style={styles.ywll}>QFIXs </Text>– - Quick Fix Technical
          Services Supply has it all.
        </Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    backgroundColor: "#3D4147",
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 20,
    alignSelf: "flex-start",
    color: "white",
  },
  descriptionContainer: {
    paddingTop: 10,
    alignSelf: "flex-start",
    width: "100%",
  },
  description: {
    fontSize: 14,
    color: "white",
    lineHeight: 22,
  },
  showMoreText: {
    color: "#3498DB",
    textDecorationLine: "underline",
  },
  titleYellow: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 15,
    alignSelf: "flex-start",
    color: "#FBB92B",
  },
  details: {
    fontSize: 14,
    color: "#B1B1B1",
    lineHeight: 22,
    paddingBottom: 30,
    paddingTop: 10,
  },
  ywll: {
    color: "#FBB92B",
  },
});

export default ElectricSupply;

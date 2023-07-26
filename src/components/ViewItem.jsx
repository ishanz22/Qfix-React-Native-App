import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import RelatedShopCard from "./RelatedShopCard";
const IMAGES = ["image1", "image2", "image3", "image4", "image5"];

const ViewItem = () => {
  const [selectedImage, setSelectedImage] = useState("image1"); // Set 'image1' as the default selected image.

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const data = [
    {
      id: 1,
      title: "Mini Cost Package – Saloon Spa Annual ",
      imageSource: require("../assets/package/mini-cost.png"),
      price: "2850 AED",
      service: "1x Year of Service and PPM",
    },
    {
      id: 2,
      title: "Mini Cost Package – Saloon Spa Annual ",
      imageSource: require("../assets/package/mini-cost.png"),
      price: "4800 AED",
      service: "2x Year of Service and PPM",
    },
    {
      id: 3,
      title: "Bronze Package                  annual        maintain",
      imageSource: require("../assets/package/bronze.png"),
      price: "6300 AED",
      service: "1x Year of Service and PPM",
    },
    {
      id: 4,
      title: "Bronze Package                  annual        maintain",
      imageSource: require("../assets/package/bronze.png"),
      price: "8970 AED",
      service: "3x Year of Service and PPM",
    },
    {
      id: 5,
      title: "Diamond Package – Clinic Annual Maintenance",
      imageSource: require("../assets/package/diamons.png"),
      price: "8970 AED",
      service: "3x Year of Service and PPM",
    },
    {
      id: 6,
      title: "Diamond Package – Clinic Annual Maintenance",
      imageSource: require("../assets/package/diamons.png"),
      price: "8970 AED",
      service: "3x Year of Service and PPM",
    },
  ];

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Image
            source={getImageSource(selectedImage)}
            style={styles.mainImage}
          />

          <View style={styles.row}>
            {IMAGES.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleImageClick(image)}
              >
                <Image
                  source={getImageSource(image)}
                  style={[
                    styles.thumbnail,
                    selectedImage === image ? { opacity: 1 } : { opacity: 0.5 }, // Dim the non-selected images
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Text style={styles.price}>8,970.00 AED</Text>
        <Text style={styles.title}>
          Diamond Annual maintenance Package for Restaurant{" "}
        </Text>
        <Text style={styles.desc}>
          2x Year of Service for Planned Preventative Maintenance{" "}
        </Text>

        <View style={{ paddingHorizontal: 16, paddingTop: 10 }}>
          <Text style={styles.point}>• A/C Units</Text>
          <Text style={styles.point}>• Fixed Electrical Fittings</Text>
          <Text style={styles.point}>• Plumbing Units</Text>
          <Text style={styles.point}>• Services and Maintainence</Text>
          <Text style={styles.point}>• Cleaning of Tanks</Text>
        </View>
        <View style={{ paddingTop: 20 }}>
          <View style={styles.separator} />
        </View>
        <View style={{ paddingTop: 10 }} />
        <Text style={styles.title}>Description</Text>

        <Text style={styles.descp}>
          Diamond package for Restaurant annual maintenance takes this
          opportunity to protect your investments with a planned preventative
          maintenance contract. This contract provides regular maintenance and
          upkeep of the Restaurant and its technical service systems.
        </Text>

        <View style={{ paddingTop: 10 }} />
        <Text style={styles.title}>Reviews</Text>

        <Text style={styles.descp}>
          There are no reviews yet.
          {"\n"}
          Only logged in customers who have purchased this product may leave a
          review.
        </Text>

        <View style={{ paddingTop: 20 }}>
          <View style={styles.separator} />
        </View>

        <View style={{ paddingTop: 10 }} />
        <Text style={styles.title}>Related Products</Text>

        <View style={{ paddingTop: 10 }} />

        <View>
          <FlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <RelatedShopCard
                title={item.title}
                imageSource={item.imageSource}
                price={item.price}
                service={item.service}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    </>
  );
};

const getImageSource = (imageName) => {
  switch (imageName) {
    case "image1":
      return require("../assets/package/mini-cost.png");
    case "image2":
      return require("../assets/ac.png");
    case "image3":
      return require("../assets/Electrical-removebg.png");
    case "image4":
      return require("../assets/plumbing-removebg.png");
    case "image5":
      return require("../assets/Pest-removebg.png");
    default:
      return require("../assets/package/bronze.png"); // Default image in case of invalid imageName
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  mainImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  thumbnail: {
    width: 60,
    height: 60,
    resizeMode: "cover",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 20,
    alignSelf: "flex-start",
    color: "white",
  },
  title: {
    fontSize: 20,
    paddingTop: 5,
    color: "white",
    fontWeight: "bold",
  },
  desc: {
    fontSize: 15,
    paddingTop: 5,
    color: "#CFCFCF",
    fontWeight: "bold",
  },
  point: {
    fontSize: 15,
    color: "#CFCFCF",
    marginVertical: 0,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#B1B1B1",
  },
  descp: {
    width: "100%",
    fontSize: 14,
    color: "white",
    lineHeight: 22,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});

export default ViewItem;

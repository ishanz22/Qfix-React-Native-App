import React from "react";
import { View, StyleSheet, FlatList,Text } from "react-native";
import PackageCard from "./PackageCard";
import ShopCard from "./ShopCard";

export default  Shop = () => {
  const data = [
    {
      id: 1,
      title: "Mini Cost Package – Saloon Spa Annual Maintenance",
      imageSource: require("../assets/package/mini-cost.png"),
      price:"2850 AED",
      service:"1x Year of Service and PPM"
    },
    {
      id: 2,
      title: "Mini Cost Package – Saloon Spa Annual Maintenance",
      imageSource: require("../assets/package/mini-cost.png"),
      price:"4800 AED",
      service:"2x Year of Service and PPM"
    },
    {
      id: 3,
      title: "Bronze                    Package",
      imageSource: require("../assets/package/bronze.png"),
      price:"6300 AED",
      service:"1x Year of Service and PPM"
    },
    {
      id: 4,
      title: "Bronze                    Package",
      imageSource: require("../assets/package/bronze.png"),
      price:"8970 AED",
      service:"3x Year of Service and PPM"
    },
    {
        id: 5,
        title: "Diamond Package – Clinic Annual Maintenance",
        imageSource: require("../assets/package/diamons.png"),
        price:"8970 AED",
        service:"3x Year of Service and PPM"
      },
      {
        id: 6,
        title: "Diamond Package – Clinic Annual Maintenance",
        imageSource: require("../assets/package/diamons.png"),
        price:"8970 AED",
        service:"3x Year of Service and PPM"
      },
      {
        id: 7,
        title: "Gold Annual maintenance Package for Villa",
        imageSource: require("../assets/package/gold.png"),
        price:"8970 AED",
        service:"3x Year of Service and PPM"
      },
      {
        id: 8,
        title: "Gold Annual maintenance Package for Villa",
        imageSource: require("../assets/package/gold.png"),
        price:"8970 AED",
        service:"3x Year of Service and PPM"
      },

    // ... Add more objects with unique titles and image sources
  ];
  return (
    <View style={styles.container}>
    <View>

      <FlatList
        data={data}
        numColumns={2}
        ListHeaderComponent={<Text style={{ paddingHorizontal: 7 , fontSize: 26 ,color:'white',fontWeight:'bold'}}>Shop</Text>}
        showsVerticalScrollIndicator={false} 
        renderItem={({ item }) => (
          <ShopCard title={item.title} imageSource={item.imageSource} price={item.price} service={item.service}/>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#3D4147",
  },
});

import React from "react";
import { View, StyleSheet, FlatList,Text } from "react-native";
import PackageCard from "../../components/PackageCard";

export default  RestaurantAnnualPackages = () => {
  const data = [
    {
      id: 1,
      title: "Mini Cost              Package",
      imageSource: require("../../assets/package/mini-cost.png"),
      price:"2850 AED",
      service:"1x Year of Service and PPM"
    },
    {
      id: 2,
      title: "Standard            Package",
      imageSource: require("../../assets/package/standard-package.png"),
      price:"4800 AED",
      service:"2x Year of Service and PPM"
    },
    {
      id: 3,
      title: "Bronze                    Package",
      imageSource: require("../../assets/package/bronze.png"),
      price:"6300 AED",
      service:"1x Year of Service and PPM"
    },
    {
      id: 4,
      title: "Silver          Package",
      imageSource: require("../../assets/package/silver-package.png"),
      price:"8970 AED",
      service:"3x Year of Service and PPM"
    },
    {
        id: 5,
        title: "Silver          Package",
        imageSource: require("../../assets/package/silver-package.png"),
        price:"8970 AED",
        service:"3x Year of Service and PPM"
      },
      {
        id: 6,
        title: "Silver          Package",
        imageSource: require("../../assets/package/silver-package.png"),
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
        ListHeaderComponent={<Text style={{ paddingHorizontal: 7 , fontSize: 26 ,color:'white',fontWeight:'bold'}}>Restaurant Annual Packages</Text>}
        showsVerticalScrollIndicator={false} 
        renderItem={({ item }) => (
          <PackageCard title={item.title} imageSource={item.imageSource} price={item.price} service={item.service}/>
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

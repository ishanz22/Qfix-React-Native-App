import { View, ScrollView, Text } from "react-native";
import React from "react";
import ACSupply from "../../../components/services/AC/ACSupply";

const ACSupplyService = () => {
  return (
    <View style={{ backgroundColor: "#3D4147",height:"100%" }}>
      <ACSupply />
    </View>
  );
};

export default ACSupplyService;

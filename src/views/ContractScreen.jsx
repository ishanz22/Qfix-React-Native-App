import { View, Text } from "react-native";
import React from "react";

import Contracts from "../components/Contracts";

const ContractScreen = () => {
  return (
    <>
      <View style={{ paddingHorizontal: 16, backgroundColor: "#3D4147" }}>
        <Contracts />
      </View>
      <View style={{ height: "100%", backgroundColor: "#3D4147" }} />
    </>
  );
};

export default ContractScreen;

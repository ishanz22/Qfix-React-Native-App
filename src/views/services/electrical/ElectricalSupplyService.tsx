import { View, Text } from 'react-native'
import React from 'react'
import ElectricSupply from '../../../components/services/Electric/ElectricalSupply'

const ElectricalSupplyService = () => {
  return (
    <View style={{ backgroundColor: "#3D4147",height:"100%" }}>
      <ElectricSupply/>
    </View>
  )
}

export default ElectricalSupplyService
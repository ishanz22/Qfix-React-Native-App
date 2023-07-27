import { View, Text } from 'react-native'
import React from 'react'
import AC from '../../../components/services/AC'
import ElectricServ from '../../../components/services/ElectricServ'

const ElectricalService = () => {
  return (
    <>
     <View style={{paddingHorizontal:16,backgroundColor:'#3D4147',height:'100%'}}>
      <ElectricServ/>
    
    </View>
    <View style={{height:'100%',backgroundColor:"#3D4147"}}/>
    </>
   
   
  )
}

export default ElectricalService
import { View, Text } from 'react-native'
import React from 'react'
import AC from '../../../components/services/AC'
import ElectricServ from '../../../components/services/ElectricServ'
import Painting from '../../../components/services/Painting'

const PaintingService = () => {
  return (
    <>
     <View style={{paddingHorizontal:16,backgroundColor:'#3D4147',height:'100%'}}>
      <Painting/>
    
    </View>
    <View style={{height:'100%',backgroundColor:"#3D4147"}}/>
    </>
   
   
  )
}

export default PaintingService
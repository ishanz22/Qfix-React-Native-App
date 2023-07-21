import { View, Text } from 'react-native'
import React from 'react'
import AC from '../../../components/services/AC'
import Cleaning from '../../../components/services/Cleaning'
const CleaningService = () => {
  return (
    <>
     <View style={{paddingHorizontal:16,backgroundColor:'#3D4147',height:'100%'}}>
      <Cleaning/>
    
    </View>
    <View style={{height:'100%',backgroundColor:"#3D4147"}}/>
    </>
   
   
  )
}

export default CleaningService
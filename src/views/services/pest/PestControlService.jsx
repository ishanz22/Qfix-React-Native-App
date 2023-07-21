import { View, Text } from 'react-native'
import React from 'react'
import Pest from '../../../components/services/Pest'
const PestControlService = () => {
  return (
    <>
     <View style={{paddingHorizontal:16,backgroundColor:'#3D4147',height:'100%'}}>
      <Pest/>
    
    </View>
    <View style={{height:'100%',backgroundColor:"#3D4147"}}/>
    </>
   
   
  )
}

export default PestControlService
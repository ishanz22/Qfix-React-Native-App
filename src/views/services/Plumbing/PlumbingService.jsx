import { View, Text } from 'react-native'
import React from 'react'
import AC from '../../../components/services/AC'
import Plumbing from '../../../components/services/Plumbing'

const PlumbingService = () => {
  return (
    <>
     <View style={{paddingHorizontal:16,backgroundColor:'#3D4147',height:'100%'}}>
      <Plumbing/>
    
    </View>
    <View style={{height:'100%',backgroundColor:"#3D4147"}}/>
    </>
   
   
  )
}

export default PlumbingService
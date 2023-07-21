import { View, Text } from 'react-native'
import React from 'react'
import AC from '../../../components/services/AC'
import Carpentry from '../../../components/services/Carpentry'

const CarpentryService = () => {
  return (
    <>
     <View style={{paddingHorizontal:16,backgroundColor:'#3D4147',height:'100%'}}>
      <Carpentry/>
    
    </View>
    <View style={{height:'100%',backgroundColor:"#3D4147"}}/>
    </>
   
   
  )
}

export default CarpentryService
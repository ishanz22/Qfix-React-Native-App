import { View, Text } from 'react-native'
import React from 'react'
import ViewItem from '../../components/ViewItem'

const ViewItemScreen = () => {
  return (
    <View style={{ paddingHorizontal: 16, backgroundColor: "#3D4147",height:'100%'}}>
      <ViewItem/>
    </View>
  )
}

export default ViewItemScreen
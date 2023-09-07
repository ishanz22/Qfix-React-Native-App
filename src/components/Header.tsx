import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
   
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 10,
    marginTop:5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#43425d',
  },
});

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../views/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import ACService from '../../views/services/ac/ACService';
import { Ionicons } from '@expo/vector-icons';
import PlumbingService from '../../views/services/Plumbing/PlumbingService';
import ElectricalService from '../../views/services/electrical/ElectricalService';
import PaintingService from '../../views/services/painting/PaintingService';
import HandymanService from '../../views/services/handyman/HandymanService';
import CarpentryService from '../../views/services/carpentry/CarpentryService';
import CleaningService from '../../views/services/cleaning/CleaningService';
import PestControlService from '../../views/services/pest/PestControlService';

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#FBB92B',
        tabBarStyle: { height: 70 },
        tabBarItemStyle: { backgroundColor: 'rgb(96,99,104)', padding: 10 },

        tabBarIcon: ({ color, size, focused }): any => {
          let iconName;
          let iconColor = focused ? '#FBB92B' : 'white';

          if (route.name === 'Screen1') {
            iconName = 'home';
          } else if (route.name === 'Screen2') {
            iconName = 'home';
          } else if (route.name === 'Screen3') {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },

        tabBarLabel: ({ focused, color }):any => {
          let labelText;

          if (route.name === 'Screen1') {
            labelText = 'Home'; // Change the label text for 'Screen1'
          } else if (route.name === 'Screen2') {
            labelText = 'Contracts'; // Change the label text for 'Screen2'
          } else if (route.name === 'Screen3') {
            labelText = 'Support'; // Change the label text for 'Screen3'
          }

          return <Text style={{ color: focused ? '#FBB92B' : 'white', fontSize: 12 }}>{labelText}</Text>;
        },
        header: ({ navigation }) => {
          let headerLeftButton;

          if (
            route.name === 'acservice' ||
            route.name === 'plumbing' ||
            route.name === 'electric' ||
            route.name === 'painting' ||
            route.name === 'handyman' ||
            route.name === 'carpentry' ||
            route.name === 'cleaning' ||
            route.name === 'pest'
          ) {
            headerLeftButton = (
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons style={styles.backButtonText} name="chevron-back" size={27} color="#FBB92B" />
              </TouchableOpacity>
            );
          } else {
            headerLeftButton = null;
          }

          return (
            <View style={styles.headerContainer}>
              <View style={styles.logoContainer}>
                <Image source={require('../../assets/qlogo.png')} style={styles.logo} resizeMode="contain" />
              </View>

              <View style={styles.cartIconWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('cartScreen')} style={styles.cartIcon}>
                  <AntDesign name="shoppingcart" size={27} color="#FBB92B" />
                </TouchableOpacity>
              </View>

              {headerLeftButton}
            </View>
          );
        },
      })}
    >
      <Stack.Screen name="home" component={HomeScreen} options={{ title: ' ' }} />
      {/* <Stack.Screen name="acservice" component={ACService} options={{ title: ' ' }} /> */}
      {/* <Stack.Screen name="plumbing" component={PlumbingService} options={{ title: ' ' }} /> */}
      {/* <Stack.Screen name="electric" component={ElectricalService} options={{ title: ' ' }} />
      <Stack.Screen name="painting" component={PaintingService} options={{ title: ' ' }} />
      <Stack.Screen name="handyman" component={HandymanService} options={{ title: ' ' }} />
      <Stack.Screen name="carpentry" component={CarpentryService} options={{ title: ' ' }} />
      <Stack.Screen name="cleaning" component={CleaningService} options={{ title: ' ' }} />
      <Stack.Screen name="pest" component={PestControlService} options={{ title: ' ' }} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3D4147',
    paddingBottom:10
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    width: 100,
    height: 50,
  },
  cartIconWrapper: {
    position: 'absolute',
    right: 15,
  
  },
  cartIcon: {},
  backButton: {
    position: 'absolute',
    left: 12,
   
  },
  backButtonText: {}, // Add appropriate styles for the back button text
});

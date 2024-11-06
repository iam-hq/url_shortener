import * as React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllProducts from './products/AllProducts';
import Home from './Home';
import AppBar from '../components/AppBar';
import {colors} from '../assets/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const TopTab = createMaterialTopTabNavigator();

export default props => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.Gray800 : colors.Gray200,
  };

  const tintColor = isDarkMode ? colors.Gray100 : colors.Gray900;

  return (
    <>
      <AppBar />
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12},
          tabBarItemStyle: {width: 100},
          tabBarStyle: backgroundStyle,
          tabBarInactiveTintColor: tintColor,
          tabBarActiveTintColor: tintColor,
        }}>
        <TopTab.Screen name="All" component={AllProducts} />
        <TopTab.Screen name="Ads" component={AllProducts} />
      </TopTab.Navigator>
    </>
  );
};

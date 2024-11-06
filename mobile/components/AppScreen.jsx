import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, useColorScheme, Text} from 'react-native';
import {colors} from '../assets/colors';
import MainScreen from './MainScreen';
import AuthScreen from './AuthScreen';
import {useSelector} from 'react-redux';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.Gray950 : colors.Gray50,
  };

  const isAuth = Boolean(useSelector(state => state.user));

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {isAuth ? <MainScreen /> : <AuthScreen />}
    </NavigationContainer>
  );
};

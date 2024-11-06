import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from '../Style';
import {colors} from '../assets/colors';

export default ({children, title, header = null, height = 'auto'}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[
        styles.sectionContainer,
        {
          backgroundColor: isDarkMode ? colors.Gray900 : colors.White,
          borderColor: isDarkMode ? colors.Gray800 : colors.Gray100,
          borderWidth: 1,
          height,
        },
      ]}>
      {title && (
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
      )}
      {header}
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

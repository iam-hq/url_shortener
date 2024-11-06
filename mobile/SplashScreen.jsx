import {View, Text, Image, useColorScheme} from 'react-native';
import darkLogo from './assets/img/Logo-o.png';
import lightLogo from './assets/img/Logo.png';
import {colors} from './assets/colors';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDarkMode ? colors.Gray950 : colors.Gray50,
      }}>
      <Image
        style={{
          width: 250,
          height: 55,
        }}
        source={isDarkMode ? darkLogo : lightLogo}
      />
    </View>
  );
};

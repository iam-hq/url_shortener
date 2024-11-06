import {
  StatusBar,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors, mainColors} from '../assets/colors';
import {styles} from '../Style';
import darkLogo from '../assets/img/Logo-o.png';
import lightLogo from '../assets/img/Logo.png';
import SearchIcon from '../assets/Jsx/SearchIcon';
import CartIcon from '../assets/Jsx/CartIcon';

export default props => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.Gray950 : colors.Gray50,
  };

  const iconStyle = {
    backgroundColor: isDarkMode ? colors.Gray900 : colors.Gray100,
  };
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={[
          backgroundStyle,
          {
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            borderBottomColor: isDarkMode ? colors.Gray700 : colors.Gray300,
            borderBottomWidth: 1,
            backgroundColor: isDarkMode ? colors.Gray950 : colors.Gray50,
          },
        ]}>
        <Image
          style={{
            width: 114,
            height: 25,
          }}
          source={isDarkMode ? darkLogo : lightLogo}
        />
        <View style={{flexDirection: 'row', gap: 20}}>
          <TouchableOpacity
            style={[
              iconStyle,
              {
                borderRadius: 700,
                padding: 3,
              },
            ]}
            onPress={() => alert('Search')}>
            <SearchIcon
              color={isDarkMode ? colors.White : colors.Black}
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              iconStyle,
              {
                borderRadius: 700,
                padding: 3,
              },
            ]}
            onPress={() => alert('Cart')}>
            <CartIcon
              color={isDarkMode ? colors.White : colors.Black}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

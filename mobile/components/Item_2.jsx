import {
  Image,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  FlatList,
  ScrollView,
} from 'react-native';
import {colors} from '../assets/colors';

export default ({onPress = () => {}}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity onPress={onPress} style={{marginTop: 5, marginRight: 5}}>
      <Image
        style={{
          width: 125,
          height: 125,
          borderColor: isDarkMode ? 'white' : 'black',
          borderWidth: 1,
          marginBottom: 5,
          borderRadius: 10,
        }}
        source={require('../assets/img/IMG-20201005-WA0130.jpg')}
      />
      <Text style={{fontWeight: 500, color: isDarkMode ? 'white' : 'black'}}>
        MWK 100,000.00
      </Text>
      <Text
        style={{
          color: isDarkMode ? colors.Amber100 : colors.Amber900,
          fontSize: 10,
        }}>
        High Quality
      </Text>
    </TouchableOpacity>
  );
};

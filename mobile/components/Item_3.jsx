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
    <TouchableOpacity onPress={onPress} style={{marginTop: 5, marginRight: 30}}>
      <Image
        style={{
          width: 100,
          height: 100,
          borderColor: isDarkMode ? 'white' : 'black',
          borderWidth: 1,
          borderRadius: 100 / 2,
          marginBottom: 5,
        }}
        source={require('../assets/img/Layer_8.jpg')}
      />
      <Text
        style={{
          fontWeight: 500,
          color: isDarkMode ? 'white' : 'black',
          fontSize: 16,
          textAlign: 'center',
        }}>
        Sneakers
      </Text>
    </TouchableOpacity>
  );
};

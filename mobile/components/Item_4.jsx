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
import Image_1 from '../assets/img/IMG-20201005-WA0097.jpg';
import Image_2 from '../assets/img/IMG-20201005-WA0130.jpg';
import Image_3 from '../assets/img/Layer_8.jpg';

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
          borderRadius: 10,
          marginBottom: 5,
        }}
        source={[Image_1, Image_2, Image_3][Math.round(Math.random() * 10) % 3]}
      />
      <Text
        style={{
          color: isDarkMode ? colors.Gray300 : colors.Gray700,
          fontSize: 12,
          width: 125,
        }}>
        {
          [
            'Lenovo E15 Intel i7 office laptop',
            'Dell Inspiron 14 5364 Ryzen',
            'Dell Latitude 5364 Ryzen 5 5648',
            'HP Envy x360 Touchscreen Laptop',
          ][Math.round(Math.random() * 10) % 4]
        }
      </Text>
      <Text style={{fontWeight: 700, color: isDarkMode ? 'white' : 'black'}}>
        MWK 2,500,000.00
      </Text>
      <Text
        style={{
          color: isDarkMode ? colors.Amber100 : colors.Amber900,
          fontSize: 10,
        }}>
        {
          ['New', '10% Discount', '', '90% Discount'][
            Math.round(Math.random() * 10) % 4
          ]
        }
      </Text>
    </TouchableOpacity>
  );
};

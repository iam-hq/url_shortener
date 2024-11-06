import {
  Image,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  FlatList,
  ScrollView,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {colors} from '../assets/colors';
import Item_2 from './Item_2';

export default props => {
  const isDarkMode = useColorScheme() === 'dark';
  const onPressButton = () => {
    alert('You clicked the button!');
  };
  return (
    <ScrollView
      horizontal={true}
      style={{
        width: Dimensions.get('window').width - 40,
      }}>
      {[1, 2, 3, 4, 55, 6].map(item => (
        <Item_2 onPress={() => alert('clicked')} key={item} />
      ))}
    </ScrollView>
  );
};

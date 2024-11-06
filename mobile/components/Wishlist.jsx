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
import {isPortrait} from '../hooks/functions';
import Item_1 from './Item_1';
import {useState, useEffect} from 'react';

export default props => {
  const {fontColor} = props;
  const isDarkMode = useColorScheme() === 'dark';
  const [orientation, setOrientation] = useState(
    isPortrait() ? 'portrait' : 'landscape',
  );
  const [width, setWidth] = useState(Dimensions.get('window').width - 40);

  // Event Listener for orientation changes
  Dimensions.addEventListener('change', () => {
    setOrientation(isPortrait() ? 'portrait' : 'landscape');
  });

  useEffect(() => {
    setWidth(Dimensions.get('window').width - 40);
  }, [orientation]);

  return (
    <FlatList
      horizontal
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
      renderItem={item => <Item_1 />}
      style={{
        width,
      }}
    />
  );
};

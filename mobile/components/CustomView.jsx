import {useColorScheme, View, Dimensions} from 'react-native';
import {colors} from '../assets/colors';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {isPortrait} from '../hooks/functions';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

// const windowDimensions = Dimensions.get('window');
// const screenDimensions = Dimensions.get('screen');

export default ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const tabVisible = useSelector(state => state.tabVisible);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.Gray950 : colors.Gray50,
  };

  const tabBarHeight = useBottomTabBarHeight();

  const [orientation, setOrientation] = useState(
    isPortrait() ? 'portrait' : 'landscape',
  );
  const [height, setHeight] = useState(
    Dimensions.get('window').height - tabBarHeight + 17,
  );
  const [width, setWidth] = useState(Dimensions.get('window').width);

  // Event Listener for orientation changes
  Dimensions.addEventListener('change', () => {
    setOrientation(isPortrait() ? 'portrait' : 'landscape');
  });

  // const height = 822.5454;
  // const width = 392.7272;
  // const widthLand = 838.5454;
  // const heightLand = 376.7272;

  useEffect(() => {
    setHeight(
      !tabVisible
        ? Dimensions.get('window').height
        : orientation === 'landscape'
        ? Dimensions.get('window').height - (tabBarHeight + 17)
        : Dimensions.get('window').height - tabBarHeight + 17,
    );
    setWidth(Dimensions.get('window').width);
  }, [orientation, tabVisible]);

  return (
    <View
      style={[
        backgroundStyle,
        {
          height,
          width,
          paddingBottom: 2,
        },
      ]}>
      {children}
    </View>
  );
};

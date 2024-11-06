import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import Section from '../../components/Section';
import {colors} from '../../assets/colors';
import {useState} from 'react';
import {isPortrait} from '../../hooks/functions';

export default props => {
  const {fontColor} = props;
  const [orientation, setOrientation] = useState(
    isPortrait() ? 'portrait' : 'landscape',
  );

  // Event Listener for orientation changes
  Dimensions.addEventListener('change', () => {
    setOrientation(isPortrait() ? 'portrait' : 'landscape');
  });

  return (
    <Section title={'Recommendations'}>
      <FlatList
        data={[1, 2, 3, 4, 5, 5, 6, 7]}
        numColumns={orientation == 'portrait' ? 2 : 6}
        key={orientation == 'portrait' ? 2 : 6}
        renderItem={data => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1,
            }}>
            <TouchableOpacity
              onPress={() => alert('Pressed')}
              style={{marginTop: 5, marginRight: 5}}>
              <Image
                style={{
                  width:
                    orientation == 'portrait'
                      ? Dimensions.get('window').width * 0.5 - 25
                      : 125,
                  height:
                    orientation == 'portrait'
                      ? Dimensions.get('window').width * 0.5 - 25
                      : 125,
                  borderColor: fontColor,
                  borderWidth: 1,
                  marginBottom: 5,
                  borderRadius: 10,
                }}
                source={require('../../assets/img/Layer_8.jpg')}
              />
              <Text
                style={{
                  fontWeight: 500,
                  color: fontColor,
                }}>
                MWK 10,000.00
              </Text>
              <Text style={{color: colors.Amber100, fontSize: 10}}>
                High Quality
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </Section>
  );
};

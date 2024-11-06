import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import Wishlist from '../../components/Wishlist';
import Recents from '../../components/Recents';
import Section from '../../components/Section';
import {styles} from '../../Style';
import {colors} from '../../assets/colors';
import {useState} from 'react';

export default props => {
  const {fontColor} = props;
  const [activePage, setActivePage] = useState('wishlist');

  return (
    <Section
      header={
        <View
          style={{
            width: Dimensions.get('window').width - 40,
            flexDirection: 'row',
            gap: 10,
          }}>
          <View>
            <TouchableOpacity
              style={{
                borderBottomColor:
                  activePage == 'wishlist' ? colors.Blue500 : colors.Gray500,
                borderBottomWidth: 3,
                padding: 5,
              }}
              onPress={() => setActivePage('wishlist')}>
              <Text style={{color: fontColor, fontSize: 16}}>WishList</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={{
                borderBottomColor:
                  activePage == 'recents' ? colors.Blue500 : colors.Gray500,
                borderBottomWidth: 3,
                padding: 5,
              }}
              onPress={() => setActivePage('recents')}>
              <Text style={{color: fontColor, fontSize: 16}}>Recents</Text>
            </TouchableOpacity>
          </View>
        </View>
      }>
      <View>
        {activePage == 'wishlist' && <Wishlist fontColor={fontColor} />}
        {activePage == 'recents' && <Recents fontColor={fontColor} />}
      </View>
    </Section>
  );
};

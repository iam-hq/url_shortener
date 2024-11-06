import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppBar from '../components/AppBar';
import CustomView from '../components/CustomView';
import Item_3 from '../components/Item_3';
import Item_4 from '../components/Item_4';
import Section from '../components/Section';

export default props => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <AppBar />
      <CustomView>
        <ScrollView style={{paddingHorizontal: 10}}>
          <Section title={'Categories'}>
            <FlatList
              horizontal
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              renderItem={item => <Item_3 />}
              style={{
                width: Dimensions.get('window').width - 40,
              }}
            />
          </Section>

          <Section title={'Featured Products'}>
            <FlatList
              horizontal
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              renderItem={item => <Item_4 />}
              style={{
                width: Dimensions.get('window').width - 40,
              }}
            />
          </Section>

          <Section title={'Top Selling'}>
            <FlatList
              horizontal
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              renderItem={item => <Item_4 />}
              style={{
                width: Dimensions.get('window').width - 40,
              }}
            />
          </Section>

          <Section title={'Discount Products'}>
            <FlatList
              horizontal
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              renderItem={item => <Item_4 />}
              style={{
                width: Dimensions.get('window').width - 40,
              }}
            />
          </Section>
        </ScrollView>
      </CustomView>
    </>
  );
};

import CustomView from '../components/CustomView';
import {
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
} from 'react-native';
import CartIcon from '../assets/Jsx/CartIcon';
import ProcessingIcon from '../assets/Jsx/ProcessingIcon';
import {colors} from '../assets/colors';
import Section from '../components/Section';
import WalletIcon from '../assets/Jsx/WalletIcon';
import CompletedTaskIcon from '../assets/Jsx/CompletedTaskIcon';
import CancelledTaskIcon from '../assets/Jsx/CancelledTaskIcon';
import LogoutIcon from '../assets/Jsx/LogoutIcon';
import {useDispatch} from 'react-redux';
import {setLogout} from '../state/index';
import WishlistSection from './Profile/WishlistSection';
import OrdersSection from './Profile/OrdersSection';
import RecommendationSection from './Profile/RecommendationSection';
import VirtualizedList from '../components/VirtualizedList';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  const fontColor = isDarkMode ? colors.White : colors.Black;

  const dispatch = useDispatch();

  return (
    <CustomView>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          borderBottomColor: isDarkMode ? colors.Gray700 : colors.Gray300,
          borderBottomWidth: 1,
          backgroundColor: isDarkMode ? colors.Gray950 : colors.Gray50,
        }}>
        <Text style={{color: fontColor, fontSize: 24, fontWeight: 'bold'}}>
          My Profile
        </Text>
        <View style={{flexDirection: 'row', gap: 20}}>
          <TouchableOpacity
            style={{
              borderRadius: 700,
              padding: 3,
            }}
            onPress={() => alert('Cart')}>
            <CartIcon color={fontColor} size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 700,
              padding: 3,
            }}
            onPress={() => dispatch(setLogout())}>
            <LogoutIcon color={fontColor} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <VirtualizedList style={{paddingHorizontal: 10}}>
        <OrdersSection fontColor={fontColor} />
        <WishlistSection fontColor={fontColor} />
        <RecommendationSection fontColor={fontColor} />
      </VirtualizedList>
    </CustomView>
  );
};

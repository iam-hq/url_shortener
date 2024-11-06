import {Text, View, TouchableOpacity} from 'react-native';
import ProcessingIcon from '../../assets/Jsx/ProcessingIcon';
import Section from '../../components/Section';
import WalletIcon from '../../assets/Jsx/WalletIcon';
import CompletedTaskIcon from '../../assets/Jsx/CompletedTaskIcon';
import CancelledTaskIcon from '../../assets/Jsx/CancelledTaskIcon';

export default props => {
  const {fontColor} = props;
  return (
    <Section title={'My Orders'}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            gap: 5,
            paddingHorizontal: 15,
          }}>
          <WalletIcon color={fontColor} size={24} />
          <Text
            style={{
              color: fontColor,
            }}>
            Unpaid
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            gap: 5,
            paddingHorizontal: 15,
          }}>
          <ProcessingIcon color={fontColor} size={24} />
          <Text
            style={{
              color: fontColor,
            }}>
            Processing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            gap: 5,
            paddingHorizontal: 15,
          }}>
          <CompletedTaskIcon color={fontColor} size={24} />
          <Text
            style={{
              color: fontColor,
            }}>
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            gap: 5,
            paddingHorizontal: 15,
          }}>
          <CancelledTaskIcon color={fontColor} size={24} />
          <Text
            style={{
              color: fontColor,
            }}>
            Cancelled
          </Text>
        </TouchableOpacity>
      </View>
    </Section>
  );
};

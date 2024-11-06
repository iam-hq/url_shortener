import CustomView from '../../components/CustomView';
import {
  TouchableOpacity,
  View,
  Text,
  useColorScheme,
  ScrollView,
  Dimensions,
  Keyboard,
  BackHandler,
  Alert,
} from 'react-native';
import BackIcon from '../../assets/Jsx/BackIcon';
import {colors} from '../../assets/colors';
import DotsVertical from '../../assets/Jsx/DotsVertical';
import SendIcon from '../../assets/Jsx/SendIcon';
import {Avatar} from 'react-native-elements';
import {useState, useEffect, useRef} from 'react';
import TextArea from '../../components/TextArea';
import {useDispatch, useSelector} from 'react-redux';
import {setMessages} from '../../state';

export default props => {
  const {back, navigation} = props;
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const fontColor = isDarkMode ? colors.White : colors.Black;
  const receiveBubbleColor = isDarkMode ? colors.Neutral700 : colors.Neutral300;
  const sentBubbleColor = isDarkMode ? colors.Gray700 : colors.Gray300;
  const messages = useSelector(state => state.messages);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [scrollviewHeight, setScrollviewHeight] = useState(
    Dimensions.get('screen').height - (keyboardHeight + 100),
  );
  const [inputMessage, setInputMessage] = useState('');
  const scrollViewRef = useRef();

  const sendMessage = () => {
    const msgsToSend = JSON.parse(JSON.stringify(messages));
    const id = msgsToSend[msgsToSend.length - 1].messageId + 1;
    msgsToSend.push({
      messageId: id,
      senderId: [12, 14][Math.floor(Math.random() * 10) % 2],
      receiverId: 14,
      messageContent: inputMessage,
      isRead: false,
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    });

    dispatch(setMessages({messages: msgsToSend}));
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        setKeyboardHeight(event.endCoordinates.height);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      },
    );

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        back();
        return true;
      },
    );

    // Clean up event listeners when the component unmounts
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
      backHandler.remove();
    };
  }, []);

  useEffect(() => {
    setScrollviewHeight(
      Dimensions.get('screen').height - (keyboardHeight + 175),
    );
  }, [keyboardHeight]);
  return (
    <CustomView>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
          borderBottomColor: isDarkMode ? colors.Gray700 : colors.Gray300,
          borderBottomWidth: 1,
          backgroundColor: isDarkMode ? colors.Gray950 : colors.Gray50,
        }}>
        <View style={{flexDirection: 'row', alignContent: 'center', gap: 10}}>
          <TouchableOpacity
            style={{
              borderRadius: 700,
              padding: 3,
            }}
            onPress={() => back()}>
            <BackIcon color={fontColor} size={24} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignContent: 'center', gap: 5}}>
            <Avatar
              rounded
              source={{
                uri: `https://randomuser.me/api/portraits/men/${Math.floor(
                  Math.random() * 50,
                )}.jpg`,
              }}
              size="small"
              containerStyle={{borderColor: 'white', borderWidth: 1}}
            />
            <Text style={{color: fontColor, fontSize: 24, fontWeight: 'bold'}}>
              Happy Lakudzala
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 700,
            padding: 3,
          }}>
          <DotsVertical color={fontColor} size={24} />
        </TouchableOpacity>
      </View>

      {/* Messages Section */}

      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }
        style={{
          padding: 10,
          maxHeight: scrollviewHeight,
        }}>
        {messages.map((msg, index) => (
          <View
            key={msg.messageId}
            style={{
              maxWidth: Dimensions.get('window').width - 50,
              backgroundColor:
                msg.senderId == 14 ? receiveBubbleColor : sentBubbleColor,
              padding: 10,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              borderBottomRightRadius: msg.senderId == 14 ? 15 : 0,
              borderBottomLeftRadius: msg.senderId != 14 ? 15 : 0,
              marginBottom: 10,
              alignSelf: msg.senderId != 14 ? 'flex-end' : 'flex-start',
            }}>
            <Text style={{fontSize: 15, color: fontColor}}>
              {msg.messageContent}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderTopWidth: 1,
          borderTopColor: '#ccc',
          padding: 10,
        }}>
        <TextArea
          keyboardHeight={keyboardHeight}
          setScrollviewHeight={setScrollviewHeight}
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
        />
        <TouchableOpacity
          style={{
            backgroundColor: isDarkMode ? colors.Blue800 : colors.Blue500,
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
          onPress={sendMessage}>
          <SendIcon color={fontColor} size={24} />
        </TouchableOpacity>
      </View>
    </CustomView>
  );
};

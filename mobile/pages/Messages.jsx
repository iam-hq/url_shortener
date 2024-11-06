import CustomView from '../components/CustomView';
import {
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
  FlatList,
  TextInput,
} from 'react-native';
import {colors} from '../assets/colors';
import SearchIcon from '../assets/Jsx/SearchIcon';
import XIcon from '../assets/Jsx/XIcon';
import Section from '../components/Section';
import Image_2 from '../assets/img/Layer_8.jpg';
import {format} from 'timeago.js';
import {Avatar, Badge, Icon, SearchBar, withBadge} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {setTabVisible} from '../state';
import {useState} from 'react';
import ChatRoom from './messages/ChatRoom';
import SearchComponent from '../components/SearchComponent';

export default props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const [isChatroom, setIsChatroom] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const fontColor = isDarkMode ? colors.White : colors.Black;
  const openChat = e => {
    dispatch(setTabVisible());
    setIsChatroom(s => !s);
  };

  return (
    <>
      {isChatroom ? (
        <ChatRoom back={openChat} navigation={navigation} />
      ) : (
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
              Messages
            </Text>
            <View style={{flexDirection: 'row', gap: 20}}>
              <TouchableOpacity
                style={{
                  borderRadius: 700,
                  padding: 3,
                }}
                onPress={() => setIsSearch(s => !s)}>
                <SearchIcon color={fontColor} size={24} />
              </TouchableOpacity>
            </View>
          </View>
          {isSearch && (
            <SearchComponent
              searchText={searchText}
              setSearchText={setSearchText}
              toggle={() => setIsSearch(s => !s)}
            />
          )}

          <FlatList
            style={{paddingHorizontal: 5}}
            data={[
              1, 2, 3, 4, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 55, 5, 5, 5, 5, 5, 5, 5,
              5, 5, 5, 5,
            ]}
            renderItem={i => (
              <TouchableOpacity onPress={openChat}>
                <Section>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    {/* <View>
                  <Image
                    source={Image_2}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50 / 2,
                      borderColor: 'white',
                      borderWidth: 1,
                    }}
                  />
                </View> */}
                    <View>
                      <Avatar
                        rounded
                        source={{
                          uri: `https://randomuser.me/api/portraits/men/${Math.floor(
                            Math.random() * 50,
                          )}.jpg`,
                        }}
                        size="medium"
                      />

                      <Badge
                        status={
                          ['success', 'warning'][
                            Math.floor(Math.random() * 10) % 2
                          ]
                        }
                        value={`${Math.floor(Math.random() * 100)}`}
                        containerStyle={{
                          position: 'absolute',
                          top: -4,
                          right: -4,
                        }}
                      />
                    </View>
                    <View style={{marginStart: 10}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: fontColor,
                        }}>
                        Happy Lakudzala
                      </Text>
                      <Text style={{}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontStyle: 'italic',
                        }}>
                        {format(
                          Date.now() -
                            Math.floor(Math.random() * 1000) * 1000 * 60 * 60,
                        )}
                      </Text>
                    </View>
                  </View>
                </Section>
              </TouchableOpacity>
            )}
          />
        </CustomView>
      )}
    </>
  );
};

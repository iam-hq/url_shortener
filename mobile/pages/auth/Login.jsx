import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import darkLogo from '../../assets/img/Logo-o.png';
import lightLogo from '../../assets/img/Logo.png';
import {colors, mainColors} from '../../assets/colors';
import {authStyles as styles} from '../../Style';
import {useDispatch} from 'react-redux';
import {setLogin} from '../../state';

export default props => {
  const {navigation} = props;
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(
      setLogin({
        user: {name: 'Happy Lakudzala', email},
        token: 'password_token_set',
      }),
    );
    // if (email === 'happy' && password === 'password') {
    //   dispatch(
    //     setLogin({
    //       user: {name: 'Happy Lakudzala', email},
    //       token: 'password_token_set',
    //     }),
    //   );
    // } else {
    //   alert('Login failed');
    // }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.Gray950 : colors.Gray50,
  };
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View style={styles.container}>
        <Image
          style={{
            width: 250,
            height: 50,
          }}
          source={isDarkMode ? darkLogo : lightLogo}
        />
        <Text style={styles.sectionTitle}>Login</Text>

        <View style={{width: '100%', marginBottom: 30}}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: isDarkMode ? colors.Gray800 : colors.Gray200,
                color: isDarkMode ? colors.Gray100 : colors.Gray950,
              },
            ]}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={{width: '100%', marginBottom: 30}}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: isDarkMode ? colors.Gray800 : colors.Gray200,
                color: isDarkMode ? colors.Gray100 : colors.Gray950,
              },
            ]}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: mainColors.primary,
            },
          ]}
          onPress={handleLogin}>
          <Text
            style={[
              styles.buttonText,
              {
                color: colors.Gray50,
              },
            ]}>
            Login
          </Text>
        </TouchableOpacity>

        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ScrollView>
  );
};

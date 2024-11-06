import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import {mainColors, colors} from '../assets/colors';
import HomeLogo from '../assets/Jsx/HomeLogo';
import ProductsIcon from '../assets/Jsx/ProductsIcon';
import Products from '../pages/Products';
import {useColorScheme} from 'react-native';
import Profile from '../pages/Profile';
import UserIcon from '../assets/Jsx/UserIcon';
import ChatIcon from '../assets/Jsx/ChatIcon';
import Messages from '../pages/Messages';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  const tabVisible = useSelector(state => state.tabVisible);
  const tintColor = isDarkMode ? colors.Gray100 : colors.Gray900;

  const backgroundColor = isDarkMode ? colors.Blue800 : colors.Blue600;

  const tabStyle = {
    tabBarActiveTintColor: mainColors.secondary,
    tabBarActiveBackgroundColor: backgroundColor,
    tabBarInactiveTintColor: tintColor,
    tabBarStyle: {
      backgroundColor: isDarkMode ? colors.Gray800 : colors.Gray100,
      display: tabVisible ? 'flex' : 'none',
    },
  };

  return (
    <Tab.Navigator
      // initialRouteName="Messages"
      screenOptions={tabStyle}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <HomeLogo color={color} size={size} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <ProductsIcon color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Categories"
        component={Products}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <ProductsIcon color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <ChatIcon color={color} size={size} />,
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <UserIcon color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

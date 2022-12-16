import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Bookmark, Settings, Search} from '../screens';
import {icons} from '../global';
import {TabIcon} from '../components';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={icons.search} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={icons.bookmark} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={icons.settings} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

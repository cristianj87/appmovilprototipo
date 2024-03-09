import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import SplashScreen from '../SplashScreen2';
import HomeStackScreen from './stacks/HomeStackScreen';
import HomeStackScreen2 from './stacks/HomeStackScreen2';
import SettingsStackScreen from './stacks/SettingsStackScreen';

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Entypo name="home" size={24} color={focused ? '#16247d' : '#111'} />
              </View>
            )
          }} 
        />
        <Tab.Screen 
          name="Home" 
          component={HomeStackScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome name="user" size={24} color={focused ? '#16247d' : '#111'} />
              </View>
            )
          }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsStackScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="settings" size={24} color={focused ? '#16247d' : '#111'} />
              </View>
            )
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
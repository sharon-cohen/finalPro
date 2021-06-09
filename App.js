import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  HomePage  from './src/pages/home/HomePage';
import  {ProductPage}  from './src/pages/product/ProductPage';
import  {ProfilePage}  from './src/pages/profile/ProfilePage';
import  SearchPage  from './src/pages/search/SearchPage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeStackScreen } from './src/pages/home/componemt/HomeStackScreen';
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
     
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen }
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarVisible: true,
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="card-search" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
        <MyTabs/>
      
    </NavigationContainer>

    </Provider>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff7700',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: { marginTop: 30, fontSize: 20, fontWeight: 'bold' },
  container: {
    flex: 1,
  },
});
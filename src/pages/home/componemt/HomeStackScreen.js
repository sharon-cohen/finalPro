
import React from 'react';
import HomePage from '../HomePage';
import { NavigationContainer } from '@react-navigation/native';

import  SearchPage  from './../../search/SearchPage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {ProfilePage} from './../../profile/ProfilePage'
const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
	return (
	  <Tab.Navigator
		
	  >
	   
		<Tab.Screen
		  name="Home"
		  component={HomePage}
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


export function HomeStackScreen() {
 return (
	
	<MyTabs/>
  

  );
}
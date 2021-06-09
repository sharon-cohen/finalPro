import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomePage from '../HomePage';
import { ProductPage } from '../../product/ProductPage';
const HomeStack = createStackNavigator();
export function HomeStackScreen() {
 return (
   <HomeStack.Navigator 
   initialRouteName="Home"
   screenOptions={{
	 headerShown: false,
   }}
   >
    <HomeStack.Screen name="Home" component={HomePage} />     
    <HomeStack.Screen name="Product" component={ProductPage} />
   </HomeStack.Navigator>
  );
}
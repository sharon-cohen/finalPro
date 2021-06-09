import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  {ProductPage}  from './src/pages/product/ProductPage';
import { HomeStackScreen } from './src/pages/home/componemt/HomeStackScreen';
const HomeStack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
    
    <NavigationContainer>
    <HomeStack.Navigator 
    initialRouteName="HomeStack"
	
    >
    <HomeStack.Screen name="HomeStack" component={HomeStackScreen} />     
    <HomeStack.Screen name="product" component={ProductPage} />
   </HomeStack.Navigator>

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












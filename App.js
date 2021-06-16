import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  {ProductPage}  from './src/pages/product/ProductPage';
import { HomeStackScreen } from './src/pages/home/componemt/HomeStackScreen';
import { ProductForm } from './src/pages/product/ProductForm';
const HomeStack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
    
    <NavigationContainer>
    <HomeStack.Navigator 
    initialRouteName="HomeStack"
	
    >
    <HomeStack.Screen name="HomeStack" 
    options={({ navigation }) => ({

     
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('productForm')}
          title="פרסם מוצר חדש"
          color="black"
        />
      ),
    })}
    component={HomeStackScreen} />     
    <HomeStack.Screen name="product" component={ProductPage} />
    <HomeStack.Screen name="productForm" component={ProductForm} />
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












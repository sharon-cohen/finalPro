import React,{useEffect} from 'react';
import { View, Text, StyleSheet,Button ,I18nManager} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  ProductPage from './src/pages/product/ProductPage';
import { HomeStackScreen } from './src/pages/home/componemt/HomeStackScreen';
import { ProductForm } from './src/pages/product/ProductForm';
import { UplodImage } from './src/pages/product/UplodImage';
import SplashApp from './SplashApp';
import Login  from './Login';

const HomeStack = createStackNavigator();


export default function App() {
  useEffect(() => {
    I18nManager.forceRTL(true);
    !I18nManager.isRTL && RNRestart.Restart()
  }, []);
 
  return (
    <Provider store={store}>
    
    <NavigationContainer>
    <HomeStack.Navigator 
    initialRouteName="splashScreen"
	
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
    <HomeStack.Screen 
    
    name="product" component={ProductPage} />
    <HomeStack.Screen 
   
    name="login" component={Login} 
    />
    <HomeStack.Screen 
    options={{headerShown: false}}
    name="splashScreen" component={SplashApp} 
    
    />
    <HomeStack.Screen name="productForm" component={ProductForm} />
    <HomeStack.Screen name="uplodImage" component={UplodImage} />
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












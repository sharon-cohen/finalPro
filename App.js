import React, { useEffect } from 'react';
import { I18nManager } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductPage from './src/pages/product/ProductPage';
import { HomeStackScreen } from './src/pages/home/componemt/HomeStackScreen';
import { ProductForm } from './src/pages/product/ProductForm';
import UplodImage from './src/pages/product/UplodImage';
import SplashApp from './SplashApp';
import Login from './Login';

const HomeStack = createStackNavigator();

export default function App() {
  useEffect(() => {
    I18nManager.forceRTL(true);
    !I18nManager.isRTL && RNRestart.Restart();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack.Navigator initialRouteName="splashScreen">
          <HomeStack.Screen
            name="HomeStack"
            options={{ headerShown: false }}
            component={HomeStackScreen}
          />
          <HomeStack.Screen
            options={{ headerShown: false }}
            name="product"
            component={ProductPage}
          />
          <HomeStack.Screen options={{ headerShown: false }} name="login" component={Login} />
          <HomeStack.Screen
            options={{ headerShown: false }}
            name="splashScreen"
            component={SplashApp}
          />
          <HomeStack.Screen
            name="productForm"
            component={ProductForm}
            options={{ headerShown: false }}
          />
          <HomeStack.Screen
            name="uplodImage"
            component={UplodImage}
            options={{ headerShown: false }}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

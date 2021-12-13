/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './Src/Pages/Login';
import Home from './Src/Pages/Home';
import Carrinho from './Src/Pages/Carrinho';


export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName= "Login">
        <Tab.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login} 
        />
        <Tab.Screen 
          options={{ headerShown: false }}
          name="Home" 
          component={Home} 
        />
        <Tab.Screen 
          options={{ headerShown: false }}
          name="Carrinho" 
          component={Carrinho} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

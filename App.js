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
      <Tab.Navigator>
        <Tab.Screen name="login" component={Login} />
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="carrinho" component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

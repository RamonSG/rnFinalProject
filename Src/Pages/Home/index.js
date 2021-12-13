/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../Components/Header/Header.js';

import style from './style.js';

function Home(){
    return (
        <View style= {style.container}>
            <Header/>
            <View style= {style.body}>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
            </View>
        </View>
    );
}

export default Home;

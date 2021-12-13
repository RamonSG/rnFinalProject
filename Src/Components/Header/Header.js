/* eslint-disable prettier/prettier */
import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import style from './style.js';

function Header(){

    const navigation = useNavigation();

    return (
        <Image
            source={require('../../Assets/IMG/logo.png')}
            style= {style.logo}
            onPress={() => navigation.navigate('Home')}
        />
    );
}

export default Header;

/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import style from './style.js';

function Login(){
    return (
        <View style= {style.container}>
            <Image
                source={require('../../Assets/IMG/logo.png')}
                style= {style.logo}
            />
            <TextInput
                style= {style.input}
                placeholder= "Digite seu E-mail"
            />
            <TextInput
                style= {style.input}
                secureTextEntry= {true}
                placeholder= "Digite sua senha"
            />
            <TouchableOpacity style= {style.button}>
                <Text style= {style.buttonText}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;
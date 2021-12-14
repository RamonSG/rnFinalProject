import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "../Pages/Login";

const AppStack = createNativeStackNavigator();

const AuthRoute = () => {
    return(
    <AppStack.Navigator
    screenOptions = {{
        headerShown: false,
    }}>
    <AppStack.Screen name ="Login" component={Login}/>
    </AppStack.Navigator>
    );
}

export default AuthRoute;
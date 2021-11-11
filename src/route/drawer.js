import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../scenes/home';
import Login from '../scenes/login';

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = (props) => {
    return (
        <Drawer.Navigator initialRouteName="MainStackNavigator">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Login} options={{title:'Login'}}/>
        </Drawer.Navigator>
    )
}

export {DrawerStackNavigator};
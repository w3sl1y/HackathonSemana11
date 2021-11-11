/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import Home from './src/scenes/home';
 import Login from './src/scenes/login';
 import { DrawerStackNavigator } from './src/route/drawer';

 const Tab = createBottomTabNavigator();
 const App = () => {
   return (
     <NavigationContainer>
       <DrawerStackNavigator>
           <Tab.Screen name="Home" component={Home} options={{ 
             title:'Home', 
             headerStyle: { backgroundColor: '#212121'}, 
             headerTintColor: '#fff',
             headerTitleAlign: 'center',
             headerTitleStyle: {fontSize: 20, fontWeight: '800', fontFamily: 'arial'}
             }}/>
           <Tab.Screen name="Login" component={Login} options={{
             title:'Login', 
             headerStyle: { backgroundColor: '#212121'}, 
             headerTintColor: '#fff',
             headerTitleAlign: 'center',
             headerTitleStyle: {fontSize: 20, fontWeight: '800', fontFamily: 'arial'}
           }} />
         </DrawerStackNavigator>
     </NavigationContainer>
   );
 };

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 24
  },
});

export default App;

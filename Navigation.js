
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tela1 from './screens/tela1';
import Tela2 from './screens/tela2';

const Stack = createStackNavigator();


function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Tela1">
                <Stack.Screen name = "Tela1"component = {Tela1} optins = {{title:"Tela 1"}}/>
                <Stack.Screen name = "Tela2"component = {Tela2} optins = {{title:"Tela 2"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
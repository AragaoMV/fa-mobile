// navigation/MyTabs.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import HomePage from '../screens/HomePage';
import AtkPage from '../screens/AtkPage';
import DefPage from '../screens/DefPag';
import SpcPage from '../screens/SpcPage';
import Colors from '../constants/colors';



const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color }) => {
                    let iconName;

                    if (route.name === 'Início') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Ataque') {
                        iconName = focused ? 'directions-run' : 'directions-run';
                    } else if (route.name === 'Defesa') {
                        iconName = focused ? 'shield' : 'shield';
                    } else if (route.name === 'Especiais') {
                        iconName = focused ? 'sports-football' : 'sports-football';
                    }

                    return <MaterialIcons name={iconName} size={24} color={color} />;
                },

                tabBarActiveTintColor: Colors.main500,
                tabBarInactiveTintColor:
                    `rgba(${parseInt(Colors.main500.slice(1, 3), 16)}, 
                ${parseInt(Colors.main500.slice(3, 5), 16)}, 
                ${parseInt(Colors.main500.slice(5, 7), 16)}, 0.5)`,  // Cor inativa com 50% de opacidade
                tabBarLabelStyle: {
                    fontSize: 12,
                    lineHeight: 18,
                    fontFamily: 'Roboto_400Regular',
                },
                tabBarStyle: {
                    backgroundColor: Colors.neutral500,
                    borderTopWidth: 0,
                    padding: 4
                },
            })}
        >
            <Tab.Screen name="Início" component={HomePage} />
            <Tab.Screen name="Ataque" component={AtkPage} />
            <Tab.Screen name="Defesa" component={DefPage} />
            <Tab.Screen name="Especiais" component={SpcPage} />
        </Tab.Navigator>
    );
}

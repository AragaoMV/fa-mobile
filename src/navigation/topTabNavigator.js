import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import Colors from '../constants/colors';
import AtkPosPage from "../screens/AtkPosPage";
import DefPosPage from "../screens/DefPosPage";
import SpcPosPage from "../screens/SpcPosPage";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color }) => {
                    let iconName;

                    if (route.name === 'Início') {
                        iconName = 'home';
                    } else if (route.name === 'Ataque') {
                        iconName = 'directions-run';
                    } else if (route.name === 'Defesa') {
                        iconName = 'shield';
                    } else if (route.name === 'Especiais') {
                        iconName = 'sports-football';
                    }

                    return <MaterialIcons name={iconName} size={24} color={color} />;
                },
                tabBarActiveTintColor: Colors.main500,
                tabBarInactiveTintColor: `rgba(${parseInt(Colors.main500.slice(1, 3), 16)}, 
                    ${parseInt(Colors.main500.slice(3, 5), 16)}, 
                    ${parseInt(Colors.main500.slice(5, 7), 16)}, 0.5)`,
                tabBarLabelStyle: {
                    fontSize: 12,
                    lineHeight: 18,
                    fontFamily: 'Roboto_400Regular',
                },
                tabBarStyle: {
                    backgroundColor: Colors.neutral500,
                    borderTopWidth: 0,
                    padding: 4,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: Colors.main500,
                },
            })}
        >
            <Tab.Screen name="Ataque" component={AtkPosPage} />
            <Tab.Screen name="Defesa" component={DefPosPage} />
            <Tab.Screen name="Especiais" component={SpcPosPage} />
        </Tab.Navigator>
    );
}

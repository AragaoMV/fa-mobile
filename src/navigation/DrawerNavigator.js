import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import BottomTabNavigator from './botTabNavigator';
import DescubraPosicaoPage from '../screens/DescubraPosicaoPage';
import TopTabNavigator from './topTabNavigator';
import DetailsPage from '../screens/DetailsPage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Função para gerenciar navegação dentro do Stack Navigator
function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
    >
      <Stack.Screen name="Tabs" component={BottomTabNavigator} />
      <Stack.Screen name="Detalhes" component={DetailsPage} />
    </Stack.Navigator>
  );
}

const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 12, backgroundColor: Colors.neutral500}}>
      <SafeAreaView style={{ padding: 12, flexDirection: "row", alignContent: 'center', justifyContent: 'center', marginBottom: 24 }}>
        <Icon name="sports-football" size={32} color={Colors.main500} style={{ marginTop: 10 }} />
        <Text style={styles.HeaderDrawerText}>FA Mobile</Text>
      </SafeAreaView>
      <DrawerItem
        label="Conceitos"
        icon="menu-book"
        onPress={() => props.navigation.navigate('Tabs')}
      />
      <DrawerItem
        label="Posição"
        icon="accessibility-new"
        onPress={() => props.navigation.navigate('Posição')}
      />
      <DrawerItem
        label="Descubra sua Posição"
        icon="info"
        onPress={() => props.navigation.navigate('Descubra sua Posição')}
      />
    </SafeAreaView>
  );
};

const DrawerItem = ({ label, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
      <Icon name={icon} size={24} color={Colors.main500} />
      <Text style={styles.drawerItemText}>{label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawerHeader = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={32} color={Colors.main500} />
      </TouchableOpacity>
      <Text style={styles.headerText}>FA Mobile</Text>
    </SafeAreaView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        header: () => <CustomDrawerHeader />,
        headerStyle: {
          backgroundColor: Colors.neutral500,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 32,
          lineHeight: 48,
          fontFamily: 'Roboto_700Bold',
        },
      }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStackNavigator} />
      <Drawer.Screen name="Posição" component={TopTabNavigator} />
      <Drawer.Screen name="Descubra sua Posição" component={DescubraPosicaoPage} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: Colors.neutral500,
  },
  headerText: {
    fontSize: 32,
    lineHeight: 48,
    width: '87%',
    textAlign: 'center',
    fontFamily: 'Roboto_700Bold',
    color: Colors.main500,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.main500,
  },
  drawerItemText: {
    fontSize: 16,
    marginLeft: 12,
    padding: 12,
    fontFamily: 'Roboto_500Medium',
    color: Colors.main500,
  },
  HeaderDrawerText: {
    fontSize: 32,
    lineHeight: 48,
    textAlign: 'center',
    marginLeft: 24,
    fontFamily: 'Roboto_700Bold',
    color: Colors.main500,
  },
});

export default DrawerNavigator;

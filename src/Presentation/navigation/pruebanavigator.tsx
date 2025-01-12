import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Login/RegisterScreen';
import {PeliculaDetailScreen} from '../screens/Variado/PeliculaDetailScreen';
import PerfilScreen from '../screens/Variado/PerfilScreen';
import {PeliculasListScreen} from '../screens/Variado/PeliculasScreen';
import {SeriesListScreen} from '../screens/Variado/SeriesScreen';
import Icon from '@react-native-vector-icons/fontawesome6';

export type RootStackParams = {
  Login: undefined;
  Register: undefined;
  MainTabs: {id: string};
  Perfil: {id: string};
  PeliculasList: undefined;
  PeliculaDetail: {id: number}; // Agregado para los detalles de películas
  SeriesList: undefined;
};

// Configuración de Bottom Tab Navigator
const Tab = createBottomTabNavigator<RootStackParams>();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        let iconName: string;

        if (route.name === 'PeliculasList') {
          iconName = 'film'; // Ícono para Películas
        } else if (route.name === 'SeriesList') {
          iconName = 'tv'; // Ícono para Series
        } else if (route.name === 'Perfil') {
          iconName = 'person'; // Ícono para Perfil
        } else {
          iconName = 'tv'; // Valor por defecto (ícono genérico)
        }

        // Retorna el ícono correspondiente
        return (
          <Icon
            name={iconName as any}
            size={size}
            color={color}
            iconStyle="solid"
          />
        );
      },
      tabBarActiveTintColor: 'blue', // Color del ícono activo
      tabBarInactiveTintColor: 'gray', // Color del ícono inactivo
      tabBarLabelStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 5,
      },
      tabBarStyle: {
        paddingVertical: 5, // Agrega padding vertical
        height: 60, // Aumenta la altura si necesitas más espacio
      },
    })}>
    <Tab.Screen
      name="PeliculasList"
      component={PeliculasListScreen}
      options={{
        tabBarLabel: 'Películas',
        headerTransparent: true, // Hace que el header sea transparente
        headerTitle: '', // No muestra título en el header
      }}
    />
    <Tab.Screen
      name="SeriesList"
      component={SeriesListScreen}
      options={{
        tabBarLabel: 'Series',
        headerTransparent: true,
        headerTitle: '',
      }}
    />
    <Tab.Screen name="Perfil" component={PerfilScreen} />
  </Tab.Navigator>
);

// Configuración de Stack Navigator principal
const Stack = createStackNavigator<RootStackParams>();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    {/* Flujo de autenticación */}
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{title: 'Registro'}}
    />
    {/* Flujo principal con Bottom Tabs */}
    <Stack.Screen
      name="MainTabs"
      component={MainTabs}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="PeliculaDetail"
      component={PeliculaDetailScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;

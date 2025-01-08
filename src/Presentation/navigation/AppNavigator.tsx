import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../screens/Login/RegisterScreen';
import HomeScreen from '../screens/Variado/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import PerfilScreen from '../screens/Variado/PerfilScreen';
import {PeliculasListScreen} from '../screens/Variado/PeliculasScreen';

export type RootStackParams = {
  Login: undefined;
  Register: undefined;
  Home: {id: string};
  Perfil: {id: string};
  PeliculasList: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Registro'}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, // No muestra encabezado
          gestureEnabled: false, // Deshabilita gestos de retroceso
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{title: 'Perfil del Usuario'}}
      />
      <Stack.Screen
        name="PeliculasList"
        component={PeliculasListScreen}
        options={{
          headerTransparent: true, // Hace que el header sea transparente
          headerTitle: '', // No muestra título en el header
          headerBackTitleVisible: false, // Oculta el texto "Back" en iOS
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

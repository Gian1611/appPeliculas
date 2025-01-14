import React from 'react';
import {View, Text} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../theme/GlobalStyles';
//import {RootStackParams} from '../../navigation/AppNavigator';
import {getUserByIdUseCase} from '../../../Domain/useCases/LoginUseCase';
import {RootStackParams} from '../../navigation/pruebanavigator';
import {ButtonComponent} from '../../components/Mybutton';
import {useAuth} from '../../context/AuthContext';

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams, 'Perfil'>>();
  const {userId} = useAuth();
  const userData = getUserByIdUseCase(userId);

  const hacerLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <View style={globalStyles.containerPerfil}>
      <Text style={globalStyles.tituloPerfil}>Tu Perfil</Text>
      <View style={globalStyles.card}>
        <Text style={globalStyles.label}>Usuario:</Text>
        <Text style={globalStyles.value}>{userData?.username}</Text>

        <Text style={globalStyles.label}>Nombre:</Text>
        <Text style={globalStyles.value}>{userData?.nombre}</Text>

        <Text style={globalStyles.label}>Apellido:</Text>
        <Text style={globalStyles.value}>{userData?.apellido}</Text>
      </View>
      <ButtonComponent onAction={hacerLogout} label="Cerrar sesión" />
    </View>
  );
};

export default ProfileScreen;

import React, {useState} from 'react';
import {View, TextInput, Text, Alert, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Icon from '@react-native-vector-icons/fontawesome6';
import {globalStyles} from '../../theme/GlobalStyles';
import {
  getIdBynameUseCase,
  LoginUseCase,
} from '../../../Domain/useCases/LoginUseCase';
import {ButtonComponent} from '../../components/Mybutton';
import {RootStackParams} from '../../navigation/pruebanavigator';
import {useAuth} from '../../context/AuthContext';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [username, setUsername] = useState('');
  const [contra, setContra] = useState('');
  const [contraVisible, setContraVisible] = useState(false);
  const {setUserId} = useAuth();

  const hacerLogin = () => {
    if (LoginUseCase(username, contra)) {
      const id = getIdBynameUseCase(username, contra);
      setUserId(id);
      navigation.reset({index: 0, routes: [{name: 'MainTabs', params: {id}}]});
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  const cambioVerContra = () => {
    setContraVisible(!contraVisible);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.tituloleft}>Inicio de sesion</Text>
      <View style={globalStyles.inputContainer}>
        <Icon name="user" size={20} color="#A569BD" style={globalStyles.icon} />
        <TextInput
          style={globalStyles.input}
          placeholder="Usuario"
          placeholderTextColor="#b0acac"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={globalStyles.inputContainer}>
        <Icon
          name="lock"
          size={20}
          color="#A569BD"
          iconStyle="solid"
          style={globalStyles.icon}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Contraseña"
          placeholderTextColor="#b0acac" // Cambiar el color del placeholder
          secureTextEntry={!contraVisible} // Cambia según el estado
          value={contra}
          onChangeText={setContra}
        />
        <TouchableOpacity onPress={cambioVerContra}>
          <Icon
            name={contraVisible ? 'eye' : 'eye-slash'} // Cambia el ícono
            size={17}
            style={globalStyles.icon}
          />
        </TouchableOpacity>
      </View>
      <ButtonComponent onAction={hacerLogin} label="Iniciar Sesión" />
      <Text style={globalStyles.textCenter}>
        ¿No tienes cuenta?{'  '}
        <Text
          style={globalStyles.link}
          onPress={() => navigation.navigate('Register')}>
          Regístrate
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

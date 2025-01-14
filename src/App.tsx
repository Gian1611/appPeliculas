import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './Presentation/navigation/pruebanavigator';
import {AuthProvider} from './Presentation/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

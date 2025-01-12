import React from 'react';
//import AppNavigator from './Presentation/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './Presentation/navigation/pruebanavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;

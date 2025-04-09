import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from './src/screens/Registration/Registration';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Registration}
          options={{title: 'Registration'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

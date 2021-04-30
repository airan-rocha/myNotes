import * as React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-get-random-values';

import Main from './Pages/Main';
import Settings from './Pages/Settings';
import NewEntry from './Pages/Entry';

const Stack = createStackNavigator();

function App() {
  //id title noteText
  const entry = {id: '', title: '', noteText: ''};

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={({navigator, routes}) => ({
            headerTitle: 'Minhas Notas',
          })}
        />
        <Stack.Screen
          name="NewEntry"
          component={NewEntry}
          initialParams={{entry}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerTitle: 'Configurações'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

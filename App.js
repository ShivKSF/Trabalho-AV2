import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeApp from './home';
import DemonsSoulsApp from './DemonsSouls';
import DarkSouls2App from './DarkSouls2';
import BloodborneApp from './Bloodborne';
import DarkSouls3App from './DarkSouls3';
import DarkSoulsApp from './DarkSouls';
import SekiroApp from './Sekiro';
import SobreApp from './Sobre';


const Stack = createStackNavigator();

function MeuApp() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Melhores Jogos da FromSoftware" component={HomeApp} />
        <Stack.Screen name="DemonsSouls" component={DemonsSoulsApp} />
        <Stack.Screen name="DarkSouls" component={DarkSoulsApp} />
        <Stack.Screen name="DarkSouls2" component={DarkSouls2App} />
        <Stack.Screen name="DarkSouls3" component={DarkSouls3App} />
        <Stack.Screen name="Bloodborne" component={BloodborneApp} />
        <Stack.Screen name="Sekiro" component={SekiroApp} />
        <Stack.Screen name="Sobre" component={SobreApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MeuApp;
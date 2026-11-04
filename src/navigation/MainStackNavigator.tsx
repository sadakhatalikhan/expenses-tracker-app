import React from 'react'
import HomeScreen from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';

const Stack = createStackNavigator();

function MainStackNavigator ()  {
  return (
    <Stack.Navigator id='MainStack'
    screenOptions={{ headerShown: false }}
    initialRouteName='Onboarding'
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default MainStackNavigator


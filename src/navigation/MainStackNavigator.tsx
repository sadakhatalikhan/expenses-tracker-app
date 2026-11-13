import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';
import Register from '../screens/Register';
import HomeTabsNavigator from './HomeTabsNavigator';
import { RootStackParamList } from '../http/types/types';

const Stack = createStackNavigator<RootStackParamList>();

function MainStackNavigator ()  {
  return (
    <Stack.Navigator id='MainStack'
    screenOptions={{ headerShown: false }}
    initialRouteName='Onboarding'
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeScreen" component={HomeTabsNavigator} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

export default MainStackNavigator

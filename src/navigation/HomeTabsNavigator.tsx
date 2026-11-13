import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import ExpensesScreen from '../screens/ExpensesScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import { HomeTabParamList, RootStackParamList } from '../http/types/types';
import { Ionicons } from '@expo/vector-icons';

type HomeTabsNavigatorProps = StackScreenProps<RootStackParamList, 'HomeScreen'>;

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabsNavigator: React.FC<HomeTabsNavigatorProps> = ({ route }) => {
  const { user } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {
          backgroundColor: '#FF697D',
          borderTopColor: '#E8ECEB',
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '600',
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ user }}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Expenses" 
        component={ExpensesScreen} 
        initialParams={{ user }}
        options={{
          title: 'Expenses',
          tabBarLabel: 'Expenses',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'wallet' : 'wallet-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Statistics" 
        initialParams={{ user }}
        component={StatisticsScreen} 
        options={{
          title: 'Statistics',
          tabBarLabel: 'Statistics',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        initialParams={{ user }}
        component={ProfileScreen} 
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'person-circle' : 'person-circle-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabsNavigator;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import ExpensesScreen from '../screens/ExpensesScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import { HomeTabParamList, RootStackParamList } from '../http/types/types';

type HomeTabsNavigatorProps = StackScreenProps<RootStackParamList, 'HomeScreen'>;

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabsNavigator: React.FC<HomeTabsNavigatorProps> = ({ route }) => {
  const { user } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#27877F',
        tabBarInactiveTintColor: '#899391',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E8ECEB',
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ user }}
      />
      <Tab.Screen name="Expenses" component={ExpensesScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabsNavigator;

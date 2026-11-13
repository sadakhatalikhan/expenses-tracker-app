import { StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s } from 'react-native-size-matters'
import HomeScreenHeader from '../components/Home/HomeScreenHeader'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../http/types/types';

type ExpenseScreenProps = BottomTabScreenProps<HomeTabParamList, 'Expenses'>;

const ExpensesScreen: React.FC<ExpenseScreenProps> = ({ route }) => {
  console.log('ExpensesScreen before');
  const { user } = route.params;
  console.log('ExpensesScreen user:', user); // Debugging line to check the user object
  return (
    <SafeAreaView style={styles.safeArea}>
        <HomeScreenHeader username={user.username} />
    </SafeAreaView>
  )
}

export default ExpensesScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },
  scrollContent: {
    paddingBottom: s(30),
  },
})
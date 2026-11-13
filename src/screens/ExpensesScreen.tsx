import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s } from 'react-native-size-matters'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../http/types/types';
import GoBack from '../components/common/GoBack'
import TopRightStyle from '../components/common/TopRightStyle';
import { vs } from 'react-native-size-matters';
import PaymentBlock from '../components/Home/PaymentBlock';

type ExpenseScreenProps = BottomTabScreenProps<HomeTabParamList, 'Expenses'>;

const ExpensesScreen: React.FC<ExpenseScreenProps> = ({ route }) => {
  console.log('ExpensesScreen before');
  const { user } = route.params;
  console.log('ExpensesScreen user:', user);
  return (
    <SafeAreaView style={styles.safeArea}>
      <TopRightStyle />
      <View style={styles.container}>
        <Text style={styles.ExpenseText}>Expenses</Text>
      </View>
      <PaymentBlock imageLink="../../../assets/rtxn1.jpeg" payName="Cement Purchase" payDate="11/11/2026"/>
      <PaymentBlock imageLink="../../../assets/rtxn1.jpeg" payName="Cement Purchase" payDate="11/11/2026"/>
      <PaymentBlock imageLink="../../../assets/rtxn1.jpeg" payName="Cement Purchase" payDate="11/11/2026"/>
      <PaymentBlock imageLink="../../../assets/rtxn1.jpeg" payName="Cement Purchase" payDate="11/11/2026"/>
      <PaymentBlock imageLink="../../../assets/rtxn1.jpeg" payName="Cement Purchase" payDate="11/11/2026"/>
      <PaymentBlock imageLink="../../../assets/rtxn1.jpeg" payName="Cement Purchase" payDate="11/11/2026"/>
      <PaymentBlock imageLink="../../../assets/rtxn1.jpeg" payName="Cement Purchase" payDate="11/11/2026"/>
      <TouchableOpacity style={{ marginTop: vs(20)}}>
      <Image source={require('../../assets/addExpense.png')}
        style={styles.image} /> 
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ExpensesScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7F6',
    paddingHorizontal: s(20)
  },
  scrollContent: {
    paddingBottom: s(30),
  },
  container: {
    alignItems: 'center',
    marginTop: vs(40)
  },
  ExpenseText: {
    fontSize: s(20),
    marginBottom: s(15),
    color: '#FF597D',
    fontWeight: 'bold'
  },
  image: {
    width: 30, 
    height: 30, 
    alignSelf: 'center',
    borderRadius: 10
  }
})
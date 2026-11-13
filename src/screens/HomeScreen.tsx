import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HomeTabParamList } from '../http/types/types';
import HomeScreenHeader from '../components/Home/HomeScreenHeader';
import OverlappingCard from '../components/Home/OverlappingCard';
import { s, vs } from 'react-native-size-matters';
import PaymentBlock from '../components/Home/PaymentBlock';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type HomeScreenProps = BottomTabScreenProps<HomeTabParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ route }) => {
  const { user } = route.params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
      {/* TOP HEADER */}
      <HomeScreenHeader username={user.username} />

      {/* OVERLAPPING CARD */}
      <OverlappingCard />

      {/* QUICK ACTIONS */}
      <View style={styles.content}>
        {/* RECENT TRANSACTIONS */}
        <View style={styles.transactionHeader}>
          <Text style={styles.sectionTitle}>
            Recent Payments
          </Text>

          <Text style={styles.viewAll}>
            View all
          </Text>
        </View>
        <PaymentBlock imageLink="../../../assets/rtxn1.jpeg" payName="Cement Purchase" payDate="11/11/2026"/>
        <PaymentBlock imageLink="../../../assets/rtxn1.jpeg" payName="Cement Purchase" payDate="11/11/2026"/>
        <PaymentBlock imageLink="../../../assets/rtxn1.jpeg" payName="Cement Purchase" payDate="11/11/2026"/>
        <PaymentBlock imageLink="../../../assets/rtxn1.jpeg" payName="Cement Purchase" payDate="11/11/2026"/>

      </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },

  scrollContent: {
    paddingBottom: s(30),
  },
  
  // BODY CONTENT
  content: {
    paddingHorizontal: s(22),
    marginTop: vs(10),
  },
  sectionTitle: {
    fontSize: s(19),
    fontWeight: 'bold',
    color: '#252525',
    marginBottom: vs(18),
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },

  viewAll: {
    color: '#27877F',
    fontSize: 14,
    fontWeight: '600',
  },

});

export default HomeScreen;

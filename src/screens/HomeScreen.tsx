
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../http/types/types';
import HomeScreenHeader from '../components/Home/HomeScreenHeader';
import OverlappingCard from '../components/Home/OverlappingCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ route }) => {
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

        <Text style={styles.sectionTitle}>
          Quick Actions
        </Text>

        <View style={styles.actionRow}>
          <ActionCard title="Wallet" icon="💰" />
          <ActionCard title="Transfer" icon="💸" />
          <ActionCard title="Reports" icon="📊" />
        </View>

        {/* RECENT TRANSACTIONS */}
        <View style={styles.transactionHeader}>
          <Text style={styles.sectionTitle}>
            Recent Transactions
          </Text>

          <Text style={styles.viewAll}>
            View all
          </Text>
        </View>

      </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const ActionCard = ({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) => (
  <TouchableOpacity style={styles.actionCard}>
    <Text style={styles.actionIcon}>{icon}</Text>
    <Text style={styles.actionTitle}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },

  scrollContent: {
    paddingBottom: 30,
  },
  

  // BODY CONTENT
  content: {
    paddingHorizontal: 22,
    marginTop: 28,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#252525',
    marginBottom: 18,
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actionCard: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: 'center',
    elevation: 3,
  },

  actionIcon: {
    fontSize: 28,
    marginBottom: 8,
  },

  actionTitle: {
    color: '#333333',
    fontSize: 13,
    fontWeight: '600',
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

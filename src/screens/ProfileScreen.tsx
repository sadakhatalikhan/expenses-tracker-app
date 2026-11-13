import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../http/types/types';
import HomeScreenHeader from '../components/Home/HomeScreenHeader';
import { s, vs } from 'react-native-size-matters';

type ProfileScreenProps = BottomTabScreenProps<HomeTabParamList, 'Profile'>;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route }) => {
  const { user } = route.params;
  return (
    <SafeAreaView style={styles.safeArea}>
        <HomeScreenHeader username={user.username} />
    </SafeAreaView>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },
  scrollContent: {
    paddingBottom: s(30),
  },
});

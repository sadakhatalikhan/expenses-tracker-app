import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getGreeting } from '../../http/utils/greeting';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface HomeScreenHeaderProps {
  username: string;
}

const HomeScreenHeader: React.FC<HomeScreenHeaderProps> = ({ username }) => {
  const greeting = getGreeting();
  const Navigation = useNavigation<any>();

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.welcome}>Welcome back,</Text>
        <Text style={styles.userName}>{username}</Text>
        <Text style={styles.subTitle}>
          {greeting}!
        </Text>
      </View>
      <TouchableOpacity style={styles.profile}>
        <Text style={styles.profileText}>
          <Ionicons name="log-out"
            color={"green"}
            size={30}
          />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreenHeader

const styles = StyleSheet.create({
  // HEADER BACKGROUND
  header: {
    height: 230,
    backgroundColor: '#FF697D',
    borderBottomLeftRadius: 65,
    borderBottomRightRadius: 65,
    paddingHorizontal: 25,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  welcome: {
    color: '#D8F0EC',
    fontSize: 15,
  },

  userName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },

  subTitle: {
    color: '#E4F5F2',
    fontSize: 13,
    marginTop: 8,
  },

  profile: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    color: '#27877F',
    fontSize: 16,
    fontWeight: 'bold',
  }

})
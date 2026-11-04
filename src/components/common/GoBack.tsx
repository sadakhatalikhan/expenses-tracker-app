import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { s } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

interface GoBackProps {
  navigationScreen: string;
}

const GoBack: React.FC<GoBackProps> = ({navigationScreen}) => {
    const Navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Navigation.navigate(navigationScreen)}>
        <MaterialCommunityIcons name="less-than" size={15} color="black" />
      </TouchableOpacity>
      <Text>Back</Text>
    </View>
  )
}

export default GoBack

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        padding: 20,
        flexDirection: 'row',
        gap: s(10)
    },
})
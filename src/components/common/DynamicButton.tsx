import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

interface DynamicButtonProps {
  name: string;
  buttonNavigation: string;
}

const DynamicButton: React.FC<DynamicButtonProps> = ({name, buttonNavigation}) => {
  const Navigation = useNavigation<any>();
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={() => Navigation.navigate({name: buttonNavigation})}>
      <Text style={styles.loginText}>{name}</Text>
      <Feather name="arrow-right" size={20} color="white" />
    </TouchableOpacity>
  )
}

export default DynamicButton

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#FF197D',
        paddingVertical: vs(12),
        paddingHorizontal: s(120),
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: s(5)
    },
    loginText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    }
})
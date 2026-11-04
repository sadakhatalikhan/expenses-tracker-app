import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'

interface InputTextFieldProps {
    placeholder: string;
    secureTextEntry: boolean;
}

const InputTextField: React.FC<InputTextFieldProps> = ({placeholder, secureTextEntry}) => {
  return (
    <View>
      <TextInput style={styles.textFieldStyle} 
      placeholder={placeholder} 
      secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default InputTextField

const styles = StyleSheet.create({
    textFieldStyle: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        opacity: 0.8,
        width: s(300),
        marginBottom: s(20)
    }
})
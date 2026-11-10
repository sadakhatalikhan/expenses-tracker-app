import { StyleSheet, TextInput, View, Text, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { UserRequest } from '../../http/models/User';
import { useState } from 'react';
import { addUser } from '../../http/api/userApi';
import Feather from '@expo/vector-icons/Feather';


const RegisterForm = () => {

  const [value, setValue] = React.useState(null);
  const Navigation = useNavigation<any>(); 
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<UserRequest>({
        phoneNumber: '',
        username: '',
        password: ''
  })

  const updateField = (field: string, value: string) => {
    setForm(previous => ({
        ...previous,
        [field]: value,
      }));
  }

  const handleRegister = async () => {
    try {
        // Validate form fields
        if(!form.username || !form.password || !form.phoneNumber) {
            Alert.alert("Validation Error", "Please fill in all fields.");
            return;
        }
        if (!/^[0-9]+$/.test(form.phoneNumber)) {
            Alert.alert("Phone Number only numbers are allowed")
            return;
        }
        if (form.phoneNumber.length !== 10) {
            Alert.alert("Phone number must be 10 digits long");
            return;
        }

        setLoading(true);

        const response = await addUser({
            ...form,
            username: form.username.trim(),
            password: form.password.trim(),
            phoneNumber: form.phoneNumber.trim()
        });

        if(response.status == 200) {
            Alert.alert("Success", response.message,
                [
                    {
                        text: "OK",
                        onPress: () => Navigation.navigate("Login")
                    }
                ]
                );
        }

        setForm({
            phoneNumber: '',
            username: '',
            password: ''
        });

    } catch (error) {
        console.error('Error registering user:', error);
        Alert.alert("Registration failed", "An error occurred while registering the user.");
    }
  }

  return (
    <View style={styles.container}>
        <Text style={styles.textLabel}>Enter Phone Number</Text>
        <TextInput
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={form.phoneNumber}
            style={styles.phoneField}
            onChangeText={value => updateField('phoneNumber', value)}
        />
        <Text style={styles.textLabel}>Enter Username</Text>
        <TextInput
            placeholder="Enter Username"
            keyboardType="phone-pad"
            value={form.username}
            style={styles.phoneField}
            onChangeText={value => updateField('username', value)}
        />
        <Text style={styles.textLabel}>Enter Password</Text>
        <TextInput
            placeholder="Enter Password"
            secureTextEntry={true}
            autoCapitalize='none'
            value={form.password}
            style={styles.phoneField}
            onChangeText={value => updateField('password', value)}
        />
       <TouchableOpacity style={styles.buttonStyle} onPress={handleRegister}>
        <Text style={styles.registerText}>Register</Text>
            <Feather name="arrow-right" size={20} color="white" />
        </TouchableOpacity>  
    </View>
  )
}

export default RegisterForm

const styles = StyleSheet.create({
    container: {
        padding: s(20)
    },
    phoneField: {
        borderWidth: s(1),
        borderColor: '#ccc',
        borderRadius: s(5),
        padding: s(10),
        fontSize: s(12),
        marginBottom: s(20)
    },
    textLabel: {
        fontSize: s(12),
        marginBottom: s(10),
        color: '#666666'
    },
    registerText: {
        color: 'white',
        fontSize: s(15),
        fontWeight: '500'
    },
    registerTextBlock: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: s(10)
    },
    forgotPasswordText: {
        fontSize: s(12),
        marginBottom: s(10),
        color: '#FF197D',
        textAlign: 'right'
    },
    buttonStyle: {
        backgroundColor: '#FF197D',
        paddingVertical: vs(12),
        paddingHorizontal: s(100),
        borderRadius: s(8),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: s(5)
    }
})
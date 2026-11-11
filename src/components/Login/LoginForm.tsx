import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { AuthRequest } from '../../http/models/User';
import { useState } from 'react';
import { loginUser } from '../../http/api/userApi';
import Feather from '@expo/vector-icons/Feather';


const LoginForm = () => {

  const [value, setValue] = React.useState(null);
  const Navigation = useNavigation<any>();  
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<AuthRequest>({
        phoneNumber: '',
        password: ''
  })

  const updateField = (field: string, value: string) => {
    setForm(previous => ({
        ...previous,
        [field]: value,
      }));
  }

  const handleLogin = async () => {
    try {
        // Validate form fields
        if(!form.password || !form.phoneNumber) {
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

        const response = await loginUser({
            ...form,
            password: form.password.trim(),
            phoneNumber: form.phoneNumber.trim()
        });

        if(response.status == 200) {
            console.log("Login successful:", response.data);
            Navigation.replace("HomeScreen", {user: response.data});
        } else {
            Alert.alert("Login failed", response.message || "An error occurred while logging in."); 
        }


        setForm({
            phoneNumber: '',
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
            style={styles.phoneField}
            value={form.phoneNumber}
            onChangeText={value => updateField('phoneNumber', value)}
        />
        <Text style={styles.textLabel}>Enter Password</Text>
        <TextInput
            placeholder="Enter Password"
            secureTextEntry={true}
            autoCapitalize='none'
            style={styles.phoneField}
            value={form.password}
            onChangeText={value => updateField('password', value)}
        />
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
            <Feather name="arrow-right" size={20} color="white" />
        </TouchableOpacity>   
       <View style={styles.registerTextBlock}>
            <Text style={styles.registerText}>Don't have an account?  
            <TouchableOpacity style={{marginTop: s(5)}} onPress={() => Navigation.navigate("Register")}>
                <Text style={{color: '#FF597D', fontWeight: 'bold', textDecorationLine: 'underline'}}> Register</Text>
        </TouchableOpacity>
       </Text>
    
       </View>
    </View>
  )
}

export default LoginForm

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
        fontSize: s(12),
        marginBottom: s(10),
        color: '#666666',
        textAlign: 'center'
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
        color: '#FF597D',
        textAlign: 'right'
    },
    loginText: {
        color: 'white',
        fontSize: s(15),
        fontWeight: '500'
    },
    buttonStyle: {
        backgroundColor: '#FF597D',
        paddingVertical: vs(12),
        paddingHorizontal: s(100),
        borderRadius: s(8),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: s(5)
    }
})
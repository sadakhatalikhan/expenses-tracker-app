import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoBack from '../components/common/GoBack'
import { vs, s } from 'react-native-size-matters'
import TopRightStyle from '../components/common/TopRightStyle'
import RegisterForm from '../components/Register/RegisterForm'

const Register = () => {
    return (
        <SafeAreaView>
          <TopRightStyle />
          <GoBack navigationScreen={"Login"}/>
          <View style={styles.container}>
            <Text style={styles.RegisterText}>Register</Text>
          </View>
          <View>
                <Image
                    source={require('../../assets/register.png')}
                    style={{ width: 250, height: 200, alignSelf: 'center'}} />
            </View>
            <RegisterForm />
        </SafeAreaView>
      )
}

export default Register

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: vs(20)
      },
      RegisterText: {
        fontSize: s(20),
        marginBottom: s(15),
      }
})
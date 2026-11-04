import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoBack from '../components/common/GoBack'
import TopRightStyle from '../components/common/TopRightStyle'
import { vs } from 'react-native-size-matters'
import LoginForm from '../components/phone/LoginForm'

const Login = () => {
  return (
    <SafeAreaView>
      <TopRightStyle />
      <GoBack navigationScreen={"Onboarding"}/>
      <View style={styles.container}>
        <Text style={styles.phoneText}>Phone Number</Text>
        <Text style={styles.phoneDesc}>Please enter your phone number to verify your account</Text>
      </View>
      <LoginForm />
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: vs(50)
  },
  phoneText: {
    fontSize: 28
  },
  phoneDesc: {
    fontSize: 16,
    marginTop: vs(10),
    color: 'gray',
    textAlign: 'center',
    width: '80%',
    marginBottom: vs(30)
  }
})
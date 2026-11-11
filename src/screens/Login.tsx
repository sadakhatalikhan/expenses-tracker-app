import { StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import GoBack from '../components/common/GoBack'
import TopRightStyle from '../components/common/TopRightStyle'
import { vs, s } from 'react-native-size-matters'
import LoginForm from '../components/Login/LoginForm'

const Login = () => {

  return (
    <SafeAreaView>
      <TopRightStyle />
      <GoBack navigationScreen={"Onboarding"}/>
      <View style={styles.container}>
        <Text style={styles.LoginText}>Login</Text>
      </View>
      <View>
            <Image
                source={require('../../assets/login.png')}
                style={{ width: 200, height: 220, alignSelf: 'center'}} />
        </View>
      <LoginForm />
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: vs(30)
  },
  LoginText: {
    fontSize: s(20),
    marginBottom: s(15),
    color: '#FF597D',
    fontWeight: 'bold'
  }
})
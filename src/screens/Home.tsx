import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopRightStyle from '../components/common/TopRightStyle'

const Home = () => {
  return (
    <SafeAreaView>
      <TopRightStyle />
      <Text>Welcome to the Home Screen</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
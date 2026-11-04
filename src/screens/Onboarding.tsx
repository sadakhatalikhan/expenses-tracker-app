import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { vs } from 'react-native-size-matters'
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {

    const Navigation = useNavigation<any>();
  return (
    <>
    <View style={styles.topRightCorner}/>
    <View style={styles.container}>
      <Text style={styles.appName}>Expense-Tracker</Text>
      <Text style={styles.slogan}>Smarter way to save & understand your spent</Text>
    </View>
    <TouchableOpacity style={styles.startedArrowStyle} onPress={() => Navigation.navigate("Login")}>
        <Entypo name="arrow-with-circle-right" size={50} color="#FF197D" />
    </TouchableOpacity>    
    <View style={styles.bottomRightCorner}/>
    </>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appName: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#FF197D',
    },
    slogan: {
        fontSize: 15,
        marginTop: 10,
        letterSpacing: 1
    },
    topRightCorner: {
        position: 'absolute',
        marginLeft: vs(224),
        top: 0,
        right: 0,
        width: 200,
        height: 150,
        backgroundColor: "#FF197D",
        borderBottomLeftRadius: 120,
    },
    bottomRightCorner: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: 200,
        height: 130,
        backgroundColor: "#FF197D",
        borderTopRightRadius: 120,
    },
    startedArrowStyle: {
        position: 'absolute', 
        bottom: 100, 
        right: 20, 
        padding: 15, 
        borderRadius: 30
    }

})
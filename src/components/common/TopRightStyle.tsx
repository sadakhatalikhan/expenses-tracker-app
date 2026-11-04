import { StyleSheet, View } from 'react-native'
import React from 'react'
import { vs } from 'react-native-size-matters'

const TopRightStyle = () => {
  return (
    <View style={styles.topRightCorner}/>
  )
}

export default TopRightStyle

const styles = StyleSheet.create({
    topRightCorner: {
        position: 'absolute',
        marginLeft: vs(224),
        top: 0,
        right: 0,
        width: 200,
        height: 150,
        backgroundColor: "#FF197D",
        borderBottomLeftRadius: 120,
    }
})
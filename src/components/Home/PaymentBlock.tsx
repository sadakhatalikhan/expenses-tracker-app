import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'

interface PaymentBlockProps {
  imageLink: string;
  payName: string;
  payDate: string;
}

const PaymentBlock: React.FC<PaymentBlockProps> = ({imageLink, payName, payDate}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/rtxn1.jpeg')}
                style={styles.image} /> 
      <View>
        <Text style={styles.payName}>{payName}</Text>          
        <Text style={styles.payDate}>{payDate}</Text>
      </View>
      <View style={{justifyContent: 'center',}}>
        <Text style={styles.amount}>30,000</Text>
      </View>
    </View>
  )
}

export default PaymentBlock

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        gap: s(10),
        padding: s(10),
        width: s(310),
        backgroundColor: '#E4EEED',
        borderRadius: 10
    },
   payName: {
    fontSize: s(12),
    fontWeight: 'bold'
   },
   payDate: {
    marginTop: vs(10)
   },
   amount: {
    marginLeft: s(90),
    fontWeight: 'bold',
     color: '#27877F'
   },
   image: {
     width: 50, 
     height: 50, 
     alignSelf: 'center',
     borderRadius: 10
   }
})
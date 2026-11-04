import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { s } from 'react-native-size-matters';
import DynamicButton from '../common/DynamicButton';

const data = [{
    label: 'USA',
    value: '+1',
    }, {
    label: 'IND',
    value: '+91',
    }, {
    label: 'UAE',
    value: '+971',
    }, {
    label: 'UK',
    value: '+44',
}];

const LoginForm = () => {
    const [value, setValue] = React.useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.phoneFieldBlock}>
       <Dropdown
        data={data}
        labelField="label"
        valueField="value"
        placeholder='Code'
        value={data[0].value}
        style={styles.dropdown}
        onChange={(item) => {setValue(item.value)}}
       />
        <TextInput
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            style={styles.phoneField}
        />
       </View>
       <DynamicButton name={'Login'} buttonNavigation={"Home"}/>   
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    phoneField: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16
    },
    dropdown: {
        height: 50,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        paddingHorizontal: 15,
        width: 100,
    },
    phoneFieldBlock: {
        flexDirection: 'row', 
        gap: s(20),
        marginBottom: s(20)
    }
})
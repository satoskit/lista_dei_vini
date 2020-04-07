import React, { useState } from 'react';
import { Picker, StyleSheet, Text, TextInput, View } from 'react-native';

export default function EditItem({ title, setInput }) {
    const [ value, setValue ] = useState('')
    const [ typeOfWine, setTypeOfWine ] = useState('Red Wine');
    if(title !== 'Type') {
        return( 
            (title !== 'Year') ? 
            <View>
                <Text style={styles.title}>{title}</Text>
                <TextInput style={styles.input} 
                    onChangeText={text => {
                        setInput(text)
                        setValue(text)
                    }}
                    value={value} />
            </View>
            : 
            <View>
                <Text style={styles.title}>{title}</Text>
                <TextInput style={styles.input} 
                    onChangeText={text => {
                        setInput(text)
                        setValue(text)
                    }}
                    value={value} 
                    keyboardType='numeric'
                    maxLength={4} />
            </View>
        )
    } else {
        return(
            <View>
                <Text style={styles.title}>{title}</Text>
                <Picker selectedValue={typeOfWine, setInput(typeOfWine)} 
                    onValueChange={(itemValue, itemIndex) => {
                        setTypeOfWine(itemValue)
                        setInput(itemValue)}} 
                    style={styles.picker}
                >
                    <Picker.Item label="Red Wine" value="Red Wine"/>
                    <Picker.Item label="White Wine" value="White Wine"/>
                    <Picker.Item label="Rosé Wine" value="Rose Wine"/>
                    <Picker.Item label="Sparkling Wine" value="Sparkling Wine"/>
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 5,
    },
    input: {
        height: 35,
        borderColor: '#404040',
        borderWidth: 1,
        borderRadius: 2,
        padding: 3,
        marginBottom: 8,
    },
    picker: {
        height: 35,
        marginBottom: 8,
    }
})
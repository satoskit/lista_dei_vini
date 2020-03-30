import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function EditItem({title}) {
    const [ value, onChangeText ] = useState('')
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.input} 
                onChangeText={text => onChangeText(text)}
                value={value} />
        </View>
    )
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
    }
})
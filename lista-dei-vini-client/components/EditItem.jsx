import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function EditItem({ title, setInput }) {
    const [ value, onChangeText ] = useState('')
    const [ typeOfWine, setTypeOfWine ] = useState("Red Wine");
    if(title !== 'Type') {
        return( 
            (title !== 'Year') ? 
            <View>
                <Text style={styles.title}>{title}</Text>
                <TextInput style={styles.input} 
                    // onChangeText={text => onChangeText(text)}
                    onChangeText={onChangeText}
                    value={value} />
            </View>
            : 
            <View>
                <Text style={styles.title}>{title}</Text>
                <TextInput style={styles.input} 
                    onChangeText={text => setInput(text)}
                    value={value} 
                    keyboardType='numeric'
                    maxLength={4} />
            </View>
        )
    } else {
        return(
            <View>
                <Text style={styles.title}>{title}</Text>
                <Picker selectedValue={typeOfWine} 
                    onValueChange={(itemValue, itemIndex) => setTypeOfWine(itemValue)} 
                    style={styles.picker}
                >
                    <Picker.Item label="Red Wine" value="red"/>
                    <Picker.Item label="White Wine" value="whie"/>
                    <Picker.Item label="Rosé Wine" value="rose"/>
                    <Picker.Item label="Sparkling Wine" value="sparkling"/>
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
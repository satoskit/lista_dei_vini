import React, { useState, useEffect } from 'react';
import { Picker, StyleSheet, Text, TextInput, View } from 'react-native';

export default function EditItem({ title, setInput, itemDetail }) {
    const [ value, setValue ] = useState(itemDetail);
    console.log(itemDetail);
    
    // useEffect(() => {
    //     // if(!(value == null) || !(value == '')) {
    //         setInput({value});
    //         console.log(value)
    //     // }
    // },[]);

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
                    value={value} 
                />
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
                <Picker /*selectedValue="none"*/ 
                    onValueChange={(itemValue, itemIndex) => {
                        if(itemValue !== 'none') {
                            setInput(itemValue)
                        } else {
                            setInput('')
                        } 
                        }}
                    style={styles.picker}
                >
                    <Picker.Item label="Select" value="none"/>
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
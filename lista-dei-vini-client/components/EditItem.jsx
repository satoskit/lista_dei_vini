import React, { useState } from 'react';
import { Picker, StyleSheet, Text, TextInput, View } from 'react-native';
import GradeStars from './GradeStars';

export default function EditItem({ title, getInput, itemDetail }) {
    const [ value, setValue ] = useState(itemDetail);
    console.log(value);
    
    if(title !== 'Type' && title !== 'Grade') {
        return( 
            (title !== 'Year') ? 
            <View>
                <Text style={styles.title}>{title}</Text>
                <TextInput style={styles.input} 
                    onChangeText={text => {
                        getInput(text)
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
                        getInput(text)
                        setValue(text)
                    }}
                    value={`${value}`} 
                    keyboardType='numeric'
                    maxLength={4} />
            </View>
        )
    } else if(title === 'Type'){
        return(
            <View>
                <Text style={styles.title}>{title}</Text>
                <Picker selectedValue={value} 
                    onValueChange={(itemValue, itemIndex) => {
                        if(itemValue !== 'none') {
                            getInput(itemValue)
                            setValue(itemValue)
                        } else {
                            getInput('')
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
    } else if(title === 'Grade') {
        return (
            <View>
                <Text style={styles.title}>{title}</Text>
                <GradeStars grade={value} 
                    getGrade={star => {
                        console.log(star)
                        getInput(star)
                        setValue(star)

                    }}
                    editable={true}
                /> 
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
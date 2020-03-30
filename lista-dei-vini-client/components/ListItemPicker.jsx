import React, { useState } from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';

export default function ListItemPicker({title}) {
    const [ typeOfWine, setTypeOfWine ] = useState("Red Wine");

    return (
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

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 5,
    },
    picker: {
        height: 35,
        marginBottom: 8,
    }
})
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Item({id, navigation, selected, name, pic}) {
    return (
        <TouchableOpacity style={styles.list}
            onPress={() => {
                navigation.navigate('Detail', {id:{id}});}}
        >
            <Text style={styles.item}>Name: {name}</Text>
            <Text>Picture: {pic}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'flex-start',
        // justifyContent: 'flex-start'
    },
    item: {
        padding: 10,
        fontSize: 25,
    },
});
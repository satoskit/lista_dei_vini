import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Item({navigation, id, name, type, selected, }) {
    return (
        <TouchableOpacity style={styles.list}
            onPress={() => {
                navigation.navigate('Detail', {id:{id}});}}
        >
            <Text style={styles.item}>Name: {name}</Text>
            <Text>Type: {type}</Text>
            <Text>Picture: </Text>
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
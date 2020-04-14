import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import GradeStars from './GradeStars';

export default function Item({navigation, id, name, grade, type, selected, }) {
    // set to 0 if grade is not set before
    if(grade === null) { grade = 0; }
    return (
        <TouchableOpacity style={styles.list}
            onPress={() => {
                navigation.push('Detail', { selectedId: id, navigation: navigation });}}
        >
            <Text style={styles.item}>Name: {name}</Text>
            <GradeStars grade={grade} />
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
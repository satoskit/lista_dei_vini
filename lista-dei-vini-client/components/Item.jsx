import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GradeStars from './GradeStars';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Item({navigation, id, name, grade, type, selected, }) {
    // set to 0 if grade is not set before
    if(grade === null) { grade = 0; }
    return (
        <View>
            {/* TODO: subnail?
            <Picture></Picture> */}
            <TouchableOpacity style={styles.list}
                onPress={() => {
                    navigation.push('Detail', { selectedId: id, navigation: navigation });}}
            >
                <Text style={styles.item}>Name: {name}</Text>
                <GradeStars grade={grade} />
                <Text>Type: {type}</Text>
                <Text>Picture: </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.delete}
                // TODO: make modalcard
                // onPress={() => }
            >
                <Icon name="trash-o" size={20} color="#990000" />
            </TouchableOpacity>
        </View>
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
    delete: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        right: 12,
        width: 60,
        height: 60,
    },
});
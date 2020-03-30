import React, { useLayoutEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
// import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';

export default function List({navigation}) {
    // const [ isLoading, setLoading ] = useState(true);
    // const [ list, setList ] = useState([]);
    
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <Button onPress={() => navigation.navigate('EditList')} title="Add" />
    //         )
    //     })
    // });
    let list = [
        {key: 'Red Wine'},
        {key: 'White Wine'},
        {key: 'Rose Wine'},
        {key: 'Sparkling Wine'}
    ];
    const getList = () => {
        return list;
    };
    return (
        <View style={styles.container}>
            <ListItem />
            <TouchableOpacity
                onPress={() => navigation.navigate('EditList')} 
                style={styles.addButton}
            >
                <Icon name="plus-circle" size={35} color="#990000"/>
            </TouchableOpacity>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'flex-start'
    },
    addButton: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        right: 12,
        width: 60,
        height: 60,
    },
    list: {
        justifyContent: 'flex-start'
    },
    item: {
        padding: 10,
    }
});
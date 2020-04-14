import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, StyleSheet, TouchableOpacity, View, ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import ListItem from '../components/ListItem';

export default function List({navigation, route}) {
    const [ isLoading, setLoading ] = useState(route.params);
    const [ listData, setListData ] = useState([]);
    const emptyItem = {
        id: null,
        name: '',
        type: '',
        grade: null,
        year: null,
        country: '',
        winery: '',
        grape: '',
        // picture: ''
    }

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/list')
        .then((response) => 
            response.json().then((json) => {
            setListData(json);
            console.log(json);
        }))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> :
                <ListItem navigation={navigation}
                    listData={listData}
            />}
            <TouchableOpacity
                onPress={() => navigation.push('EditList', { itemSent: emptyItem, updating: false })} 
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
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Item from './Item';

export default function ListItem ({navigation}) {
    const [ isLoading, setLoading ] = useState(true);
    const [ listData, setListData ] = useState([]);
    let listDataTest = [
        {
            id: 1,
            name: 'Red Wine',
            stars: 4,
            type: 'red',
            year: 2018,
            winary: 'Some Cantina',
            country: 'Italy',
            grape: 'Pinot Noir',
            pic: 'picture1',
        },
        {
            id: 2,
            name: 'White Wine',
            pic: 'picture2'
        },
        {
            id: 3,
            name: 'Rose Wine',
            pic: 'picture3'
        },
        {
            id: 4,
            name: 'Sparkling Wine',
            pic: 'picture4'
        }
    ];

    const getList = () => {
        return fetch('http://localhost:8080/api/v1/list')
            .then((response) => response.json())
            .then((json) => setListData(json.data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }

    const [ selected, setSelected ] = useState(new Map());

    return (
        listData.length ? <FlatList data={listData}
                renderItem={({item}) => (
                    <Item  
                        id={item.id}
                        name={item.name} pic={item.pic}
                        // selected={!!selected.get(item.id)}
                        // onPress={onPress}
                        navigation={navigation}
                    />)}
                    keyExtractor={item => item.id}
                    extraData={selected}
                />
            : <View style={styles.emptyList}>
                <Text>Start adding an item!</Text>
            </View>
    )
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
    emptyList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import Item from './Item';
import ipaddress from '../functions/ipaddress';
import sortListData from '../functions/sortListData';

export default function ListItem ({navigation, /*listData,*/ sortBy}) {
    const [ isLoading, setLoading ] = useState(true);
    const [ listData, setListData ] = useState([]);

    useEffect(() => {
        fetch(`${ipaddress}:8080/api/v1/list-without-pic`)
        .then((response) => 
            response.json().then((json) => {
            setListData(json);
        }))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [ isLoading ]);

    function getListData() {
        setLoading(true),
        function() {fetch(`${ipaddress}:8080/api/v1/list-without-pic`)
        .then((response) => 
            response.json().then((json) => {
            setListData(json);
        }))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));}
    }

    return (
        listData ? <View style={{ flex: 1, padding: 24}}>
            {isLoading ?
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#990000" />
                </View>
            : <FlatList data={sortListData(listData, sortBy)}
            renderItem={({item}) => {
                console.log(item.name);
                return (<Item  
                    item={item}
                    id={item.id}
                    grade={item.grade}
                    name={item.name}
                    type={item.type}
                    country={item.country}
                    image={item.image ? true : false}
                    navigation={navigation}
                />)}}
                keyExtractor={(item, index) => `listitem-${index}`}
                onRefresh={() => getListData()}
                refreshing={isLoading}
                /> }
            </View> 
        : <Text style={styles.noitem}>No item yet!</Text>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'flex-start',
    },
    item: {
        padding: 10,
        fontSize: 25,
    },
    emptyList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noitem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // fontFamily: 'monospace'
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
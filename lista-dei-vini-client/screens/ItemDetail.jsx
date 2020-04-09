import React, { useEffect, useLayoutEffect, useState } from 'react';
import ListItems from '../components/ListItem';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ItemDetail({id, name, route, navigation}) {
    const { selectedId } = route.params;
    // const { navigation } = route.params;
    const [ item, setItem ] = useState({});
    const [ isLoading, setLoading ] = useState(true);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => {
                    navigation.push('EditList', { itemSent: item, updating: true });
                }} 
                    title="Edit"
                    style={styles.doneButton} >
                        <Text style={styles.buttonItem}>Edit</Text>
                </TouchableOpacity>
            )
        })
    });

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/list/?id=${selectedId}`)
        .then((response) => 
            response.json().then((json) => {
            setItem(json);
            console.log(json);
        }))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, []);

    const itemKeys = Object.keys(item);
    const itemList = [];
    for(let [key, value] of Object.entries(item)) {
        if(key !== 'id' && key !== 'created_at' ) {
        (value) ? itemList.push(
            <View>
                <Text style={styles.title}>{keyToUpperCase(key)}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>)
            : itemList.push(
            <View>
                <Text style={styles.title}>{keyToUpperCase(key)}</Text>
            <Text style={styles.value}>{"    "}</Text>
            </View>)
        }
    }

    function keyToUpperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        // <Text>Here will be details! {selectedId}, {item.name}</Text>
        <View style={styles.container}>
        {itemList}
        </View>
        // <View>
        //     <Text style={styles.title}>Name</Text>
        //     <Text>{item.name}</Text>
        //     <Text style={styles.title}>Grade</Text>
        //     <Text>{item.grade} </Text>
        //     <Text>Type</Text>
        //     <Text>{item.type}</Text>
        //     <Text>Year</Text>
        //     <Text>{item.year}</Text>
        //     <Text>Country</Text>
        //     <Text>{item.country}</Text>
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    title: {
        padding: 5,
        fontSize: 17,
    },
    value: {
        padding: 5,
        fontSize: 20,
    },
    doneButton: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginRight: 15
    },
    buttonItem: {
        fontSize: 20,
        color: '#990000',
    }
})
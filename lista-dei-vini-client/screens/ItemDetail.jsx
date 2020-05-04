import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import _ from 'lodash';
import GradeStars from '../components/GradeStars';
import BottleImage from '../components/BottleImage';
import ipaddress from '../functions/ipaddress';

export default function ItemDetail({route, navigation}) {
    const { selectedId } = route.params;
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
        fetch(`http://${ipaddress}:8080/api/v1/list/id-without-pic?id=${selectedId}`)
        .then((response) => 
            response.json().then((json) => {
            setItem(json);
            // console.log(json);
        }))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    // const itemKeys = Object.keys(item);
    const itemList = [];
    for(let [key, value] of Object.entries(item)) {
        if(key !== 'id' && key !== 'created_at' && key !== 'grade' && key !== 'image' ) {
        (value) ? itemList.push(
            <View key={key}>
                <Text style={styles.title}>{keyToUpperCase(key)}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>)
            : itemList.push(
            <View key={key}>
                <Text style={styles.title}>{keyToUpperCase(key)}</Text>
            <Text style={styles.value}>{"    "}</Text>
            </View>)
        } else if(key === 'grade') {
        (value) ? itemList.push(
            <View key={key}>
                <Text style={styles.title}>{keyToUpperCase(key)}</Text>
                <View style={styles.star}><GradeStars grade={value} /></View>
                
            </View>)
            : itemList.push(
            <View key={key}>
                <Text style={styles.title}>{keyToUpperCase(key)}</Text>
                <View style={styles.star} ><GradeStars grade={0}  /></View>
                
            </View>)
        }
    }

    function keyToUpperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        isLoading ? 
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#990000" />
            </View>
        :
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.detail}>
                    <View style={styles.image}>
                        <BottleImage big={true} id={item.image ? selectedId : null} />
                    </View>
                    <View>{itemList}</View>
                </ScrollView> 
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detail: {
        margin: 10,
    },
    title: {
        padding: 5,
        fontSize: 17,
        borderBottomColor: '#990000',
        borderBottomWidth: StyleSheet.hairlineWidth,
        fontFamily: 'monospace',
    },
    value: {
        padding: 8,
        fontSize: 20,
        fontFamily: 'monospace',
    },
    star: {
        padding: 5,
    },
    image: {
        alignItems: 'center',
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
        fontFamily: 'monospace',
    }
})
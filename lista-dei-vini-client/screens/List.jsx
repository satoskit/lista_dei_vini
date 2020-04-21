import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, StyleSheet, TouchableOpacity, View, ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import ListItem from '../components/ListItem';
import CameraButton from '../components/CameraButton';

export default function List({navigation, route}) {
    const {passedIsLoading} = route.params
    const [ isLoading, setLoading ] = useState(passedIsLoading);

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
        image: ''
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home') }
                >
                    <Icon name="arrow-alt-circle-left" size={30} color='#fff' />
                </TouchableOpacity>
            )
        })
    });

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
            {isLoading ? 
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#990000" />
                </View> 
            : 
                <ListItem navigation={navigation}
                    listData={listData} />
            }
            <View style={styles.floatButtons}>
                <TouchableOpacity
                    onPress={() => navigation.push('EditList', { itemSent: emptyItem, updating: false })} 
                    style={styles.addButton}
                >
                    <Icon name="plus-circle" size={35} color="#990000"/>
                </TouchableOpacity>
                <CameraButton navigation={navigation} />
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'flex-start'
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    floatButtons: {
        // flex: ,
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 20,
        right: 12,
        width: 60,
        height: 60,
    },
    addButton: {
        // alignItems: 'center',
        // position: 'absolute',
        // bottom: 15,
        // right: 12,
        // width: 60,
        // height: 60,
    },
    list: {
        justifyContent: 'flex-start'
    },
    item: {
        padding: 10,
    },
    backButton: {
        margin: 10
    },
});
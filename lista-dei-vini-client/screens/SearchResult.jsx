import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import ListItem from '../components/ListItem';
import ipaddress from '../functions/ipaddress';

export default function SearchResult({navigation, route}) {
    const { searchedWord } = route.params; 
    const [ isLoading, setLoading ] = useState(true);
    const [ listData, setListData ] = useState({});

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Searched for: " + searchedWord
        })
    }, [navigation, searchedWord]);

    useEffect(() => {
        fetch(`http://${ipaddress}:8080/api/v1/list`)
        .then((response) => 
            response.json().then((json) => {
            setListData(json);
            console.log(json);
        }))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, []);

    return (
        <View>
            {isLoading ? 
                <View /*style={styles.loading}*/>
                    <ActivityIndicator size="large" color="#990000" />
                </View> 
            : 
                <ListItem navigation={navigation}
                    listData={listData} />
            }
        </View>
    )
}
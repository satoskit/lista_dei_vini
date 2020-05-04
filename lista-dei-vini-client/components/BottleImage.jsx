import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ipaddress from '../functions/ipaddress';

export default function BottleImage({big, id}) {
    const [ isLoading, setLoading ] = useState(false);
    const [ source, setSource ] = useState(null);
    useEffect(() => {
        if(id) {
            setSource(`http://${ipaddress}:8080/api/v1/list/image/id?id=${id}`)
        }
    }, []);

    return (
        id ? 
        <View>
            <ActivityIndicator size="large" color="#990000" animating={isLoading} />
            <Image 
                source={{uri: source}}
                style={big ? styles.big : styles.small}
                onLoadStart={() => setLoading(true)}
                onLoad={() => setLoading(false)}
            ></Image>
        </View>
        : 
            <View style={big ? styles.noimageBig : styles.noimageSmall}>
                <Text style={{fontFamily: 'monospace',}}>No Image</Text>
                <Icon name="image" size={20} />
            </View> 
    )
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    small: {
        resizeMode: 'center',
        width: 60, 
        height: 60,
    },
    big: { // TODO: set size 
        resizeMode: 'center',
        width: 170, 
        height: 170,
    },
    noimageSmall: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60, 
        height: 60,
    },
    noimageBig: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 170, 
        height: 170,
    },
    text: {
        textAlign: 'justify',
    },
})
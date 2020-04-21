import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottleImage({source, big}) {
    // to test
    const testsource = require('../assets/testPic.jpg');
    let sourceUri = '';
    // check JPEG or PNG
    if(source.startsWith('iVBORw0KGgo')) {
        sourceUri = 'data:image/png;base64,' + source;
    } else if(source.startsWith('/9g')) {
        sourceUri = 'data:image/jpg;base64,' + source
    } else {
        return <View style={big ? stlyes.noimageBig : stlyes.noimageSmall}><Text>No Image</Text><Icon name="image" size={20} /></View>
    }

    return (
        <View>
            <Image source={sourceUri}/*{source}*/
                style={big ? stlyes.big : stlyes.small}
            ></Image>
        </View>
    )
}

const stlyes = StyleSheet.create({
    small: {
        resizeMode: 'center',
        width: 60, 
        height: 60,
    },
    big: { // TODO: set size 
        resizeMode: 'center',
        width: 100, 
        height: 100,
    },
    noimageSmall: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60, 
        height: 60,
    },
    noimageBig: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100, 
        height: 100,
    },
})
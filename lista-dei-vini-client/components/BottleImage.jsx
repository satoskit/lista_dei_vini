import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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
        return <Text>Error</Text>
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
        width: 50, 
        height: 50,
    },
    big: { // TODO: set size 
        resizeMode: 'center',
        width: 100, 
        height: 100,
    }
})
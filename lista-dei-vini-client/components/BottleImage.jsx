import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function BottleImage({source, big}) {
    // to test
    const testsource = require('../assets/testPic.jpg');
    return (
        <View>
            <Image source={testsource}/*{source}*/
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
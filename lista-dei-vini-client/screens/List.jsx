import React, { useLayoutEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { black } from 'color-name';

export default function List({navigation}) {
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <Button onPress={() => navigation.navigate('EditList')} title="Add" />
    //         )
    //     })
    // });
    return (
        <View style={styles.container}>
            <View>
                <Text>There will be a list of wines!</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('EditList')} 
                style={styles.addButton}
            >
                <Icon name="plus-circle" size={30} color="#990000"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButton: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        right: 12,
        width: 60,
        height: 60,
    }
});
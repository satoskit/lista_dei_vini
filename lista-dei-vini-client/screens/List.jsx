import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function List() {

    return (
        <View style={styles.content}>
            <Text>There will be a list of wines!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: white,
        // alignItem: 'center',
        // justifyContent: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
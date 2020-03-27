import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Statistics() {
    return (
        <View style={styles.container}>
            <Text>There will be statistics of your wine list!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
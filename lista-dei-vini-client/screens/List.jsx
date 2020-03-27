import React, { useLayoutEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function List({navigation}) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => navigation.navigate('EditList')} title="Add" />
            )
        })
    });
    return (
        <View style={styles.container}>
            <Text>There will be a list of wines!</Text>
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
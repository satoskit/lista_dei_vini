import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({navigation}) {

    return (
        <View style={styles.container}>
            <Text>Welcome to lista dei vini!</Text>
            <Button title="My List"
                onPress={() => navigation.navigate('MyList')}
            />
            <Button title="My Statistics"
                onPress={() => navigation.navigate('MyStat')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
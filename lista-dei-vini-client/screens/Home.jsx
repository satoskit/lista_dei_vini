import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function Home({navigation}) {

    return (
        <View style={styles.container}>
            <Text>Welcome to lista dei vini!</Text>
            <TouchableOpacity title="My List"
                onPress={() => navigation.push('MyList', {passedIsLoading: true})}
                style={styles.button}
            >
                <Text style={styles.buttonItem}>My List</Text>
            </TouchableOpacity>
            <TouchableOpacity title="My Statistics"
                onPress={() => navigation.navigate('MyStat')}
                style={styles.button}
            >
                <Text style={styles.buttonItem}>My Statistics</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    button: {
        backgroundColor: '#990000',
        // color: '#fff',
        padding: 20,
        margin: 8,
        borderRadius: 5,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonItem: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 23,
    }
});
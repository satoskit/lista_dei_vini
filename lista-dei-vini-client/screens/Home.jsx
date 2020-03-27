import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({navigation}) {

    return (
        <View style={styles.container}>
            {/* <Header 
                leftComponent={<Icon name="menu"
                                    onPress={() => navigation.openDrawer()} />}
            /> */}
            <View style={styles.content}>
                <Text>Welcome to lista dei vini!</Text>
                <Button title="My List"
                    onPress={() => navigation.navigate('MyList')}
                />
                <Button title="My Statistics"
                    onPress={() => navigation.navigate('MyStat')}
                />
            </View>
        </View>
    );
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
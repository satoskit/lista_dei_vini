import React from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function ListItem () {
    let listData = [
        {
            id: 1,
            name: 'Red Wine',
            stars: 4,
            type: 'red',
            year: 2018,
            winary: 'Some Cantina',
            country: 'Italy',
            grape: 'Pinot Noir',
            pic: 'picture1',
        },
        {
            id: 2,
            name: 'White Wine',
            pic: 'picture2'
        },
        {
            id: 3,
            name: 'Rose Wine',
            pic: 'picture3'
        },
        {
            id: 4,
            name: 'Sparkling Wine',
            pic: 'picture4'
        }
    ];
    const Item = ({id, name, pic}) => {
        return (
            <View style={styles.list}>
                <Text style={styles.item}>Name: {name}</Text>
                <Text>Picture: {pic}</Text>
            </View>
        );
    }
    return (
        listData.length ? <FlatList data={listData}
            renderItem={({item}) => <Item  
                name={item.name} pic={item.pic}
                keyExtractor={item => item.id}
            />}
        />
            : <View style={styles.emptyList}>
                <Text>Start adding an item!</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'flex-start',
        // justifyContent: 'flex-start'
    },
    item: {
        padding: 10,
        fontSize: 25,
    },
    emptyList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
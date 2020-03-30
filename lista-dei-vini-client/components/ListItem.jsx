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
            <View>
                <Text style={styles.item}>Name: {name}</Text>
                <Text>Picture: {pic}</Text>
            </View>
        );
    }
    return (
        <FlatList data={listData}
            renderItem={({item}) => <Item  
                name={item.name} pic={item.pic}
                keyExtractor={item => item.id}
            />}
        />
    )
}

const styles = StyleSheet.create({
    list: {
    },
    item: {
        padding: 10,
        fontSize: 30,
    }
});
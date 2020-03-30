import React from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function ListItem () {
    let listData = [
        {
            id: 1,
            name: 'Red Wine',
            pic: 'picture1'
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
    >
    </FlatList>
    )
}

const styles = StyleSheet.create({
    list: {
        justifyContent: 'flex-start'
    },
    item: {
        padding: 10,
        fontSize: 30,
    }
});
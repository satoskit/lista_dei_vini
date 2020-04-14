import React, { useState } from 'react';
import { ActivtyIndicator, FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Item from './Item';

export default function ListItem ({navigation, listData}) {
    
    return (
        <View style={{ flex: 1, padding: 24}}>
            <FlatList data={listData.sort((a, b) => {return a.id - b.id})}
            renderItem={({item}) => {
                console.log(item.name);
                return (<Item  
                    item={item}
                    id={item.id}
                    grade={item.grade}
                    name={item.name}
                    type={item.type}
                    // pic={item.pic}
                    // onPress={onPress}
                    navigation={navigation}
                />)}}
                keyExtractor={(item, index) => `listitem-${index}`}
            />
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
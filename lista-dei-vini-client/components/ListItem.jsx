import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Item from './Item';

export default function ListItem ({navigation, listData, sortBy}) {
    
    function sortListData(listData, sortBy) {
        switch (sortBy) {
            case 'gradeDesc':
                return listData.sort((a, b) => {return a.grade - b.grade});
            case 'gradeAsc':
                return listData.sort((a, b) => {return b.grade - a.grade});
            case 'nameAsc': 
                return listData.sort((a, b) => {
                    if(a.name == null || a.name == '') { return 1 }
                    else if(b.name == null || b.name == '') { return -1 }
                    let nameA = a.name.toLowerCase();
                    let nameB = b.name.toLowerCase();
                    if (nameA < nameB) { return -1; }
                    if (nameA > nameB) { return 1; }
                    // names equal
                    return 0; });
            case 'nameDesc': 
                return listData.sort((a, b) => {
                    let nameA = a.name.toLowerCase();
                    let nameB = b.name.toLowerCase();
                    if (nameA < nameB) { return 1; }
                    if (nameA > nameB) { return -1; }
                    // names equal
                    return 0; });
            case 'countryAsc' :
                return listData.sort((a, b) => {
                    // set null at the bottom
                    if(a.country == null || a.country == '') { return 1 }
                    else if(b.country == null || b.country == '') { return -1 }
                    let countryA = a.country.toLowerCase();
                    let countryB = b.country.toLowerCase();
                    if (countryA < countryB) { return -1; }
                    if (countryA > countryB) { return 1; }
                    // names equal
                    return 0; });
            case 'typeAsc' : 
                return listData.sort((a, b) => {
                    // set null at the bottom
                    if(a.type == null || a.type == '') { return 1 }
                    else if(b.type == null || b.type == '') { return -1 }
                    let typeA = a.type;
                    let typeB = b.type;
                    if (typeA === 'Red Wine') { return -1; }
                    else if(typeA === 'White Wine' && typeB !== 'Red Wine') { return -1}
                    else if((typeA === 'Rose Wine' || typeA === 'Rosé Wine') && typeB == 'Sparkling Wine') { return -1 }
                    // names equal
                    return 0; });
            case 'createdDesc' : 
                return listData.sort((a, b) => {return a.id - b.id});
            default:
                return listData.sort((a, b) => {return b.id - a.id});
        }
    }
    
    return (
        listData ?<View style={{ flex: 1, padding: 24}}>
            <FlatList data={sortListData(listData, sortBy)}
            renderItem={({item}) => {
                console.log(item.name);
                return (<Item  
                    item={item}
                    id={item.id}
                    grade={item.grade}
                    name={item.name}
                    type={item.type}
                    country={item.country}
                    image={item.image ? true : false}
                    navigation={navigation}
                />)}}
                keyExtractor={(item, index) => `listitem-${index}`}
            />
            </View>
        : <Text style={styles.noitem}>No item yet!</Text>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'flex-start',
    },
    item: {
        padding: 10,
        fontSize: 25,
    },
    emptyList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noitem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'monospace'
    },
});
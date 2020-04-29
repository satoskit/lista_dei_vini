import React, { useState } from 'react';
import { Picker, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchOption({navigation}) {
    const [ searchWord, setSearchWord ] = useState("");
    const [ nameClicked, setNameClicked ] = useState(false);
    
    return (
        <View style={styles.search}>
            <View style={styles.alt}>
                <TouchableOpacity style={styles.altbutton}
                    onPress={() => setNameClicked(!nameClicked)}
                >
                    {nameClicked ? <Icon name="check-circle" size={20} color="#990000"/>: <Icon name="circle-o" size={20} color="#990000" />}
                    <Text>Name</Text>
                </TouchableOpacity>
                {/* <Picker selectedValue={typeOfWine} 
                onValueChange={(itemValue, itemIndex) => setTypeOfWine(itemValue)} 
                style={styles.picker}
            >
                <Picker.Item label="Red Wine" value="red"/>
                <Picker.Item label="White Wine" value="whie"/>
                <Picker.Item label="Rosé Wine" value="rose"/>
                <Picker.Item label="Sparkling Wine" value="sparkling"/>
            </Picker> */}
                <TouchableOpacity></TouchableOpacity>
            </View>
            <View style={styles.inputview}>
                <TextInput style={styles.input} 
                    onChangeText={text => setSearchWord(text)}
                    value={searchWord}
                    placeholder="Type a name of wine, type, year..."
                />
            </View>
            <TouchableOpacity style={styles.searchButton}
                onPress={() => navigation.push('SearchResult', {searchedWord: searchWord})}
            >
                <Text style={styles.find}>Find</Text>
                {/* <Icon name="search" size={25} color='#990000' /> */}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    serach: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    alt: {
        flexDirection: 'row',
    },
    altbutton: {
        flexDirection: 'row',

    },
    inputview: {},
    input: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        marginTop: 10,
        padding: 7,
        height: 30,
        borderColor: '#999999',
        borderWidth: 1,
        borderRadius: 2,
    },
    searchButton: {
        flexDirection: 'row',
        width: 50,
        alignSelf: 'flex-end',
        marginRight: 15,
        // borderWidth: 1,
        borderRadius: 10,
        padding: 6,
        backgroundColor: '#990000',
        justifyContent: 'center',
    },
    find: {
        color: '#fff',
        // marginRight: 5,
    },
})
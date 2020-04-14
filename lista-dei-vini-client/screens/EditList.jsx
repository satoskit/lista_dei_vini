import React, { useLayoutEffect, useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import EditItem from '../components/EditItem';

export default function EditList({navigation, route}) {
    const [ isEditing, setIsEditing ] = useState(false);
    const emptyItem = {
        id: null,
        name: '',
        type: '',
        grade: null,
        year: null,
        country: '',
        winery: '',
        grape: '',
        // picture: ''
    }
    const [ input, setInput ] = useState(emptyItem);
    const { itemSent } = route.params;
    const { updating } = route.params;
    const newItem = {};

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => {
                    mergeItemSentAndInput(itemSent, input);
                    console.log(input);
                    if(!(updating)){
                        postItem(input);
                        navigation.push('MyList', { isLoading: 'true' });
                    } else {
                        updateItem(input);
                        navigation.push('MyList', { isLoading: 'true' });
                    }
                }} 
                    title="Done"
                    style={styles.doneButton} >
                        <Text style={styles.buttonItem}>Done</Text>
                </TouchableOpacity>
            )
        })
    });

    function postItem(input) {
        console.log(input)
        const reqestSetting = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(input)
        }
        fetch('http://localhost:8080/api/v1/list', reqestSetting)
        .then((response) => 
            response.json())
    }

    function updateItem(input) {
        console.log(input)
        const reqestSetting = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(input)
        }
        fetch(`http://localhost:8080/api/v1/list/${itemSent.id}`, reqestSetting)
        .then((response) => 
            response.json())
    }

    function mergeItemSentAndInput(sentItem, input) {
        // if(JSON.stringify(sentItem) === JSON.stringify(input)) { return input; }
        _.isEqual(sentItem, input);

        for(var key in input) {
            if(input[key] === null || input[key] === '') {
                console.log(sentItem[key]);
                input[key] = sentItem[key];
            }
        }
        return input;
    }

    return (
        <View style={styles.container}>
            <Text>Here you can edit your wine list.</Text>
            <EditItem title='Name' getInput={value => {
                    console.log(value)
                    setInput({...input, name: value})}}
                itemDetail={itemSent.name}
            />
            {/* TODO: make grade stars */}
            <EditItem title='Grade' getInput={value => setInput({...input, grade: parseInt(value)})} 
                itemDetail={itemSent.grade}/>
            <EditItem title='Type' getInput={value => {
                    console.log(value)
                    setInput({...input, type: value})}} 
                itemDetail={itemSent.type} />
            <EditItem title='Year' getInput={value => {setInput({...input, year: parseInt(value)})}} 
                itemDetail={itemSent.year} />
            <EditItem title='Country' getInput={value => setInput({...input, country: value})}
                itemDetail={itemSent.country} />
            <EditItem title='Winery' getInput={value => setInput({...input, winery: value})}
                itemDetail={itemSent.winery} />
            <EditItem title='Grape' getInput={value => setInput({...input, grape: value})} 
                itemDetail={itemSent.grape} />
            {/* <EditItem title='Picture' setInput={value => setInput({...input, picture: value})} 
                itemDetail={itemSent.picture} /> */}
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        margin: 15,
        alignItems: 'stretch'
    },
    doneButton: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginRight: 15
    },
    buttonItem: {
        fontSize: 20,
        color: '#990000',
    }
});
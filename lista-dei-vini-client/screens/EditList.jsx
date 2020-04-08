import React, { useLayoutEffect, useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import EditItem from '../components/EditItem';
import EditItemPicker from '../components/EditItemPicker';

export default function EditList({navigation}) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ input, setInput ] = useState({
        name: '',
        type: '',
        //grade: ,
        year: null,
        country: '',
        winery: '',
        grape: '',
        // picture: ''
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => {
                    console.log(input);
                    postItem(input);
                    navigation.navigate('MyList');
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
        // .then(data => )
    }
    
    return (
        <View style={styles.container}>
            <Text>Here you can edit your wine list.</Text>
            <EditItem title='Name' setInput={value => {
                console.log(value)
                setInput({...input, name: value})}}/>
            {/* TODO: make grade stars */}
            <EditItem title='Grade' setInput={value => setInput({...input, grade: value})} />
            {/* <EditItemPicker title='Type' /> */}
            <EditItem title='Type' setInput={value => {
                console.log(value)
                setInput({...input, type: value})}} />
            <EditItem title='Year' setInput={value => setInput({...input, year: parseInt(value)})} />
            <EditItem title='Country' setInput={value => setInput({...input, country: value})} />
            <EditItem title='Winery' setInput={value => setInput(value)} />
            <EditItem title='Grape' setInput={value => setInput({...input, grape: value})} />
            {/* <EditItem title='Picture' setInput={value => setInput({...input, picture: value})} /> */}
            
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
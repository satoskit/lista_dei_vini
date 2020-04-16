import React, { useLayoutEffect, useState } from 'react';
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
    const { updating } = route.params;
    const { itemSent } = route.params;
    const [ input, setInput ] = useState(emptyItem);
    const [ newGrade, setNewGrade ] = useState(null)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => {
                    console.log(input)
                    mergeItemSentAndInput(itemSent, input);
                    if(!(updating)){
                        createItem(input);
                        navigation.push('MyList', { passedIsLoading: true });
                    } else {
                        updateItem(input);
                        navigation.push('MyList', { passedIsLoading: true });
                    }
                }} 
                    title="Done"
                    style={styles.doneButton} >
                        <Text style={styles.buttonItem}>Done</Text>
                </TouchableOpacity>
            )
        })
    });

    function createItem(input) {
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
        _.isEqual(sentItem, input);

        for(var key in input) {
            if(input[key] === null || input[key] === '') {
                input[key] = sentItem[key];
            }
        }
        if(newGrade !== null){
            input['grade'] = newGrade;
        }
        return input;
    }

    return (
        <View style={styles.container}>
            <Text>Here you can edit your wine list.</Text>
            <EditItem title='Name' getInput={value => {
                console.log(value)
                setInput({...input, name: value})}}
                itemDetail={itemSent.name} />
            <EditItem title='Grade' 
                getInput={value => setNewGrade(value)} 
                itemDetail={parseInt(itemSent.grade) || 0}/>
            <EditItem title='Type' getInput={value => {
                    setInput({...input, type: value})}} 
                itemDetail={itemSent.type} />
            <EditItem title='Year' getInput={value => {setInput({...input, year: parseInt(value)})}} 
                itemDetail={parseInt(itemSent.year)} />
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
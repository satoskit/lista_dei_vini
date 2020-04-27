import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import EditItem from '../components/EditItem';

export default function EditList({navigation, route}) {
    // TODO: create function 
    const [ isEditing, setIsEditing ] = useState(false);
    const { updating } = route.params;
    const { itemSent } = route.params;
    console.log(itemSent);
    const { imageBase64 } = route.params;
    const emptyItem = {
        id: null,
        name: '',
        type: '',
        grade: null,
        year: null,
        country: '',
        winery: '',
        grape: '',
        image: imageBase64 ? imageBase64 : null,
    }
    const [ input, setInput ] = useState(emptyItem);
    const [ newGrade, setNewGrade ] = useState(null);

    const [ cannotFind, setCannotFind ] = useState(false);
    const [ fetchedData, setFetchedData ] = useState(emptyItem);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => {
                    setInput(mergeItemSentAndInput(itemSent, input));
                    if(!(updating)){
                        createItem(input);
                    } else {
                        updateItem(input);
                    }
                    navigation.push('MyList', { passedIsLoading: true });
                }} 
                    title="Done"
                    style={styles.doneButton} >
                        <Text style={styles.buttonItem}>Done</Text>
                </TouchableOpacity>
            )
        })
    });

    useEffect(() => {
        if(fetchedData.name != '') {
            setInput({
                ...input,
                name: fetchedData.name,
                type: fetchedData.type,
                country: fetchedData.country,
                winery: fetchedData.winery
            })
        }
    }, [fetchedData])

    function createItem(input) {
        console.log(input)
        const reqestSetting = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(input)
        }
        fetch('http://localhost:8080/api/v1/new-item', reqestSetting)
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
        fetch(`http://localhost:8080/api/v1/update/${itemSent.id}`, reqestSetting)
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


    function findFromSystembolaget(name) {
        if(!name) { return setCannotFind(true); }
        if(fetchedData) { setFetchedData(emptyItem); }
        
        fetch(`http://localhost:8080/systembolaget/v1/product/result-list/?searchedName=${name}`)
        .then((response) => {
            if(response.ok){
                response.json().then((json) => {
                    setFetchedData(json);
                    console.log(json);
                })
            } else if(response.status == 500) {
                return setCannotFind(true);
            }
        })
        .catch((error) => {
            console.error(error);
            setCannotFind(true)
        })
        if(fetchedData.status) {
            console.log(fetchedData)
        }
        setCannotFind(false);
        return fetchedData;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Here you can edit your wine list.</Text>
            <EditItem title='Name' getInput={value => {
                console.log(value)
                setInput({...input, name: value})}}
                itemDetail={itemSent.name}
                fetchedData = {fetchedData.name}
            />
            <TouchableOpacity style={styles.autofill}
                onPress={() => findFromSystembolaget(input.name)}
            >
                <Text style={styles.autofilltext}>Auto Fill</Text>
            </TouchableOpacity>
            {cannotFind ? <Text style={styles.notfoundtext}>Could not find.</Text>: null}
            <EditItem title='Grade' 
                getInput={value => setNewGrade(value)} 
                itemDetail={parseInt(itemSent.grade) || 0}
                fetchedData = {parseInt(itemSent.grade) || 0}
            />
            <EditItem title='Type' getInput={value => {
                    setInput({...input, type: value})}} 
                itemDetail={itemSent.type} 
                fetchedData = {fetchedData.type}
            />
            <EditItem title='Year' getInput={value => {setInput({...input, year: parseInt(value)})}} 
                itemDetail={parseInt(itemSent.year)} 
                fetchedData = {parseInt(itemSent.year)}
            />
            <EditItem title='Country' getInput={value => setInput({...input, country: value})}
                itemDetail={itemSent.country} 
                fetchedData = {fetchedData.country}
            />
            <EditItem title='Winery' getInput={value => setInput({...input, winery: value})}
                itemDetail={itemSent.winery} 
                fetchedData = {fetchedData.winery}
            />
            <EditItem title='Grape' getInput={value => setInput({...input, grape: value})} 
                itemDetail={itemSent.grape} 
                fetchedData = {itemSent.grape}
            />
            <EditItem title='Image' getInput={value => setInput({...input, image: value})} 
                itemDetail={itemSent.image}
                fetchedData = {itemSent.image}
                navigation={navigation} 
            />
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        margin: 15,
        alignItems: 'stretch'
    },
    autofill: {
        width: 100,
        backgroundColor: '#990000',
        alignItems: 'center',
        padding: 3,
        borderRadius: 5,
    },
    autofilltext: {
        fontFamily: 'monospace',
        color: '#fff',
    },
    notfoundtext: {
        fontFamily: 'monospace',
        padding: 5,
        marginLeft: 5,
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
        fontFamily: 'monospace',
    }
});
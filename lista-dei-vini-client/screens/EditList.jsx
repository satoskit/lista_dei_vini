import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import _ from 'lodash';

import EditItem from '../components/EditItem';
import ipaddress from '../functions/ipaddress';
import { createItemWithPic } from '../functions/HandleItem';

export default function EditList({navigation, route}) {
    // TODO: create function 
    const [ isEditing, setIsEditing ] = useState(false);
    const { updating } = route.params;
    const { itemSent } = route.params;
    const { base64 } = route.params;
    const emptyItem = {
        id: null,
        name: '',
        type: '',
        grade: null,
        year: '',
        country: '',
        winery: '',
        grape: '',
    }
    const originalItem = (itemSent !== undefined) ? itemSent : emptyItem; 

console.log(originalItem);

    const [ input, setInput ] = useState(emptyItem);
    const [ newGrade, setNewGrade ] = useState(null);
    
    // for Systembolaget data
    const [ cannotFind, setCannotFind ] = useState(false);
    const [ fetchedData, setFetchedData ] = useState(emptyItem);

    const [ sending, setSending ] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => {
                    setInput(mergeItemSentAndInput(originalItem, input));
                    setSending(true);
                    if(!(updating)){
                        if(!base64) {
                            createItem(input);
                        } else {
                            createItemWithPic(input)
                            .then(() => setSending(false));
                        }

                    } else {
                        updateItem(input);
                    }
                    if(!sending) {
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

    const [ source, setSource ] = useState(null);
    useEffect(() => {
        if(!updating) {
            setSource(`http://${ipaddress}:8080/temp/image/${Math.floor(Math.random() * 100)}`);
        } else {
            setSource(`http://${ipaddress}:8080/api/v1/list/image/id?id=${itemSent.id}`);
        }
    }, [])
    
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
        if(base64) {

        }
        console.log(input)
        const reqestSetting = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(input)
        }
        fetch(`http://${ipaddress}:8080/api/v1/new-item`, reqestSetting)
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
        fetch(`http://${ipaddress}:8080/api/v1/update/${originalItem.id}`, reqestSetting)
        .then((response) => 
            response.json())
    }

    function mergeItemSentAndInput(sentItem, input) {
        if(_.isEqual(sentItem, input)) {
            return input;
        }

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

//** API NO LONGER AVAILABLE! **//
    // function findFromSystembolaget(name) {
    //     if(!name) { return setCannotFind(true); }
    //     if(fetchedData) { setFetchedData(emptyItem); }
        
    //     fetch(`http://${ipaddress}:8080/systembolaget/v1/product/result-list/?searchedName=${name}`)
    //     .then((response) => {
    //         if(response.ok){
    //             response.json().then((json) => {
    //                 setFetchedData(json);
    //                 console.log(json);
    //             })
    //         } else if(response.status == 500) {
    //             return setCannotFind(true);
    //         }
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //         setCannotFind(true)
    //     })
    //     if(fetchedData.status) {
    //         console.log(fetchedData)
    //     }
    //     setCannotFind(false);
    //     return fetchedData;
    // }

    return (
        <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Here you can edit your wine list.</Text>
                <EditItem title='Name' getInput={value => {
                    console.log(value)
                    setInput({...input, name: value})}}
                    itemDetail={originalItem.name}
                    fetchedData = {fetchedData.name}
                />
                {/* <TouchableOpacity style={styles.autofill}
                    onPress={() => findFromSystembolaget(input.name)}
                >
                    <Text style={styles.autofilltext}>Auto Fill</Text>
                </TouchableOpacity> */}
                {/* {cannotFind ? <Text style={styles.notfoundtext}>Could not find.</Text>: null} */}
                <EditItem title='Grade' 
                    getInput={value => setNewGrade(value)} 
                    itemDetail={parseInt(originalItem.grade) || 0}
                    fetchedData = {parseInt(originalItem.grade) || 0}
                />
                <EditItem title='Type' getInput={value => {
                        setInput({...input, type: value})}} 
                    itemDetail={originalItem.type} 
                    fetchedData = {fetchedData.type}
                />
                <EditItem title='Year' getInput={value => {setInput({...input, year: parseInt(value)})}} 
                    itemDetail={originalItem.year} 
                    fetchedData = {originalItem.year}
                />
                <EditItem title='Country' getInput={value => setInput({...input, country: value})}
                    itemDetail={originalItem.country} 
                    fetchedData = {fetchedData.country}
                />
                <EditItem title='Winery' getInput={value => setInput({...input, winery: value})}
                    itemDetail={originalItem.winery} 
                    fetchedData = {fetchedData.winery}
                />
                <EditItem title='Grape' getInput={value => setInput({...input, grape: value})} 
                    itemDetail={originalItem.grape} 
                    fetchedData = {originalItem.grape}
                />
                {/* <EditItem title='Image' getInput={value => setInput({...input, image: value})} 
                    itemDetail={originalItem.image}
                    fetchedData = {originalItem.image}
                    navigation={navigation}
                /> */}
                <View>
                    <Text style={styles.title}>Image</Text>
                    <Image 
                        source={(updating==true)? {uri: source} : null}
                        style={{resizeMode: 'center', height: 170, width: 170}}
                    ></Image>
                </View>
            </ScrollView>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
        // fontFamily: 'monospace',
        color: '#fff',
    },
    notfoundtext: {
        // fontFamily: 'monospace',
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
        // fontFamily: 'monospace',
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
        // fontFamily: 'monospace',
    },
});
import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import EditItem from '../components/EditItem';
import EditItemPicker from '../components/EditItemPicker';

export default function EditList({navigation}) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ input, setInput ] = useState('');

    useLayoutEffect(() => {
            navigation.setOptions({
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('MyList')} 
                        title="Done"
                        style={styles.doneButton} >
                            <Text style={styles.buttonItem}>Done</Text>
                    </TouchableOpacity>
                )
            })
        });

    // TODO: create a functinon to make a list object
    
    return (
        <View style={styles.container}>
            <Text>Here you can edit your wine list.</Text>
            <EditItem title='Name' setInput={value => {
                console.log(value)
                setInput(value)}}/>
            {/* TODO: make grade stars */}
            {/* <EditItemPicker title='Type' /> */}
            <EditItem title='Type' setInput={value => {
                console.log(value)
                setInput(value)}} />
            <EditItem title='Year' setInput={value => setInput(value)} />
            <EditItem title='Country' setInput={value => setInput(value)} />
            <EditItem title='Winery' setInput={value => setInput(value)} />
            <EditItem title='Grape' setInput={value => setInput(value)} />
            <EditItem title='Picture' setInput={value => setInput(value)} />
            
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
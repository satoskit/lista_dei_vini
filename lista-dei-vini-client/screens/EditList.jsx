import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import EditItem from '../components/EditItem';
import EditItemPicker from '../components/EditItemPicker';

export default function EditList({navigation}) {
    const [ isEditing, setIsEditing ] = useState(false);

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

    return (
        <View style={styles.container}>
            <Text>Here you can edit your wine list.</Text>
            <EditItem title='Name' />
            {/* TODO: make grade stars */}
            <EditItemPicker title='Type' />
            <EditItem title='Year' />
            <EditItem title='Country' />
            <EditItem title='Winary' />
            <EditItem title='Grape' />
            <EditItem title='Picture' />
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
        fontSize: 23,
        borderRadius: 5,
        padding: 10,
        marginRight: 15
    },
    buttonItem: {
        color: '#990000',
    }
});
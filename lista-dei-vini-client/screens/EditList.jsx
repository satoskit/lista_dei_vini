import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import EditItem from '../components/EditItem';
import ListItemPicker from '../components/ListItemPicker';

export default function EditList({navigation}) {
    const [ isEditing, setIsEditing ] = useState(false);

    useLayoutEffect(() => {
            navigation.setOptions({
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('MyList')} 
                        title="Done"
                        style={styles.doneButton} >
                            <Text>Done</Text>
                    </TouchableOpacity>
                )
            })
        });

    return (
        <View style={styles.container}>
            <Text>Here you can edit your wine list.</Text>
            <EditItem title='Name' />
            {/* TODO: make grade stars */}
            <ListItemPicker title='Type' />
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
        color: '#990000',
        fontSize: 23,
        borderRadius: 5,
        padding: 10,
        marginRight: 15
    }
});
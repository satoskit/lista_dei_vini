import React, { useState } from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';

import EditItem from '../components/EditItem';
import ListItemPicker from '../components/ListItemPicker';

export default function EditList() {
const [ isEditing, setIsEditing ] = useState(false);

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
    }
});
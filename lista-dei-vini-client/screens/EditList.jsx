import React, { useState } from 'react';
import { Text, View } from 'react-native';

export default function EditList() {
const [ isEditing, setIsEditing ] = useState(false);
    return (
        <View>
            <Text>Here you can edit your wine list.</Text>
        </View>
    )
}
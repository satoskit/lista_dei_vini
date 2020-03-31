import React from 'react';
import ListItems from '../components/ListItem';
import { Text } from 'react-native';

export default function ItemDetail({id, name, route}) {
    const { selectedId } = route.params;

    return (
        <Text>Here will be details! {selectedId}</Text>
    )
}
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import GradeStars from './GradeStars';
import DeleteAlert from './DeleteAlert';
import BottleImage from './BottleImage';

export default function Item({navigation, id, name, grade, type, country, image, setVisible }) {
    // set to 0 if grade is not set before
    if(grade === null) { grade = 0; }
    return (
        <View style={styles.container}>
            {/* TODO: thumbnail?*/}
            {/* <View style={styles.image}></View> */}
            <TouchableOpacity style={styles.list}
                onPress={() => {
                    navigation.push('Detail', { selectedId: id, navigation: navigation });}}
            >
                <View style={styles.image}>
                    {image ? <BottleImage /*source={image}*/ big={false} id={id} />
                    : <BottleImage source={''} big={false} id={null} />}
                </View>
                <View>
                    <Text style={styles.item}>{name}</Text>
                    <GradeStars grade={grade} />
                    <Text /*style={{fontFamily: 'monospace',}}*/>Type: {type}</Text>
                    <Text /*style={{fontFamily: 'monospace',}}*/>Country: {country}</Text>
                </View>
            </TouchableOpacity>
            {/* <TouchableOpacity
                style={styles.delete}
                // TODO: make modalcard
                onPress={() => setVisible(true)}
            >
                <Icon name="trash-o" size={20} color="#990000" />
            </TouchableOpacity> */}
            <View style={styles.delete}>
                <DeleteAlert id={id} navigation={navigation}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 3,
    },
    list: {
        flex: 0.8,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 5,
    },
    item: {
        padding: 10,
        fontSize: 25,
        // fontFamily: 'monospace',
    },
    delete: {
        flex: 0.5,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 30,
    },
});
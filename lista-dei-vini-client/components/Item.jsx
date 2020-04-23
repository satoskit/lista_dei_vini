import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GradeStars from './GradeStars';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                    {image ?<BottleImage source={image} big={false} />
                    : <BottleImage source={''} big={false} />}
                </View>
                <View>
                    <Text style={styles.item}>{name}</Text>
                    <GradeStars grade={grade} />
                    <Text>Type: {type}</Text>
                    <Text>Country: {country}</Text>
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
        // alignContent: 'center',
    },
    list: {
        flex: 0.8,
        alignItems: 'flex-start',
        // justifyContent: 'flex-start'
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
    },
    delete: {
        flex: 0.5,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 30,
        // position: 'absolute',
        // bottom: 15,
        // right: 12,
        // width: 60,
        // height: 60,
    },
});
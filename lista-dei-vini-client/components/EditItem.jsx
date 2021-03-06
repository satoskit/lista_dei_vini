import React, { useState, useEffect } from 'react';
import { Image, Picker, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

import GradeStars from './GradeStars';
import BottleImage from '../components/BottleImage';
import CameraButton from './CameraButton';
import ipaddress from '../functions/ipaddress';

export default function EditItem({ title, getInput, itemDetail, fetchedData, navigation }) {
    const [ value, setValue ] = useState(itemDetail);
    console.log(value);

    useEffect(() => {
        if(fetchedData != '') {
            getInput(fetchedData);
            setValue(fetchedData); 
        }
    }, [fetchedData])
    
    if(title !== 'Type' && title !== 'Grade' && title !== 'Image') {
        return( 
            (title !== 'Year') ? 
            <View>
                <Text style={styles.title}>{title}</Text>
                <TextInput style={styles.input} 
                    onChangeText={text => {
                        getInput(text)
                        setValue(text)
                    }}
                    value={value}
                />
            </View>
            : 
            <View>
                <Text style={styles.title}>{title}</Text>
                <TextInput style={styles.input} 
                    onChangeText={text => {
                        getInput(text)
                        setValue(text)
                    }}
                    value={value ? `${value}` : null} 
                    keyboardType='numeric'
                    maxLength={4} />
            </View>
        )
    } else if(title === 'Type'){
        return(
            <View>
                <Text style={styles.title}>{title}</Text>
                <Picker selectedValue={value} 
                    onValueChange={(itemValue, itemIndex) => {
                        if(itemValue !== 'none') {
                            getInput(itemValue)
                            setValue(itemValue)
                        } else {
                            getInput('')
                        } 
                        }}
                    style={styles.picker}
                >
                    <Picker.Item label="Select" value="none"/>
                    <Picker.Item label="Red Wine" value="Red Wine"/>
                    <Picker.Item label="White Wine" value="White Wine"/>
                    <Picker.Item label="Rosé Wine" value="Rose Wine"/>
                    <Picker.Item label="Sparkling Wine" value="Sparkling Wine"/>
                </Picker>
            </View>
        )
    } else if(title === 'Grade') {
        return (
            <View>
                <Text style={styles.title}>{title}</Text>
                <GradeStars grade={value} 
                    setGrade={star => {
                        getInput(star)
                        setValue(star)
                    }}
                    editable={true}
                    value={value}
                /> 
            </View> 
        )
    } else if(title === 'Image') {
        return (
            <View>
                <Text style={styles.title}>{title}</Text>
                { itemDetail
                    ? 
                    // <BottleImage source={itemDetail} big={true} />
                    <Image 
                        source={{uri: `http://${ipaddress}:8080/temp/image/${Math.floor(Math.random() * 100)}`, cache: 'reload'}}
                        style={{resizeMode: 'center', height: 170, width: 170}}
                    ></Image>
                    : <Text>No Image</Text>
                }
                {/* TODO: make it possible to upload later */}
                {/* <CameraButton navigation={navigation} /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 5,
        // fontFamily: 'monospace',
    },
    input: {
        height: 35,
        borderColor: '#404040',
        borderWidth: 1,
        borderRadius: 2,
        padding: 3,
        marginBottom: 8,
        // fontFamily: 'monospace',
    },
    picker: {
        height: 35,
        marginBottom: 8,
        // fontFamily: 'monospace',
    }
})
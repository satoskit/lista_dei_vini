import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { createImage } from '../functions/HandleImage';

export default function CheckImage({navigation, route}) {
    const [ isLoading, setIsLoading ] = useState(true);
    const { imageBase64Long } = route.params; // with 'data:...'
    let imageBase64 = imageBase64Long.split(',')[1];
    const [ imageSize, setImageSize ] = useState({width: Dimensions.get('window').width, height: null });
    // console.log(imageBase64Long)
    const emptyItem = {
        id: null,
        name: '',
        type: '',
        grade: null,
        year: '',
        country: '',
        winery: '',
        grape: '',
        image: imageBase64
    }

    const [ imageSent, setImageSent ] = useState(false);

    // const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;
    
    useEffect(() => {
        Image.getSize(imageBase64Long, (width, height) => {
            if (imageSize.width && !imageSize.height) {
                setImageSize({
                    width: imageSize.width,
                    height: height * (imageSize.width / width)
                });
            } else if (!imageSize.width && imageSize.height) {
                setImageSize({
                    width: width * (imageSize.height / height),
                    height: imageSize.height
                });
            } else {
                setImageSize({ width: width, height: height });
            }
        }, (error) => {console.log(error)})
        if(imageBase64 !== null) { 
            setIsLoading(false); 
        }
    }, [])

    return(
        <View style={styles.container}>
            { isLoading ? null
                : <Image style={/*styles.showImage,*/ {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: imageSize.height, 
                    width: imageSize.width,
                    resizeMode: 'contain',}}
                source={{uri: imageBase64Long}}
                />
            }
            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={() => {
                        createImage(imageBase64)
                        .then(() => 
                        // setImageSent(true));
                        // if(imageSent) {
                            navigation.push('EditList', {/*itemSent: emptyItem,*/ updating: false, base64: true }));
                        // }
                    }}
                >
                    <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                >
                    <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey'
    },
    buttons: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignContent: 'center',
    },
    save: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 10,
        margin: 10,
        fontSize: 15,
        fontFamily: 'monospace',
    },
    cancel: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        margin: 10,
        fontSize: 15,
        fontFamily: 'monospace',
    },
})

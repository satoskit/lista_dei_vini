import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function CheckImage({navigation, route}) {
    // const [ isLoading, setLoading ] = useState(route.params);
    const { imageBase64Long } = route.params;
    const imageBase64 = imageBase64Long.split(',')[1];
    const [ imageSize, setImageSize ] = useState({width: Dimensions.get('window').width, height: null });

    const emptyItem = {
        id: null,
        name: '',
        type: '',
        grade: null,
        year: null,
        country: '',
        winery: '',
        grape: '',
        image: imageBase64,
    }

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
        })
    }, [])

    return(
        <View style={styles.container}>
            <Image style={/*styles.showImage,*/ {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                height: imageSize.height, 
                width: imageSize.width,
                resizeMode: 'contain',}}
            source={{uri: imageBase64Long}}
            />
            <View>
                <TouchableOpacity
                    onPress={() => navigation.push('EditList', {itemSent: emptyItem, updating: false, imageBase64: imageBase64})}
                >
                    <Text>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Cancel</Text>
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
})

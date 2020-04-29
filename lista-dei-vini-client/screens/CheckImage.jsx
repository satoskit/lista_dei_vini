import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function CheckImage({navigation, route}) {
    const [ isLoading, setIsLoading ] = useState(true);
    const { imageBase64Long } = route.params;
    let imageBase64; // = imageBase64Long.split(',')[1];
    const [ imageSize, setImageSize ] = useState({width: Dimensions.get('window').width, height: null });
    // console.log(imageBase64Long)
    const [ emptyItem, setEmptyItem] = useState({
        id: null,
        name: '',
        type: '',
        grade: null,
        year: null,
        country: '',
        winery: '',
        grape: '',
        image: '',
    })

    // const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;
    
    useEffect(() => {
        if(imageBase64Long.startsWith("/9j/")) {
            imageBase64 =`data:image/jpeg;base64,${imageBase64Long}`;
            console.log("jpg")
        } else if(imageBase64Long.startsWith("iVBORw0KGgo")) {
            imageBase64 = 'data:image/png;base64,' + imageBase64Long;
        } else {
            imageBase64 = imageBase64Long;
        }
        Image.getSize(imageBase64, (width, height) => {
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
            setEmptyItem({...emptyItem, image: imageBase64Long});
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
                source={{uri: `${imageBase64}`}}
                />
            }
            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={() => navigation.push('EditList', {itemSent: emptyItem, updating: false, imageBase64: imageBase64})}
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

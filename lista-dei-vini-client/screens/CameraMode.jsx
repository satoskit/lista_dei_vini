import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CameraMode({navigation}) {
    // TODO: how to store the permission, make user database?
    const [ hasPermission, setHasPermission ] = useState(null);
    // choose front/back camera
    const [ cameraType, setCameraType ] = useState(Camera.Constants.Type.back);
    let camera = null;
    let imageBase64 = '';
    // const [ imageBase64, setImageBase46 ] = useState('');
    let imageBase64Long = '';
    const [ isBase64Set, setBase64Set ] = useState(false);

    useEffect(() => {
        (async() => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            setHasPermission(status === 'granted');
        })();
        if(isBase64Set === true) {
            imageBase64Long = 'new value';
            console.log(imageBase64Long);
            console.log(isBase64Set)
        }
    }, []);

    if(hasPermission === null) {
        return <View></View>
    }
    if(hasPermission === false) {
        return <Text>No access to camera.</Text>
    }

    const takePicture = async() => {
        let picture = await camera.takePictureAsync({onPictureSaved: pausedImage, base64: true })
        // .then(setImageBase46(picture.base64.split(',')[1]))
        // .then(setBase64Set(true));
        console.log(picture.base64);
        // let tmp = ;
        // console.log(typeof tmp)
        imageBase64Long = picture.base64;
        imageBase64 = await picture.base64.split(',')[1];
        console.log(imageBase64);
        console.log((picture.uri === picture.base64));
        if(imageBase64 !=='') {
            navigation.push('CheckImage', {imageBase64Long: imageBase64Long});
        }
        // camera.pausePreview();
    } ;

    const pausedImage = image => {
        console.log(image);
        return image;
    };

    console.log(isBase64Set)
    
    return (
        <View style={styles.container}>
            {/* { !isBase64Set ?  */}
            <Camera style={styles.camera} type={cameraType}
                ref={ref => camera=ref}
            >
                <View style={styles.cameraview}>
                    <View style={styles.cameraButtons}>
                        <View style={styles.cameraCapture}>
                        <TouchableOpacity
                            onPress={() => {
                                takePicture();
                                // navigation.push('CheckImage', {imageBase64Long: imageBase64Long});
                            }}
                        >
                            <Icon name="camera" size={50} ></Icon>
                        </TouchableOpacity>

                        </View>
                        <TouchableOpacity style={styles.cameraFlip}
                            onPress={() => {
                                setCameraType(cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
                            }}
                        >
                            <Icon name="refresh" size={30} /*color=""*//>
                        </TouchableOpacity>
                    </View>
                </View>
            </Camera> 
            {/* : <View><Text>Show image</Text>
                <Image style={styles.showImage}
                    source={{uri: imageBase64Long}}/>
                    {console.log(imageBase64Long)}
            </View>
            }  */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    cameraview: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    cameraButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignSelf: 'bottom',
        alignItems: 'flex-end',
        bottom: 20,
    },
    cameraCapture: {
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 10,
    },
    cameraFlip: {
        marginLeft: 250,
        bottom: 5,
        // alignItems: 'center',
    },
    showImage: {
        // flex: 1,
        height: 300,
        width: 300,
        resizeMode: 'contain',
    },
})
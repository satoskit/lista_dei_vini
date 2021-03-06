import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as FileSystem from 'expo-file-system';

export default function CameraMode({navigation}) {
    // TODO: how to store the permission, make user database?
    const [ hasPermission, setHasPermission ] = useState(null);
    // choose front/back camera
    const [ cameraType, setCameraType ] = useState(Camera.Constants.Type.back);
    let camera = null;
    // useState doesn't work with Base64 string
    let imageBase64 = ''; // without 'data:...'
    let imageBase64Long = ''; // with 'data:...'

    useEffect(() => {
        (async() => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            setHasPermission(status === 'granted');
        })();
    }, []);

    if(hasPermission === null) {
        return <View><Text>Something went wrong.</Text></View>
    }
    if(hasPermission === false) {
        return <Text>No access to camera.</Text>
    }

    const takePicture = async() => {
        let picture = await camera.takePictureAsync({quality: 0, base64: true})
        // imageBase64 = await picture.base64.split(',')[1];
        console.log((picture.uri === picture.base64));
        // console.log(picture.uri)
        
        if(Platform.OS == 'android') {
            imageBase64 = await FileSystem.readAsStringAsync(picture.uri, {encoding: FileSystem.EncodingType.Base64})
            imageBase64Long = `data:image/jpeg;base64,${imageBase64}`
        } else {
            imageBase64Long = picture.base64;
        }

        if(imageBase64Long !=='') {
            navigation.push('CheckImage', {imageBase64Long: imageBase64Long});
        }
    };

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={cameraType}
                ref={ref => camera=ref}
            >
                <View style={styles.cameraview}>
                    <View style={styles.cameraButtons}>
                        <View style={styles.cameraCapture}>
                        <TouchableOpacity
                            onPress={() => takePicture() }
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
    },
})
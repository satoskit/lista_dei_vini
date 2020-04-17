import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CameraMode() {
    // TODO: how to store the permission, make user database?
    const [ hasPermission, setHasPermission ] = useState(null);
    // choose front/back camera
    const [ cameraType, setCameraType ] = useState(Camera.Constants.Type.back);

    let camera = null;

    useEffect(() => {
        (async() => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            setHasPermission(status === 'granted');
        })();
    }, []);

    if(hasPermission === null) {
        return <View></View>
    }
    if(hasPermission === false) {
        return <Text>No access to camera.</Text>
    }

    const takePicture = async() => {
        let picture = await camera.takePictureAsync({ base64: true });
        console.log(picture);
    } 

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={cameraType}
                ref={ref => camera=ref}
            >
                <View style={styles.cameraview}>
                    <View style={styles.cameraButtons}>
                        <View style={styles.cameraCapture}>
                        <TouchableOpacity
                            onPress={() => {
                                takePicture()
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
})
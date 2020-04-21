import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CameraButton({navigation, styles}) {

    return (
        <TouchableOpacity
                    onPress={() => navigation.navigate('CameraMode')} 
                    // style={styles}
                >
                    <Icon name="camera" size={35} color="#990000"/>
                </TouchableOpacity>
    )

}
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';

export default function CheckImage({navigation, route}) {
    const [ isLoading, setLoading ] = useState(route.params);
    const { imageBase64Long } = route.params;
    
    // useEffect(() => {
        
    // }, [])
    console.log(imageBase64Long)
    return(
        <Image style={styles.showImage}
        source={{uri: imageBase64Long}}
        />
    )
}

const styles = StyleSheet.create({
    showImage: {
        // flex: 1,
        height: 300,
        width: 300,
        resizeMode: 'contain',
    },
})

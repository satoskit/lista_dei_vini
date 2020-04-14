import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function GradeStars({grade}) {
    const [ starObjects, setStarObjects ] = useState(createArray());
    
    // useEffect(() => {
        // }, []);
        
    function createArray() {
        let tempObjects = [];
        for(let i = 0; i < grade; i++){
            tempObjects[i] = {};
            tempObjects[i]['id'] = i+1;
            tempObjects[i]['filled'] = true;
        }
        for(let i = grade; i < 5; i++) {
            tempObjects[i] = {};
            tempObjects[i]['id'] = i+1;
            tempObjects[i]['filled'] = false;
        }
        console.log(tempObjects);
        return tempObjects;
    }


    return(
        <View>
            <FlatList data={starObjects} horizontal={true}
                renderItem={({item}) => {
                    return (<Star filled={item.filled}/>)
                }}
                keyExtractor={(star, index) => `staritem-${index}`}
             ></FlatList>
        </View>
    )
}

function Star({filled}) {
    return(
        filled ? <Icon name="star" size={20} />
        : <Icon name="star-o" size={20} />
    )
}
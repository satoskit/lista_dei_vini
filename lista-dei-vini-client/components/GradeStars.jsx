import React, { useState } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function GradeStars({grade, setGrade, editable}) {
    const [ starObjects, setStarObjects ] = useState(createArray(grade));
    
    function createArray(grade) {
        let tempObjects = [];
        if(grade > 0) {
            for(let i = 0; i < grade; i++){
                tempObjects[i] = {};
                tempObjects[i]['id'] = i+1;
                tempObjects[i]['filled'] = true;
            }
        }
        for(let i = grade; i < 5; i++) {
            tempObjects[i] = {};
            tempObjects[i]['id'] = i+1;
            tempObjects[i]['filled'] = false;
        }
        return tempObjects;
    }

    return(
        <View>
            <FlatList data={starObjects} horizontal={true}
                renderItem={({item}) => {
                    return (
                        !(editable) ? <Star filled={item.filled}/>
                        : <EditableStar filled={item.filled} index={item.id} 
                            getStarObjects={value => {
                                setGrade(value)
                                setStarObjects(createArray(value));
                            }} />
                    )
                }}
                keyExtractor={(star, index) => `staritem-${index}`}
             ></FlatList>
        </View>
    )
}

function Star({filled}) {
    return(
        filled ? <Icon name="star" size={20} color="#ffbb33" />
        : <Icon name="star-o" size={20} color="#ffbb33" />
    )
}

function EditableStar({filled, index, getGrade, getStarObjects}) {
    return(
        filled ? <TouchableOpacity 
            onPress={() => {
                getStarObjects(index);
            }}>
                <Icon name="star" size={20} color="#ffbb33" />
            </TouchableOpacity> 
        : <TouchableOpacity 
            onPress={() => {
                getStarObjects(index);
            }}>
                <Icon name="star-o" size={20} color="#ffbb33" />
            </TouchableOpacity> 
    )
}
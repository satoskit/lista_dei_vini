import React, { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, ActivityIndicator, Text, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import ListItem from '../components/ListItem';
import CameraButton from '../components/CameraButton';
import SearchOption from '../components/SearchOption';

export default function List({navigation, route}) {
    const {passedIsLoading} = route.params
    const [ isLoading, setLoading ] = useState({passedIsLoading});

    const [ listData, setListData ] = useState([]);
    const emptyItem = {
        id: null,
        name: '',
        type: '',
        grade: null,
        year: null,
        country: '',
        winery: '',
        grape: '',
        image: ''
    }
    const [ searchOn, setSearchOn ] = useState(false);
    const [ searchWord, setSearchWord ] = useState('');
    const [ sortBy, setSortBy ] = useState('id');
    const [ isSelected, setSelected ] = useState({
        name: false,
        grade: false,
        country: false,
        type: false,
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home') }
                >
                    <Icon name="arrow-alt-circle-left" size={30} color='#fff' />
                </TouchableOpacity>
            ), 
            headerRight: () => (
                <TouchableOpacity style={styles.backButton}
                    onPress={() => setSearchOn(!searchOn) }
                >
                    <Icon name="search" size={30} color='#fff' />
                </TouchableOpacity>
            )
        })
    });

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/list')
        .then((response) => 
            response.json().then((json) => {
            setListData(json);
            console.log(json);
        }))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [isLoading]);

    return (
        <View style={styles.container}>
            {searchOn ? 
                // <SearchOption navigation={navigation} />
                <View style={styles.search}>
                    <TextInput style={styles.input} 
                        onChangeText={text => setSearchWord(text)}
                        value={searchWord}
                        placeholder="Type a name of wine, type, year..."
                    />
                    <TouchableOpacity style={styles.searchButton}
                        onPress={() => navigation.push('SearchResult', {searchedWord: searchWord})}
                    >
                        <Text style={styles.find}>Find</Text>
                        {/* <Icon name="search" size={25} color='#990000' /> */}
                    </TouchableOpacity>
                </View>
                : 
                <View style={styles.sortview}>
                    <Text style={{fontFamily: 'monospace',}}>Sort by: </Text>
                    <TouchableOpacity style={styles.sort}
                        onPress={() => {(sortBy=='nameAsc') ? setSortBy('nameDesc') : setSortBy('nameAsc')
                            setLoading(true);
                            setSelected({name: true})
                        }}
                    >
                        <Text style={isSelected.name ? styles.selected : styles.sorttext}>Name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sort}
                        onPress={() => {(sortBy=='gradeAsc') ? setSortBy   ('gradeDesc') : setSortBy('gradeAsc')
                            setLoading(true);
                            setSelected({grade: true})
                        }}
                    >
                        <Text style={isSelected.grade ? styles.selected : styles.sorttext}>Grade</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sort}
                        onPress={() => { if(sortBy=='typeAsc') { return null; } 
                            setSortBy('typeAsc');
                            setLoading(true);
                            setSelected({type: true});
                        }}
                    >
                        <Text style={isSelected.type ? styles.selected : styles.sorttext}>Type</Text>
                    </TouchableOpacity>
                </View>
                }
            {isLoading ? 
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#990000" />
                </View> 
            : 
                <ListItem navigation={navigation}
                    listData={listData} 
                    sortBy={sortBy}
                    />
            }
            <View style={styles.floatButtons}>
                <TouchableOpacity
                    onPress={() => navigation.push('EditList', { itemSent: emptyItem, updating: false })} 
                    style={styles.addButton}
                >
                    <Icon name="plus-circle" size={35} color="#990000"/>
                </TouchableOpacity>
                <CameraButton navigation={navigation} />
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    floatButtons: {
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 20,
        right: 12,
        width: 60,
        height: 60,
    },
    addButton: {
    },
    list: {
        justifyContent: 'flex-start'
    },
    item: {
        padding: 10,
    },
    backButton: {
        margin: 10
    },
    serach: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: 5,
    },
    input: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        marginTop: 10,
        padding: 7,
        height: 30,
        borderColor: '#999999',
        borderWidth: 1,
        borderRadius: 2,
    },
    searchButton: {
        flexDirection: 'row',
        width: 50,
        alignSelf: 'flex-end',
        marginRight: 15,
        // borderWidth: 1,
        borderRadius: 10,
        padding: 6,
        backgroundColor: '#990000',
        justifyContent: 'center',
    },
    find: {
        color: '#fff',
    },
    sortview: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 15,
        alignItems: 'center'
    },
    sort: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#808080',
        margin:2,
        padding: 3,
    },
    selected: {
        color: '#666666',
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    sorttext: {
        color: '#999999',
        fontFamily: 'monospace',
    },
});
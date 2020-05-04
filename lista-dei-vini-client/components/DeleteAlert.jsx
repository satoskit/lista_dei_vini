import React, { useState } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ipaddress from '../functions/ipaddress';

export default function DeleteModal({id, navigation}) {
  // TODO: create modal for mobile
  const [ isVisible, setVisible ] = useState(false);

    function toggleAlert() {
      const alertText = 'Are you sure that you want to delete?';
      if(Platform.OS === 'web' ){
        const confirmation = confirm(alertText)
        if(confirmation === true) {
          deleteItem(id);
          navigation.push('MyList', {passedIsLoading: true});
        } 
      } else {
        Alert.alert(
          'Delete an Item',
          'Are you sure that you want to delete?',
          // buttons
          [
            { text: 'Cancel',
              onPress: () => doNothing,
              style: 'cancel', },
            { text: 'Yes',
              onPress: () => {
                deleteItem(id);
                navigation.push('MyList', {passedIsLoading: true});
              }, } 
          ],
          // options
          { cancelable: true }
        )
      }
    }
    
    function deleteItem(id) {
        const reqestSetting = {
            method: 'Delete',
            headers: { 'Content-Type': 'application/json' }, 
        }
        fetch(`http://${ipaddress}:8080/api/v1/delete/${id}`, reqestSetting)
        .then((response) => 
            response.json())
    }
    
    return (
        <View>
            <TouchableOpacity
                    // style={styles.delete}
                    // TODO: make modalcard
                    onPress={() => toggleAlert()}
                >
                    <Icon name="trash-o" size={20} color="#990000" />
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    buttonZone: {
        // place buttons horizontally
    },
    
})
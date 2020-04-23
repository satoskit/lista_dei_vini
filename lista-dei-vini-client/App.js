import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './screens/Home';
import List from './screens/List';
import Statistics from './screens/Statistics';
import EditList from './screens/EditList';
import ItemDetail from './screens/ItemDetail';
import CameraMode from './screens/CameraMode';
import CheckImage from './screens/CheckImage';
import SearchResult from './screens/SearchResult';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenStyles} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyList" component={List} 
          options={{title: 'My List'}} />
        <Stack.Screen name="MyStat" component={Statistics} options={{title: 'My Statistics'}} />

        <Stack.Screen name="CameraMode" component={CameraMode} options={{title: 'Camera Mode', headerTransparent: true }} />
        <Stack.Screen name="CheckImage" component={CheckImage} options={{title: 'Image', headerTransparent: true }} />

        <Stack.Screen name="EditList" component={EditList} options={{title: 'Edit'}}/>

        <Stack.Screen name="Detail" component={ItemDetail} />

        <Stack.Screen name="SearchResult" component={SearchResult} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const screenStyles = {
  headerStyle: {
    backgroundColor: '#990000'
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
  headerBackImage: () => <Icon name="arrow-alt-circle-left" size={30} color='#fff' />,
};
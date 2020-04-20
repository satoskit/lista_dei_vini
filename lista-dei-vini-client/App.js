import React, { useState } from 'react';
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

const Stack = createStackNavigator();

export default function App() {
//   // const [ isReady, setIsReady ] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenStyles} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyList" component={List} 
          options={{title: 'My List'}} />
        <Stack.Screen name="MyStat" component={Statistics} options={{title: 'My Statistics'}, headerOptions} />

        <Stack.Screen name="CameraMode" component={CameraMode} options={{title: 'Camera Mode'}} />
        <Stack.Screen name="CheckImage" component={CheckImage} options={{title: 'Image'}} />

        <Stack.Screen name="EditList" component={EditList} options={{title: 'Edit'}}/>

        <Stack.Screen name="Detail" component={ItemDetail} options={headerOptions} />
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
  // headerBackImage: something,
}

const headerOptions = {
  // headerBackImage: () => <Icon name="arrow-alt-circle-left" size={30} color='#fff' />,//<Image source={require('./assets/arrow-alt-circle-left-solid.svg')} />,
  headerBackTitle: 'Back',
  //headerBackTitleVisible: true 
}

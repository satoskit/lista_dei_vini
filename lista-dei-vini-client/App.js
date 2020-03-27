import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import List from './screens/List';
import Statistics from './screens/Statistics';
import EditList from './screens/EditList';

const Stack = createStackNavigator();

export default function App() {
//   // const [ isReady, setIsReady ] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenStyles}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyList" component={List} options={{title: 'My List' }}/>
        <Stack.Screen name="MyStat" component={Statistics} options={{title: 'My Statistics' }}/>

        <Stack.Screen name="EditList" component={EditList} options={{title: 'Edit' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
//   // return (
//   //   <View style={styles.container}>
//   //     <Text>Open up App.js to start working on your app!</Text>
//   //     <Home></Home>
//   //   </View>
//   // );
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
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}
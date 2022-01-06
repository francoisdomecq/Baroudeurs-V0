import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from '../Components/Map';
import { View, StyleSheet, Dimensions, Button } from 'react-native';
import Details from '../Components/Details';

const Stack = createNativeStackNavigator();

class Navigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Details" component={Details} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Navigation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});




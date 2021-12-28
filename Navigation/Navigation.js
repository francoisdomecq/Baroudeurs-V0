import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from '../Components/Map'
import Details from '../Components/Details';

const Stack = createNativeStackNavigator();

class Navigation extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Map" component={Map}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigation


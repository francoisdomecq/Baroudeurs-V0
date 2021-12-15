import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import {MARKERS_DATA} from './Data/Markers_Data';
import { mapStyle } from './assets/Style/mapStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Map from './Components/Map'

export default function App(){
   return (
      <Map/> // test
  );
}

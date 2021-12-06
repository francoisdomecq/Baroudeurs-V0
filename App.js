import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import {MARKERS_DATA} from './Data/Markers_Data';
import { mapStyle } from './assets/Style/mapStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function App(){
   return (
      <View style={styles.container}>
        <MapView
        followsUserLocation
          style ={mapStyle}
          customMapStyle = {mapStyle}
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          showsUserLocation
          initialRegion={{
            latitude: 41.3995345,
            longitude: 2.1909796,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
            }
          }
        >
          {MARKERS_DATA.map((marker) => (
            <TouchableOpacity>
              <Marker
                description={marker.descriptio}
                key={marker.id}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                  }
                }
              ></Marker>
            </TouchableOpacity>
          ))}
        </MapView>
      </View>
  );
}

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

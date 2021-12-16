import React from 'react';
import { Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import {MARKERS_DATA} from '../Data/Markers_Data';

class CustomMarker extends React.Component{


    render(){
        return (
            <View>
                {MARKERS_DATA.map((marker) => (
                    <Marker
                        key={marker.id}
                        title={marker.title}
                        description = {marker.description}
                        pinColor = {marker.color}
                        //icon={require('../assets/iconMarker.png')}
                        coordinate={{
                            latitude:marker.latitude,
                            longitude : marker.longitude,
                        }}
                        
                                                
                    ></Marker>
                ))}
            </View>       
        )
    }
}

export default CustomMarker

const styles = StyleSheet.create({
    markerWrapper: {
      height: 50,
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    marker: {
      height: 22,
      width: 22,
      borderRadius: 20,
      borderColor: 'white',
      borderWidth: 2,
    },
  });
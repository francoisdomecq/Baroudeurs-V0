import React from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import {MARKERS_DATA} from '../Data/Markers_Data';
import { mapStyle } from '../assets/Style/mapStyle';


class Map extends React.Component{
    render(){
        return(
            <View>
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
                <Marker
                    description={marker.description}
                    key={marker.id}
                    coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                    }}
                ></Marker>              
                ))}
              </MapView>
            </View>
        )
    }
}

export default Map

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
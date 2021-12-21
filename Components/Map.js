import React from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import {MARKERS_DATA} from '../Data/Markers_Data';
import { mapStyle } from '../assets/Style/mapStyle';
import CustomMaker from './CustomMarker';


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
                    latitude: 44.8414563,
                    longitude: -0.570378,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                    }
                    }
                >
                <CustomMaker/>
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
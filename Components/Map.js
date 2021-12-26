import React from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import {MARKERS_DATA} from '../Data/Markers_Data';
import { mapStyle } from '../assets/Style/mapStyle';
import CustomMaker from './CustomMarker';


class Map extends React.Component{
    state = {
      coordinate : [
        latitude= 44.8414563,
        longitude= -0.570378,
      ]
    }
    render(){
        return(
            <View>
              {/*{console.log(this.state.coordinate)}*/}
                <MapView
                    ref={ref => { this.map = ref }}
                    customMapStyle = {mapStyle}
                    provider={PROVIDER_GOOGLE}
                    style={styles.mapStyle}
                    
                    /*onLayout={() => {
                      this.map.animateToBearing(220);
                      this.map.animateCamera({
                        center: {
                          latitude: 44.8414563,
                          longitude: -0.570378,
                         },
                        pitch:90,
                        zoom :18,
                        heading: 20
                      });
                    }}*/

                    onUserLocationChange={(user)=>
                      //this.setState(
                        //</View>{coordinate : user.nativeEvent.coordinate}
                      //)
                      
                      this.map.animateCamera({
                        center: {
                          latitude: user.nativeEvent.coordinate.latitude,
                          longitude: user.nativeEvent.coordinate.longitude,
                         },
                        pitch:90,
                        zoom :18,
                        heading: user.nativeEvent.coordinate.heading
                      })
                    }  
                    showsUserLocation
                    showsMyLocationButton={true}
                    
                    zoomEnabled={false}
                    pitchEnabled={false}

                    initalRegion = {{
                      latitude: 44.8414563,
                      longitude: -0.570378,

                    }}
                    
                   
                   
                   
                    
                    
                    
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
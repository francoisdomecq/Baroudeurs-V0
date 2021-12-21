import React from 'react';
import { Callout, Marker} from 'react-native-maps';
import { StyleSheet, View,Text ,Image} from 'react-native';
import {MARKERS_DATA} from '../Data/Markers_Data';
import FicheDescriptive from './FicheDescriptive';

class CustomMarker extends React.Component{


    render(){
        return (
            <View>
                {MARKERS_DATA.map((marker) => (
                    <Marker
                        key={marker.id}
                        
                        pinColor = {marker.color}
                        //icon={require('../assets/iconMarker.png')}
                        coordinate={{
                            latitude:marker.latitude,
                            longitude : marker.longitude,
                        }}
                        onPress={() => console.log("pressed")}                    
                    >
                        <Callout tooltip>
                            {FicheDescriptive(marker)}
                        </Callout>
                    </Marker>
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
    tinyLogo: {
        width: 50,
        height: 50,
    },
    ficheDescriptive:{
        flexDirection:'column',
        alignSelf:'flex-start',
        backgroundColor:'#fff',
        borderRadius:6,
        borderLeftColor:'#ccc',
    },
    name:{
        fontSize:16,
        marginBottom:5,
    }
  });
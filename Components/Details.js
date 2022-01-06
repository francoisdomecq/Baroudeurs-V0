import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { MARKERS_DETAILS } from '../Data/Marker_Details';



function Details({route,navigation}){ 
  const{marker}= route.params;
    return (
      
  <View>
          <View >
              <View>
                  <Text>{marker.name}</Text>
              </View>
              <View>
                  <Image
                      
                      source={marker.img}
                  ></Image>
              </View>
              <View>
                <Text>{marker.description} </Text>
              </View>
          </View>
      </View>
  )
}


export default Details



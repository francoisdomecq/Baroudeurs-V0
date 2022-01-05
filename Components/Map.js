import React from 'react';
import { TouchableOpacity, ScrollView, Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { THEMES } from '../Data/Themes';
import { mapStyle } from '../assets/Style/mapStyle';
import { mapStyleLight } from "../assets/Style/mapStyle_light";
import CustomMaker from './CustomMarker';

class Map extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      themeChoisi:""
    }

    super(props)
      this.state = {
        colormapdark:true
      }
  }
  _choixTheme(theme){
    console.log("ok")
    this.setState({themeChoisi: theme})
  }
  _modeSombre(){
        console.log(this.state.colormapdark)
        this.setState({colormapdark: (!this.state.colormapdark)});
      };

  render() {
    const { navigation } = this.props;
    return (
      <View>

        <Button
          title={this.state.colormapdark? "Désactiver le mode sombre" : "Activer le mode sombre"}
          color={this.state.colormapdark? "gray" : "#f8c967"}
          onPress={() => this._modeSombre()}
        />
        <MapView
          ref={ref => { this.map = ref }}
          customMapStyle={this.state.colormapdark ? mapStyle : mapStyleLight}
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}

          onLayout={() => {
            this.map.animateToBearing(220);
            this.map.animateCamera({
              center: {
                latitude: 44.8414563,
                longitude: -0.570378,
              },
              pitch: 90,
              zoom: 18,
              heading: 20
            });
          }}
          /*onUserLocationChange={(user) =>
            this.map.animateCamera({
              center: {
                latitude: 44.8414563,//user.nativeEvent.coordinate.latitude,
                longitude: -0.570378//user.nativeEvent.coordinate.longitude,
              },
              pitch: 90,
              zoom: 18,
              heading: user.nativeEvent.coordinate.heading
            })
          }*/
          showsUserLocation

        //zoomEnabled={false}
        //pitchEnabled={false}
        >

          <CustomMaker navigation={navigation} />

        </MapView>
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          height={50}
          style={styles.scrollview}
        >
          {THEMES.map((themes) => (

            <TouchableOpacity
              test={this.state.themeChoisi}
              theme={themes.name}
              style={styles.itemsTheme}
              onPress={() => this._choixTheme(themes.name)}
            >
              <Text>{themes.name}</Text>
            </TouchableOpacity>

          ))

          }

        </ScrollView>

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
  scrollview: {
    position: 'absolute',
    paddingHorizontal: 10,
    top: 10,
  },
  itemsTheme: {
    flexDirection: "row",
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 0,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 22,
  }
});

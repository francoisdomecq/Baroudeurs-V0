import React from 'react';
import { TouchableOpacity, ScrollView, Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { THEMES } from '../Data/Themes';
import { mapStyle } from '../assets/Style/mapStyle';
import { mapStyleLight } from "../assets/Style/mapStyle_light";
import CustomMaker from './CustomMarker';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      themeChoisi: "",
      colormapdark: true
    }
  }
  _choixTheme(theme) {
    this.setState({ themeChoisi: theme })
  }
  _modeSombre() {
    this.setState({ colormapdark: (!this.state.colormapdark) });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerTheme}>
          <TouchableOpacity
            style={styles.theme}
            color={this.state.colormapdark ? "gray" : "#f8c967"}
            //Lors du clic, l'utilisateur appelle la fonction _modeSombre qui modifie le state de colormapdark pour afficher la carte en clair ou en sombre selon l'état précédent
            onPress={() => this._modeSombre()}
          >
            <Text>{this.state.colormapdark ? "Désactiver le mode sombre" : "Activer le mode sombre"}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <MapView
            ref={ref => { this.map = ref }}
            //Selon le state de colormapdark, la carte est affichée en clair ou en dark
            customMapStyle={this.state.colormapdark ? mapStyle : mapStyleLight}
            //Cette ligne de code nous permet d'utiliser la carte Google Maps et ce même sur IOS
            provider={PROVIDER_GOOGLE}
            style={styles.mapStyle}

            /*onLayout={() => {
              //this.map.animateToBearing(220);
              this.map.animateCamera({
                center: {
                  latitude: 44.8414563,
                  longitude: -0.570378,
                },
                pitch: 90,
                zoom: 15,
                heading: 20
              });
            }}*/


            //Fonction qui permet de récupérer et d'actualiser les coordoonnées du joueur. 
            onUserLocationChange={(user) =>
              //On déplace la caméra du joueur vers ses coordoonées (latitude, longitude)
              this.map.animateCamera({
                center: {
                  //Ici on récupère les coordonnées du joueur 
                  latitude: user.nativeEvent.coordinate.latitude,
                  longitude: user.nativeEvent.coordinate.longitude,
                },
                //Angle d'affichage de la caméra (de biais)
                pitch: 90,
                //Zoom d'affichage
                zoom: 18,
                //La direction d'affichage est la même que celle du joueur 
                heading: user.nativeEvent.coordinate.heading
              })
            }
            //Cette fonction permet d'afficher la position du joueur sous la forme d'un petit marqueur
            showsUserLocation

            //On empêche au joueur de zoomer/dézoomer 
            zoomEnabled={false}
            //Le joueur ne peut pas modifier l'angle de la caméra
            pitchEnabled={false}
          >
            {
              //On appelle ici notre component CustomMarker qui affiche les points d'interet sur la carte en lui faisant passer les props navigation et themeChoisi
            }
            <CustomMaker navigation={navigation} theme={this.state.themeChoisi} />

          </MapView>
        </View>
        {
          //On crée un component ScrollView pour créer une liste horizontale scrollable avec nos différents thèmes dessus
        }
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          height={50}
          style={styles.scrollview}
        >
          { //On récupère ici les différents thèmes que nous avons défini dans Themes.js
            THEMES.map((themes) => (
              // Un component TouchableOpacity permet à l'utilisateur de cliquer dessus et de lancer un event suite au clic
              <TouchableOpacity
                key={themes.id}
                style={styles.itemsTheme}
                //Ici l'event lorsque l'utilisateur clique sur un thème et que l'on appelle la fonction _choixTheme qui actualise le state de themeChoisi
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
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  scrollview: {
    position: 'absolute',
    paddingHorizontal: 10,
    top: 50,
  },
  itemsTheme: {
    flexDirection: "row",
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 0,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 22,
  },
  container: {
    backgroundColor: 'transparent'

  },
  containerTheme: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#fff',
    width: 200,
    height: 43,
    borderRadius: 20
  },
  theme: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    height: 35,
    width: 200,
    borderRadius: 20,

  },

});

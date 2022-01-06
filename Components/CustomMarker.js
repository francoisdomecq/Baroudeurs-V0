import React from 'react';
import { Callout, CalloutSubview, Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { MARKERS_DATA } from '../Data/Markers_Data';
import FicheDescriptive from './FicheDescriptive';

//Ce custom component représente notre classe Point Interet et nous permet d'afficher nos différents points d'intérêts sur la carte
class CustomMarker extends React.Component {
    render() {
        //On récupère ici les props passées par le component Map
        const { navigation, theme } = this.props;
        {
            //Si jamais l'utilisateur n'a sélectionné aucun thème, on affiche tous les marqueurs
            if (theme == "") {
                return (
                    <View >
                        {
                            //On récupère ci-dessous les informations de nos différents marqueurs stockées dans le fichier MARKERS_DATA et on affiche chaque marqueur
                        }
                        {MARKERS_DATA.map((marker) => (
                            <Marker
                                //On attribue une key à chaque marqueur
                                key={marker.id}
                                //On modifie les marqueurs avec les images que nous leurs avons donné
                                icon={marker.imgmarker}
                                //On définit ici les coordonnées où le marqueur doit être affiché
                                coordinate={{
                                    latitude: marker.latitude,
                                    longitude: marker.longitude,
                                }}
                            >
                                {
                                    //Les components Callout sont propres au component propre, ils permettent de la même manière qu'un component touchableopacity de gérer les clics sur les marqueurs
                                }
                                <Callout tooltip>
                                    {
                                        //Le component calloutSubview permet de gérer les cas où l'utilisateur clique sur ce qui s'affiche après le premier clic sur le marqueur. Ici lors du premier clic
                                        //la fiche descriptive du point d'intérêt est affichée. Il peut de nouveau cliquer dessus et ainsi être redirigé vers la page détaillée du point d'intérêt
                                    }
                                    <CalloutSubview onPress={() => {
                                        navigation.navigate('Details', { marker: marker });
                                    }
                                    }
                                    >
                                        {FicheDescriptive(marker)}

                                    </CalloutSubview>

                                </Callout>
                            </Marker>
                        ))}
                    </View>
                )
            }
            //Si jamais l'utilisateur a sélectionné un thème, alors nous affichons uniquement les points d'intérêt ayant le même thème
            //Cependant cette fonctionnalité ne marche pas tout à fait. En effet, lorsque l'utilisateur choisit un thème, il faut forcer l'application à se render une deuxième fois pour
            //que les points d'intérêts avec le thème sélectionné soient affichés
            else {
                return (
                    <View >
                        {MARKERS_DATA.map((marker) => (
                            //Ci-dessous se trouve la ligne de code qui permet d'afficher uniquement les points d'intérêt avec un certain thème
                            marker.theme != this.props.theme ? (null) :
                                <Marker
                                    key={marker.id}
                                    //pinColor = {marker.color}
                                    icon={marker.imgmarker}
                                    coordinate={{
                                        latitude: marker.latitude,
                                        longitude: marker.longitude,
                                    }}
                                >
                                    <Callout tooltip>
                                        <CalloutSubview onPress={() => {
                                            navigation.navigate('Details', { marker: marker });
                                        }
                                        }
                                        >
                                            {FicheDescriptive(marker)}

                                        </CalloutSubview>

                                    </Callout>
                                </Marker>
                        ))}
                    </View>
                )

            }
        }
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
    ficheDescriptive: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderLeftColor: '#ccc',
    },
    name: {
        fontSize: 16,
        marginBottom: 5,
    }
});

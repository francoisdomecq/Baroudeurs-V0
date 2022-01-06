import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';

//Cette fonction affiche les détails d'un point d'intérêt lorsque l'utilisateur sur la fiche descriptive
function Details({ route, navigation }) {
    const { marker } = route.params;
    return (

        <View>
            <View style={styles.detail}>
                <View>
                    <Text style={styles.name}>{marker.name}</Text>
                </View>
                <View style={styles.containerImage}>
                    <Image
                        style={styles.image}
                        source={marker.img}
                    ></Image>
                </View>
                <View style={styles.containerDescription} >
                    <Text style={styles.title}>Histoire</Text>
                    <Text style={styles.description}>{marker.histoire} </Text>
                </View>
            </View>
        </View>
    )
}



export default Details

const styles = StyleSheet.create({
    detail: {
        textAlign: 'center',
        flexDirection: 'column'
    },
    name: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },

    containerImage: {
        marginVertical: 10,
        alignItems: 'center',

    },
    title: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',

    },
    image: {
        width: 300,
        height: 220
    },

});



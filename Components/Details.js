import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { MARKERS_DETAILS } from '../Data/Marker_Details';


function Details(markers) {
    return (
        <View>

            {MARKERS_DETAILS.map((markers) => (

                <View>
                    <View style={styles.ficheDescriptive}>
                        <View style={styles.title}>
                            <Text style={styles.name}>{markers.name}</Text>
                        </View>
                        <View style={styles.containerImage}>
                            <Image
                                style={styles.image}
                                source={markers.img}
                            ></Image>
                        </View>
                        <View style={styles.containerDescription}>
                            <Text style={styles.description} numberOfLines={3}>{markers.description} </Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}




export default Details


const styles = StyleSheet.create({
    Details: {
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderLeftColor: '#ccc',
        width: 350,
    },

    title: {
        flex: 1,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 3,
    },
    name: {
        textAlign: 'center',
        fontSize: 22,
    },

    containerImage: {
        flex: 1,
        marginVertical: 20,
        alignItems: 'center'

    },
    image: {
        flex: 1,
    },
    containerDescription: {
        marginBottom: 20
    },
    description: {
        flexWrap: 'wrap',
    },
});



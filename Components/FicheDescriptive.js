import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import markers from '../Data/Markers_Data'

function FicheDescriptive (markers){
        return(
            <View>
                <View style={styles.ficheDescriptive}>
                    <Text style={styles.name}>{markers.name}</Text>
                        <Image
                            style={styles.tinyLogo}
                                source={require('../assets/iconMarker.png')}
                       ></Image>
                    <Text>{markers.description}</Text>
                    
                </View>
            </View>
        )
}

export default FicheDescriptive

const styles = StyleSheet.create({
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

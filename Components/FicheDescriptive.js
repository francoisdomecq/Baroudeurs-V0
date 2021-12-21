import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import markers from '../Data/Markers_Data'

function FicheDescriptive (markers){
    var chemin = markers.img
        return(
            <View>
                <View style={styles.ficheDescriptive}>
                    <View style={styles.title}>
                        <Text style={styles.name}>{markers.name}</Text>
                    </View>
                    <View style={styles.containerImage}>
                        <Image
                            style={styles.image}
                            source={chemin}
                            
                        ></Image>
                    </View>
                    <View styles={styles.containerDescription}>
                        <Text style = {styles.description} numberOfLines={3}>{markers.description} </Text>
                    </View>
                    
                    
                </View>
            </View>
        )
}

export default FicheDescriptive

const styles = StyleSheet.create({
    ficheDescriptive:{
        alignSelf:'flex-start',
        backgroundColor:'#fff',
        borderRadius:6,
        borderLeftColor:'#ccc',
        width : 350,
        },

    title:{
        flex:1,
        borderColor : '#000',
        borderWidth : 1,
        borderRadius : 3,  
    },
    name:{
        textAlign : 'center',
        fontSize:22,
    },
    
    containerImage:{
        flex:1,
        marginVertical:20,
        alignItems:'center'

    },
    image: {
        flex:1,
    },
    containerDescription:{
        marginBottom:20
    },
    description:{
        flexWrap:'wrap',
    },
});

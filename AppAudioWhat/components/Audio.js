import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import SoundPlayer from 'react-native-sound-player'
import estilos from '../styles/estilos'

class Audio extends Component {
    
    state = {  }
    render() { 
        // try {
        //     // play the file tone.mp3
        //     SoundPlayer.playSoundFile('tone', 'mp3')
        //     // or play from url
        //     SoundPlayer.playUrl('https://example.com/music.mp3')
        // } catch (e) {
        //     console.log(`cannot play the sound file`, e)
        // }

        return ( 
            
            <View style={estilos.styles.container}>
                <Text>Hola soy un componente</Text>
            </View>
         );
    }
}
 
// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#e5e5e5',
//     },
// });

export default Audio;
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Audio} from 'expo';

class AudioReproductor extends Component {
    state = {}
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.textos}>Hola Mundo!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: "#b5b5b5"
    },
    textos:{
        color: "green",
        fontSize: 20,
        fontStyle: "italic"
    }
});

export default AudioReproductor;
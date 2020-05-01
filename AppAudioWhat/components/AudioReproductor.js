import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

class AudioReproductor extends Component {
    constructor(props) {
        super(props);

        this.playbackObject = new Audio.Sound();
    }

    btnStopPlayerClicked = async () => {
        await this.playbackObject.stopAsync();

    }

    btnReplayPlayerClicked = async () => {
        await this.playbackObject.replayAsync();
    }

    btnPlayerClicked = async () => {
        await this.playbackObject.playAsync();
    }

    btnAudioClicked = async () => {
        await this.playbackObject.loadAsync(require('../audios/eco.mp3'));
    }

    btnPausePlayerClicked = async () => {
        await this.playbackObject.pauseAsync();
    }


    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textos}>Reproducir Audio</Text>
                
                <TouchableOpacity style={styles.botones} onPress={this.btnAudioClicked}>
                    <Text>Música  <FontAwesome name="music" size={20}></FontAwesome ></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botones} onPress={this.btnPlayerClicked}>
                    <Text>Play  <FontAwesome name="play-circle" size={20}></FontAwesome ></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botones} onPress={this.btnStopPlayerClicked}>
                    <Text>Stop  <FontAwesome name="stop-circle" size={20}></FontAwesome ></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botones} onPress={this.btnReplayPlayerClicked}>
                    <Text>Replay  <FontAwesome name="repeat" size={20}></FontAwesome ></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botones} onPress={this.btnPausePlayerClicked}>
                    <Text>Pause <FontAwesome name="pause-circle" size={20}></FontAwesome ></Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#b5b5b5"
    },
    textos: {
        color: "green",
        fontSize: 20,
        fontStyle: "italic"
    }, botones: {
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 50,
        overflow: 'hidden',
        padding: 5,
        paddingHorizontal: 15,
        textAlign: 'center',
        margin: 5
    }
});

export default AudioReproductor;
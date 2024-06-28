
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

export default class Tela2 extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView>
                    <Text>Tela 2</Text>
                </SafeAreaView>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container:{
        flex:1,
    }

});
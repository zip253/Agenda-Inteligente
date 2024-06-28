
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

export default class Tela3 extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView>
                    <Text>Tela 3</Text>
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
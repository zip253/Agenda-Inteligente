
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';


function Tela1({navigation}){
    return(
        <View style={styles.container}>
                <SafeAreaView>
                    <View style={styles.styTitulo}>
                        <Text style={styles.txtTitulo}>Tela Inicial</Text>
                    </View>
                </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
    },

    styTitulo:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtTitulo:{
        fontWeight: 'bold',
        fontSize: 20,
        color: "red"
    },
});


export default Tela1;
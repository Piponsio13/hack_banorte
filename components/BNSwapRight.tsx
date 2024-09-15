import React from 'react';
import { Card, Button, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import {Image,TouchableHighlight } from "react-native";


export default function BNSwapRight() {
  return (
    <View style={{justifyContent:'center', height:'85%',width:'100%', backgroundColor: "#FFFFFF", borderRadius: 15}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../assets/images/mano_derecha.png')} style={{ width: '100%', height: '65%'}}/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
             <Text style={{textAlign: 'center',fontSize: 30, color: '#E11B1B'}}>Desliza a la derecha si es de tu agrado</Text>
        </View>
    </View>
  );
}


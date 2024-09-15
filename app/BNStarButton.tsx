import React from 'react';
import { Card, Button, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import {Image,TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StrictMode } from 'react';

export default function BNStarButton() {
  const nav = useNavigation();
  return (
    <View style={{justifyContent:'flex-end', height:'85%',width:'100%', backgroundColor: "#FFFFFF", borderRadius: 15}}>
        <View style={{margin: 20, height: '10%', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ color: "red", fontSize: 30, textAlign: "center"}}>TAMBIEN PUEDES UTILIZAR EL BOTON ESTRELLA, SI CONECTAS CON UNA TARJETA INMEDIATAMENTE</Text>
        </View>

        <View style={{justifyContent: "center", alignItems: 'center'}}>
            <Image source={require('../assets/images/MANITA_ABAJO.png')} style={{ width: 100, height: 100}}/>
            <Button
                icon="star-circle-outline"
                labelStyle={{ fontSize: 90, color: "#FF0000", }}
                style={{ backgroundColor: "#FFFFFF",width:100}}
                onPress={() => nav.navigate("BNCard")}
            />
        </View>
    </View>
  );
}

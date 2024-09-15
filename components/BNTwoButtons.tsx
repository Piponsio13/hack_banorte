import React from 'react';
import { Card, Button, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import {Image,TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StrictMode } from 'react';


export default function BNTwoButtons({indice, setIndice}) {
  return (
    <View style={{justifyContent:'flex-end', height:'85%',width:'100%', backgroundColor: "#FFFFFF", borderRadius: 15}}>
        <View style={{margin: 20, height: '50%', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ color: "red", fontSize: 30, textAlign: "center"}}>TAMBIEN PUEDES UTILIZAR LOS BOTONES DE LA PARTE INFERIOR</Text>
        </View>

        <View style={{justifyContent: "space-between", flexDirection:'row'}}>
            <View>
                <Image source={require('../assets/images/MANITA_ABAJO.png')} style={{ width: 100, height: 100}}/>
                <Button onPress={()=>setIndice(indice + 1)} icon="alpha-x-circle-outline" labelStyle={{ fontSize: 90, color: "#FF0000", }} style={{ backgroundColor: "#FFFFFF",width:100}}></Button>
            </View>
            <View>
                <Image source={require('../assets/images/MANITA_ABAJO.png')} style={{ width: 100, height: 100}}/>
                <Button
                    icon="check-circle-outline"
                    labelStyle={{ fontSize: 90, color: "#FF0000", }}
                    style={{ backgroundColor: "#FFFFFF",width:100} }
                    onPress={() => setIndice(indice + 1)}
                ></Button>
            </View>
        </View>
    </View>
  );
}

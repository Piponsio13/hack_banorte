import React from 'react';
import { Card, Button, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import {Image,TouchableHighlight } from "react-native";

interface BNCardProps {
  title: string;
  cardImage: any;
  description: string;
  benefits: string;
}

export default function BNCard({ title, cardImage, description, benefits }: BNCardProps) {
  return (
    <View style={{justifyContent:'center', height:'85%',width:'100%', backgroundColor: "#FFFFFF", borderRadius: 15}}>
        <View style={{width: '90%'}}>
        <Image source={require('../assets/images/banorteTarjetasCredito/Banorte40.png')} style={{ width: '110%'}}/>
        </View>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
            <Text style={{fontSize: 35, color: '#E11B1B'}}>Tarjeta Banorte 40</Text>
            <Text style={{textAlign: 'center',margin: 20, fontSize: 20, color: '#E11B1B'}}>Para ti, que con musica todo es mejor</Text>
        </View>
        <View style={{justifyContent:'space-between', flexDirection: 'row', justifyContent:'center', alignItems: 'center', width: '100%'}}>
            <Button
                icon="alpha-x-circle-outline"
                labelStyle={{ fontSize: 90, color: "#FF0000", }}
                style={{ backgroundColor: "#FFFFFF",width:100}}>
            </Button>
            <Button icon="star-circle-outline" labelStyle={{ fontSize: 90, color: "#FF0000", }}style={{ backgroundColor: "#FFFFFF" , width: 100}}/>
            <Button icon="check-circle-outline" labelStyle={{ fontSize: 90, color: "#FF0000", }}style={{ backgroundColor: "#FFFFFF" , width: 100}}/>
        </View>
    </View>
  );
}


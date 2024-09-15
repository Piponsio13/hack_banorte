import React from "react";
import { Text, Image, View, TouchableHighlight } from "react-native";
import { Avatar, Button, Card } from 'react-native-paper';
import styles from "../styles/HomeStyles"
import ListCards from "@/components/listCards";
import cardsData from "../cardData/cardData"
import { ScrollView } from "react-native";

export default function MatchCards({indice, setIndice}) {
      return (
        <View style={{ justifyContent: 'center', height: '85%', width: '100%', backgroundColor: '#FFFFFF', borderRadius: 15 }}>
          <ScrollView style={{ display: 'flex', flexDirection: 'column' }}>
            {cardsData.map((card, index) => (
              <ListCards
                key={index} // Asegura que cada elemento tenga una clave única
                imgPath={card.PathImg}
                title={card.nombreTarjeta}
              />
            ))}
          </ScrollView>
        </View>
      );
}
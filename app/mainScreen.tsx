import React from "react";
import { Text, Image, View, TouchableHighlight } from "react-native";
import { Avatar, Button, Card } from 'react-native-paper';
import styles from "../styles/HomeStyles"
import ListCards from "@/components/listCards";
import cardsData from "../cardData/cardData"
import { ScrollView } from "react-native";
export default function matchCards() {
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'flex-start', width: "90%" }}>


          <Image
            source={require('../assets/images/BanorteLogo.png')}
            style={{ width: 350, height: 50, margin: 'auto' }}
          />
          <View style={{ width: "100%", alignItems: 'center' }}>
            <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#FFF', paddingTop: 10 }}>TARJETAS SELECCIONADAS</Text>
          </View>
          <ScrollView style={{ display: 'flex', flexDirection: 'column' }}
          >
            {
              cardsData.map(card => {
                return (
                  <ListCards imgPath={(card.PathImg)} title={card.nombreTarjeta} />
                )
              })
            }
          </ScrollView>

        </View>
      </View>
    </>
  );
}
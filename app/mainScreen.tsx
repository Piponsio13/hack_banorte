import React from "react";
import { Text, Image, View, TouchableHighlight } from "react-native";
import { Avatar, Button, Card} from 'react-native-paper';
import BNCard from "../components/BNCard"
import styles from "../styles/HomeStyles"
import cardsData from "../cardData/cardData"

export default function MainScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'flex-start', width: "90%", height: '100%' }}>
          <View style={{height: '10%', alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../assets/images/BanorteLogo.png')}
              style={{ width: 350, height: 50, alignItems: 'center', justifyContent: 'center' }}
            />
          </View>
          <BNCard
            title={'Titulo'}
            cardImage={'../assets/images/BanorteLogo.png'}
            description={''}
            benefits={""}
          />
        </View>
      </View>
    </>
  );
}
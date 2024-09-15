import React, { useState } from "react";
import { Text, Image, View, TouchableHighlight } from "react-native";
import { Avatar, Button, Card} from 'react-native-paper';
import BNCard from "../components/BNCard"
import BNSwap from "../components/BNSwap"
import BNSwapRight from "../components/BNSwapRight"
import BNTwoButtons from "../components/BNTwoButtons"
import BNStarButton from "../components/BNStarButton"
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
          <BNTwoButtons />
        </View>
      </View>
    </>
  );
}
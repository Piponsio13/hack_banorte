import React from "react";
import { Text, Image, View, TouchableHighlight } from "react-native";
import { Avatar, Button, Card} from 'react-native-paper';
import BNCard from "../components/BNCard"
import styles from "../styles/HomeStyles"
import cardsData from "../cardData/cardData"
import BNTwoButtons from "../components/BNTwoButtons"
import BNSwap from "../components/BNSwap";
import BNSwapRight from "../components/BNSwapRight";
import BNStarButton from "../components/BNStarButton";
import MatchCards from "../components/matchCards"

import { useState } from 'react';

export default function MainScreen() {
    const[indice, setIndice] = useState(0);
    console.log(indice);


const renderComponent = () => {
    switch (indice) {
      case 0:
        return <BNSwap indice={indice} setIndice={setIndice}/>;
      case 1:
          return <BNSwapRight indice={indice} setIndice={setIndice}/>
      case 2:
          return <BNTwoButtons indice={indice} setIndice={setIndice}/>
      case 3:
          return <BNStarButton indice={indice} setIndice={setIndice}/>
      case 4:
          return <BNCard indice={indice} setIndice={setIndice}/>
      default:
        return null; // O un componente por defecto
    }
  };

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
          {renderComponent()}
        </View>
      </View>
    </>
  );
}
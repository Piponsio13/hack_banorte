import React from "react";
import { Text, Image, View, TouchableHighlight } from "react-native";
import { Avatar, Button, Card} from 'react-native-paper';
import BNCard from "../components/BNCard"
import styles from "../styles/HomeStyles"

export default function MainScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'flex-start', width: "90%" }}>
          <View>
          <Text style={{ lineHeight: 50 }}></Text>
          <Text style={{ lineHeight: 50 }}></Text>
            <Image
              source={require('../assets/images/BanorteLogo.png')}
              style={{ width: 350, height: 50 }}
            />
          </View>
          <BNCard
            title={'Titulo'}
            cardImage={'../assets/images/BanorteLogo.png'}
            description={'Pablo'}
            benefits={"Saaa"}
          />
        </View>
      </View>
    </>
  );
}
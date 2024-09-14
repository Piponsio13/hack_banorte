import React from "react";
import { Text, Image, View, TouchableHighlight } from "react-native";
import styles from "../styles/HomeStyles"

export default function MainScreen() {
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="#DDDDDD"
          onPress={() => alert('Pressed!')}
        >
          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <View >
            <Image
              source={require('../assets/images/BanorteLogo.png')}
              style={{ width: 350, height: 50 }}
            />
          </View>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
}
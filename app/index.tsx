import { Text, Image, View } from "react-native";
import styles from "../styles/HomeStyles"
import Test from "../components/test"
import { SwipeGesture } from "react-native-swipe-gesture-handler";
import React, { useState } from 'react';

export default function Index() {
    const [text, setText] = useState('TOCAR PARA INICIAR');
    const onSwipePerformed = (action) => {

          switch(action){
            case 'left':{
              setText('left Swipe performed');
              break;
            }
             case 'right':{
              setText('right Swipe performed');
              break;
            }
             case 'up':{
              setText('up Swipe performed');
              break;
            }
             case 'down':{
              setText('down Swipe performed');
              break;
            }
             default : {
             setText('Undeteceted action');
             }
          }
    }

  return (
      <>
        <View style={styles.container}>
            <Image source={require('../assets/images/BanorteLogo.png')} style={{ width: 300, height: 50 }}  />
            <Text style={{ lineHeight: 30 }}></Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    </>
  );
}

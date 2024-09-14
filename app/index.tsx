import { Text, Image, View } from "react-native";
import React, { useState } from 'react';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { event } from 'react-native-reanimated';

import styles from "../styles/HomeStyles";
import Test from "../components/test";

export default function Index() {
    const [text, setText] = useState('TOCAR PARA INICIAR');

    const onSwipePerformed = event([
        {
            nativeEvent: ({ translationX, translationY }) => {
                // Detect swipe direction
                if (Math.abs(translationX) > Math.abs(translationY)) {
                    if (translationX > 0) {
                        setText('right Swipe performed');
                    } else {
                        setText('left Swipe performed');
                    }
                } else {
                    if (translationY > 0) {
                        setText('down Swipe performed');
                    } else {
                        setText('up Swipe performed');
                    }
                }
            }
        }
    ]);

    return (
        <PanGestureHandler onGestureEvent={onSwipePerformed}>
            <Animated.View style={styles.container}>
                <Image source={require('../assets/images/BanorteLogo.png')} style={{ width: 300, height: 50 }} />
                <Text style={{ lineHeight: 30 }}></Text>
                <Text style={styles.text}>{text}</Text>
            </Animated.View>
        </PanGestureHandler>
    );
}

import { Text, Image, View, TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "../styles/HomeStyles"


export default function Index() {
  const nav = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="#DDDDDD"
          onPress={() => nav.navigate('mainScreen')}
        >
          <View >
            <Image
              source={require('../assets/images/BanorteLogo.png')}
              style={{ width: 350, height: 50 }}
            />
              <Text style={{ lineHeight: 30 }}></Text>
              <Text style={styles.text}>PRESIONA PARA INICIAR</Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
}


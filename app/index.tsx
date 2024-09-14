import { Text, Image, View, TouchableHighlight } from "react-native";
import styles from "../styles/HomeStyles"
import Test from "../components/test"



export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="#DDDDDD"
          onPress={() => alert('Pressed!')}
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

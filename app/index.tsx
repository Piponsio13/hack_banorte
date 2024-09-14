import { Text, Image, View } from "react-native";
import styles from "../styles/HomeStyles"
import Test from "../components/test"

export default function Index() {
  return (
      <>
        <View style={styles.container}>
            <Image source={require('../assets/images/BanorteLogo.png')} style={{ width: 300, height: 50 }}  />
            <Text style={{ lineHeight: 30 }}></Text>
            <Text style={styles.text}>TOCAR PARA INICIAR</Text>
        </View>
    </>
  );
}


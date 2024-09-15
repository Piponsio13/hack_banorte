import React from 'react';
import { Card, Text, Button } from 'react-native-paper';
import { Image, View } from 'react-native';
import styles from "../styles/HomeStyles";

// Definición del componente con las props
interface ListCardsProps {
  imgPath: string; // Ruta de imagen
  title: string;   // Título de la tarjeta
}

const ListCards: React.FC<ListCardsProps> = ({ imgPath, title }) => {
  return (
    <Card style={styles.listCard}>
      <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        {/* Usa un objeto estático para imágenes o `uri` si la imagen es remota */}
        <Image
          source={imgPath}  // Cambia `imgPath` por una ruta estática o un uri si es remoto
          style={{ width: 100, height: 100 }} // Ajusta el tamaño de la imagen con números en lugar de `calc()`
        />
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'red' }}>{title}</Text>
          <View style={{ margin: 15 }}>
            <Button
              icon="android-messages"
              labelStyle={{ color: "white", fontSize: 18 }}
              style={{ backgroundColor: 'red', margin: 3 }}
            >
              Chat
            </Button>
            <Button
              icon="phone"
              labelStyle={{ color: "white", fontSize: 18 }}
              style={{ backgroundColor: 'red', margin: 3 }}
            >
              Call
            </Button>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ListCards;
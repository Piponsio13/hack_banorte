
import { Avatar, Button, Card, Text, IconButton } from 'react-native-paper';
import styles from "../styles/HomeStyles"

export default function BNCard({ title, cardImage, description, benefits }){
    return(
      <Card style={styles.card}>
        <Card.Cover source={cardImage} />
        <Card.Title style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',}} title={title} />
        <Card.Content>
          <Text>{description}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            icon="alpha-x-circle-outline"
            contentStyle={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}
            labelStyle={{ fontSize: 96, color: "#FF0000", }}
            style={{ backgroundColor: "#FFFFFF" , width: 150}}></Button>
          <Button
            icon="star-circle-outline"
            contentStyle={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            labelStyle={{ fontSize: 96, color: "#FF0000", }}
            style={{ backgroundColor: "#FFFFFF" , width: 150}}
          >
          <Button>Ok</Button>
          </Button>
        </Card.Actions>
      </Card>
    );
}
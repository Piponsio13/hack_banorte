import React from 'react';
import { Card, Text, Button } from 'react-native-paper';
import styles from "../styles/HomeStyles";
import { Image } from 'react-native';

// Define the component with an uppercase name
interface ListCardsProps {
    imgPath: string;
    title: string;
}

const ListCards: React.FC<ListCardsProps> = ({ imgPath, title }) => {

    return (
        <Card style={styles.listCard}>

            <Card.Content style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, flexWrap: 'wrap' }}>
                <img src={imgPath} style={{ width: 'calc(100vh-30%)' }}></img>
                <view style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'red' }}>{title}</Text>
                    <view style={{ display: 'flex', margin: 15 }}>
                        <Button icon={'android-messages'} labelStyle={{ color: "white", fontSize: 32, padding: 3 }} style={{ backgroundColor: 'red', margin: 3 }}>Chat</Button>
                        <Button icon={'phone'} labelStyle={{ color: "white", fontSize: 32, padding: 3 }} style={{ backgroundColor: 'red', margin: 3 }}>Call</Button>
                    </view>

                </view>
            </Card.Content>

        </Card>
    );
};

export default ListCards;
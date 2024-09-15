import { Avatar, Button, Card, Text} from 'react-native-paper';
import { Image } from 'react-native';
import { View, TextInput} from 'react-native';
import { ScrollView } from 'react-native';


export default function BNChatCard({ title, cardImage }: { title: string, cardImage: string }) {
    return (
        <View style={{justifyContent:'space-between',height: '85%', width:'100%', backgroundColor:"#FFFFFF", borderRadius: 15}}>
            <View style={{marginTop:10, flexDirection: 'row', justifyContent: 'center', alignContent:'center', alignItems:'center'}}>
                <Image style={{width:150, height:100}} source={require('../assets/images/banorteTarjetasCredito/Banorte40.png')}/>
                <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10}}>Clasica</Text>
            </View>
            <View style={{marginTop:10, flexDirection: 'row', justifyContent: 'center', alignContent:'center', alignItems:'center'}}>
            </View>

            <ScrollView style={{flexDirection: 'row', alignContent:'center'}}>
                <Card style={{width: '60%', margin: 10, borderRadius: 15, elevation: 4}}>
                    <Card.Content>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>¡Hola! Soy la Asistente Virtual de Banorte. 😀</Text>
                    </Card.Content>
                </Card>

                <Card style={{width: '60%', margin: 10, borderRadius: 15, elevation: 4}}>
                    <Card.Content>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Veo que estas interesado en la tarjeta 40 Clasica 😊.</Text>
                    </Card.Content>
                </Card>

                <Card style={{width: '60%', margin: 10, borderRadius: 15, elevation: 4}}>
                    <Card.Content>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>¿Te gustaría saber más? 😇</Text>
                    </Card.Content>
                </Card>

                <Card style={{backgroundColor:'#eb002b',marginLeft:'26%' ,width: '40%', margin: 10, borderRadius: 15, elevation: 4}}>
                    <Card.Content>
                        <Text style={{color:'white', fontSize: 14, fontWeight: 'bold'}}> ¿Cuáles son los ingresos que necesito para tramitar una Tarjeta de Crédito 40?</Text>
                    </Card.Content>
                </Card>

                <Card style={{width: '60%', margin: 10, borderRadius: 15, elevation: 4}}>
                    <Card.Content>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Necesitas un ingreso mínimo comprobable de $7,000 pesos mensuales. 🥰 </Text>
                    </Card.Content>
                </Card>
            </ScrollView>

            <View style={{display: 'flex', flexDirection:'row', justifyContent:'space-evenly', margin:20}}>
                <TextInput  style={{width:'75%', borderBlockColor:'black', borderWidth:2, borderRadius:15}} placeholder="Escribe algo aquí..."/>
                <Button icon="send" style={{borderRadius: 15, width:'20%', backgroundColor: '#eb0029'}} mode="contained" onPress={() => console.log("fin del demo")}></Button>
            </View>
        </View> 
    );
}

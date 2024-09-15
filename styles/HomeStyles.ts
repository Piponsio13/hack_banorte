import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eb0029',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 32,
    },
    card: {
        flex: 1,
        marginVertical: 40,
        borderRadius: 15,
        elevation: 4,
        backgroundColor: "#FFFFFF"
    },
    listCard: {
        display: 'flex',
        width: '95%',
        margin: 20,
        flexDirection: 'column'
    }
});

export default styles;

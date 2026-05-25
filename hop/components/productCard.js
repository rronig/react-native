import { StatusBar } from 'expo-status-bar';
import { NativeEventEmitter } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const StudentCard = (props) =>{
    return(
        <View style ={styles.card}>
            <Text style={styles.text}>Name: {props.name} </Text>
            <Text style={styles.text}>Category: {props.category} </Text>
            <Text style={styles.text}>Price: ${props.price.toFixed(2)} </Text>
            <Text style={styles.text}>Stock: {props.stock} </Text>
            <Text style={styles.text}>Description: {props.description} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        margin: 10,
        backgroundColor: "#AACDDC",
        borderRadius: 10
    },
    text: {
        fontSize: 16
    }
});


export default StudentCard;
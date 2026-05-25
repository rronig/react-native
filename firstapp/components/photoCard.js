import { StatusBar } from 'expo-status-bar';
import { NativeEventEmitter } from 'react-native';
import { StyleSheet, Text, Image, View } from 'react-native';

const PhotoCard = (props) =>{
    return(
        <View style ={styles.card}>
            <Text style={styles.text}>Album ID: {props.albumId} </Text>
            <Text style={styles.text}>ID: {props.id} </Text>
            <Text style={styles.text}>Title: {props.title} </Text>
            <Image source={{ uri: props.url }} style={styles.image} />
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


export default PhotoCard;
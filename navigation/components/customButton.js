import React from "react";
import { TouchableOpacity, Text, StyleSheet} from "react-native";

export default function CustomButton({ title, onPress }) {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3498db',
        padding: 15,
        marginTop: 15,
        borderRadius: 10,
        width: 220,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
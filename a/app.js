import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Image Carousel</Text>
            <Swiper style={styles.wrapper} autoplay autoplayTimeout={3000} activeDotColor="#FF6347">
                <View style={styles.slide}>
                    <Image source={{ uri: 'https://placeimg.com/640/480/nature' }} style={styles.image} />
                    <Text style={styles.text}>Nature</Text>
                </View>
                <View style={styles.slide}>
                    <Image source={{ uri: 'https://placeimg.com/640/480/architecture' }} style={styles.image} />
                    <Text style={styles.text}>Architecture</Text>
                </View>
                <View style={styles.slide}>
                    <Image source={{ uri: 'https://placeimg.com/640/480/animals' }} style={styles.image} />
                    <Text style={styles.text}>Animals</Text>
                </View>
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
    },
    title: {
        fontSize: 28,
        color: '#a6a6a6',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    wrapper: {
        height: 250,
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width - 40,
        height: 200,
        borderRadius: 10,
    },
    text: {
        marginTop: 10,
        fontSize: 18,
    },
});
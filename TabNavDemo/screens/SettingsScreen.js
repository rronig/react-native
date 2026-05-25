import { Stylesheet, Text, View } from 'react-native-web';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings Screen</Text>
            <Text style={styles.description}>Welcome to your settings screen!</Text>
        </View>
    );
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b0e4cc',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#285a48',
    },
    description: {
        fontSize: 16,
        color: '#285a48',
        marginTop: 8,
    },
});
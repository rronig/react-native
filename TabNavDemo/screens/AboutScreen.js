import { Stylesheet, Text, View } from 'react-native-web';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>ℹ️</Text>
            <Text style={styles.title}>About Screen</Text>
            <Text style={styles.description}>This is the about screen of our application!{'\n'} ot has no tab bar</Text>
        </View>
    );
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f0ff',
    },
    emoji: {
        fontSize: 60,
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2a1a4e',
    },
    description: {
        fontSize: 15,
        color: '#666',
        marginTop: 10,
        textAlign: 'center',
        lineHeight: 24,
    },
});
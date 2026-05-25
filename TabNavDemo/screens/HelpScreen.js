import {View, Text, Stylesheet} from 'react-native-web';

export default function HelpScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>❓</Text>
            <Text style={styles.title}>Help Screen</Text>
            <Text style={styles.description}>This is the help screen of our application!{'\n'} It has no tab bar</Text>
        </View>
    );
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff5e0',
    },
    emoji: {
        fontSize: 60,
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3d2200',
    },
    description: {
        fontSize: 15,
        color: '#666',
        marginTop: 10,
        textAlign: 'center',
        lineHeight: 24,
    },
});
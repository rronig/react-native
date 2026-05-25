import { StyleSheet, Text, View, FlatList } from "react-native";
const StudentProfile = (props) => {
    let fullName = props.first_name + " " + props.last_name;

    return (
        <View style={styles.container}>
            <Text>{fullName}</Text>
            <Text>{props.email}</Text>
            <Text>{props.birthdate}</Text>
            <Text>Hobbies:</Text>

            {props.hobbies.map((hobby, index) => (
                <Text key={index}>{hobby}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }
});
export default StudentProfile;
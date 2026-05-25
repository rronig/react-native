import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomButton from "../components/customButton";
export default function DetailsScreen({ navigation, route }){
    const {userName, course} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            <Text style={styles.info}>User: {userName}</Text>
            <Text style={styles.info}>Course: {course}</Text>
            <CustomButton
                title="Go Back"
                onPress={() =>
                  navigation.goBack()
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold"
  }, 
  info: {
    fontSize: 20,
    marginTop: 10,
  },
})
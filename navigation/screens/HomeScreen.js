import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomButton from "../components/customButton";
export default function HomeScreen({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>Welcome to the Home Screen!</Text>
      <CustomButton
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {userName: "John Doe", course: "React Native"})
        }
      />
      <CustomButton
        title="Go to About"
        onPress={() =>
          navigation.navigate("About")
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
    backgroundColor: "#f5f5f5",
    padding:20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold"
  }, 
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: "gray"
  },
})
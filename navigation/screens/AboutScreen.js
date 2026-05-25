import React from "react";
import { View, StyleSheet, Text } from "react-native";
export default function AboutScreen(){
  return (
    <View style={styles.container}>
        <Text style={styles.title}>About Screen</Text>
        <Text style={styles.description}>This is a simple React Native app demonstrating navigation between screens using React Navigation.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding:20
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold"
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 28
  }
})
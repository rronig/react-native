import React, {useState, useEffect} from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Header from "../components/header";
import PhotoCard from "../components/photoCard";
import CustomButton from "../components/customButton";
const ChallengeScreen = ({ navigation }) => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setPhotos(fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => console.log(json)));
        setLoading(false);
    }, []);
    if (loading) {
        return (
            <View style={styles.container}>
                <Header />
                <CustomButton title="Loading..." disabled />
            </View>
        );
    }
    return (
        <View style={styles.container}>

      <Header />

      <View style={styles.buttonRow}>
        <CustomButton title="Add"/>
        <CustomButton title="Delete"/>
      </View>

      <CustomButton
        title="Go to Profile"
        onPress={() =>
          navigation.navigate("Profile", {
            name: "John Doe",
            course: "Computer Science",
          })
        }
      />

      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PhotoCard name={item.name} course={item.course} age={item.age} />
        )}
      />
    </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 10,
    },
  });

export default ChallengeScreen;
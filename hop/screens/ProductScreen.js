import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Header from "../components/header";
import ProductCard from "../components/productCard";
import CustomButton from "../components/customButton";
import productData from "../data/product.json";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true
    };
  }

  componentDidMount() {
    this.setState({
      products: productData.products,
      loading: false
    });
  }

  render() {
    const { navigation } = this.props;
    const { products, loading } = this.state;
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
          <CustomButton title="Add" />
          <CustomButton title="Delete" />
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
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard name={item.name} category={item.category} price={item.price} stock={item.stock} description={item.description} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  
})

export default HomeScreen;


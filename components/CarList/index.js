import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CarItem from "../CarItem";
import cars from "./cars";
import styles from "./styles";

const CartList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        snapToAlignment="start"
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height}
        renderItem={({ item }) => (
          <CarItem
            key={item.name}
            name={item.name}
            tagLine={item.tagline}
            tagLineCTA={item.taglineCTA}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

export default CartList;

import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <StyledButton type="primary" text={"Custom Order"} onPress={() => {}} />
      <StyledButton
        type="secondary"
        text={"Existing Inventory"}
        onPress={() => {}}
      />
    </View>
  );
};

export default CarItem;

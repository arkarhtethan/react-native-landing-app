import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = ({ name, tagLine, image, tagLineCTA }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine}&nbsp;
          <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton type="primary" text={"Custom Order"} onPress={() => {}} />
        <StyledButton
          type="secondary"
          text={"Existing Inventory"}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default CarItem;

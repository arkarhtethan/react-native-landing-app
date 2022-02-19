import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./style";

const StyledButton = ({ text, type, onPress }) => {
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const color = type === "secondary" ? "#171A20" : "white";

  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, { backgroundColor }]} onPress={onPress}>
        <Text style={[styles.text, { color }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;

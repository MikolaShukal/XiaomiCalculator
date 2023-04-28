import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: "25%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonVal: {
    color: "white",
    fontSize: 50,
  },
});

export default ({ value, stl, handleKeyboard, id }) => {
  return (
    <View style={styles.button}>
      <Pressable onPress={() => handleKeyboard(value, id)}>
        <Text style={stl}>{value}</Text>
      </Pressable>
    </View>
  );
};

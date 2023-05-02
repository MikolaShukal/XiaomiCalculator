import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: "20%",
    height: "25%",
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
      <Pressable
        hitSlop={{ top: 9, bottom: 9, left: 30, right: 30 }}
        onPress={() => handleKeyboard(value, id)}
      >
        <Text style={stl}>{value}</Text>
      </Pressable>
    </View>
  );
};

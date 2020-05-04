import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>More Simple Way to Find Your Shop</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});

export default Loading;

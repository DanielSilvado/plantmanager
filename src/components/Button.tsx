import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Button() {
  return (
    <TouchableOpacity style={style.container}>
      <Text style={style.text}>Confirmar</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  text:{
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  }
});

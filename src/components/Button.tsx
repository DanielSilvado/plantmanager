import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps{
  title: string
}

export function Button({title, ...rest} : ButtonProps) {
  return (
    <TouchableOpacity style={style.container} {...rest}>
      <Text style={style.text}>{title}</Text>
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

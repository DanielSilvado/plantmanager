import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,

} from "react-native";

import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation() {

  return (
    <SafeAreaView style={style.container}>
          <View style={style.content}>
                <Text style={style.emoji}>😄</Text>
                <Text style={style.title}>
                  Prontinho
                </Text>
                <Text style={style.subtitle}>
                  Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                </Text>
            

              <View style={style.footer}>
                <Button title='Começar' />
              </View>
          </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  },

  title: {
    fontSize: 22,
    lineHeight: 38,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.text,
    paddingVertical: 10
  },
  emoji: {
    fontSize: 78,
  },

  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20
  },
});

import React from "react";
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerencie {'\n'}suas plantas{'\n'} de forma fácil</Text>

      <Image source={wateringImg}  style={styles.image}/>

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>
        {'>'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38  
  },
  subtitle:{
    fontSize: 18,
    textAlign: 'center',
    color: colors.heading,
    paddingHorizontal: 20
  },
  button:{
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
    width: 56,
    marginBottom: 10
  },
  buttonText:{
    color: colors.white,
  },
  image:{
    height: 292,
    width: 284,
  }
});

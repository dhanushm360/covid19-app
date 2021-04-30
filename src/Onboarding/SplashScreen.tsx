import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Routes, StackNavigationProps } from "../components/Navigation";

const SplashScreen = ({
  navigation,
}: StackNavigationProps<Routes, "SplashScreen">) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>Realtime Data</Text>
      </View>

      <View style={styles.subContainer2}>
        <Text style={styles.subTitle}>Extensive precautions</Text>
      </View>

      <View style={styles.subContainer3}>
        <Text style={styles.subTitle}>Affected and Sick</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Get the latest information about the Covid-19 Pandemic and view
          graphs.{" "}
        </Text>
      </View>

      <View style={styles.descriptionContainer2}>
        <Text style={styles.description}>
          Read about what you can do to minimize exposure to the virus.{" "}
        </Text>
      </View>

      <View style={styles.descriptionContainer3}>
        <Text style={styles.description}>
          Do the right things to stop spreading the virus and get vaccinated.{" "}
        </Text>
      </View>
      <RectButton
        onPress={() => navigation.navigate("HomeScreen")}
        style={[styles.buttonContainer, { backgroundColor: "#0075FF" }]}
      >
        <Text style={[styles.label, { color: "white" }]}>Continue</Text>
      </RectButton>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Get Started</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    fontSize: 36,
    fontFamily: "Bold",
    color: "white",
    textAlign: "center",
  },
  titleContainer: {
    justifyContent: "center",
    transform: [{ translateY: -80 }],
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "Semibold",
    color: "white",
    transform: [{ translateY: 230 }, { translateX: 50 }],
  },
  description: {
    fontSize: 16,
    fontFamily: "Semibold",
    color: "gray",
  },
  subContainer: {
    transform: [{ translateY: 30 }, { translateX: 10 }],
  },
  descriptionContainer: {
    marginRight: 100,
    transform: [{ translateY: 225 }, { translateX: 60 }],
  },
  descriptionContainer2: {
    marginRight: 100,
    transform: [{ translateY: 275 }, { translateX: 60 }],
  },
  descriptionContainer3: {
    marginRight: 100,
    transform: [{ translateY: 315 }, { translateX: 60 }],
  },
  subContainer2: {
    transform: [{ translateY: 100 }, { translateX: 10 }],
  },
  subContainer3: {
    transform: [{ translateY: 160 }, { translateX: 10 }],
  },
  buttonContainer: {
    borderRadius: 15,
    height: 50,
    width: 315,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateY: 400 }, { translateX: 30 }],
  },
  label: {
    fontFamily: "Semibold",
    fontSize: 16,
    textAlign: "center",
  },
});

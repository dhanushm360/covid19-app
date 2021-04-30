import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Platform,
  View,
  Dimensions,
} from "react-native";
import { Routes, StackNavigationProps } from "../components/Navigation";
import SegmentedControl from "@react-native-community/segmented-control";
import Graph from "../components/Graph";

const { width: W_WIDTH } = Dimensions.get("window");

const Data = () => {
  return (
    <ScrollView style={{ backgroundColor: "#f3f2f8", flex: 1 }}>
      <View
        style={{
          width: W_WIDTH,
          height: 420,
          position: "absolute",
          backgroundColor: "white",
        }}
      />
      <View
        style={{
          width: W_WIDTH,
          height: 0.5,
          position: "absolute",
          backgroundColor: "#C6C6C8",
          top: 420,
        }}
      />
      <SegmentedControl
        style={styles.control}
        values={["D", "W", "M", "Y"]}
        selectedIndex={2}
        onChange={(event) => {
          useState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
        }}
      />
      <Graph />
      <Text
        style={{
          fontFamily: "Medium",
          fontSize: 18,
          color: "#8C8C90",
          position: "absolute",
          top: 50,
          left: 15,
        }}
      >
        TOTAL
      </Text>
      <Text
        style={{
          fontFamily: "Bold",
          fontSize: 24,
          position: "absolute",
          top: 75,
          left: 15,
        }}
      >
        COVID-19 Cases
      </Text>
      <Text
        style={{
          fontFamily: "Medium",
          fontSize: 18,
          color: "#8C8C90",
          position: "absolute",
          top: 105,
          left: 15,
        }}
      >
        Today
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  control: {
    transform: [{ translateY: 0 }],
    margin: 15,
  },
});

export default Data;

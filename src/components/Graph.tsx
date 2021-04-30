import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { Routes, StackNavigationProps } from "../components/Navigation";

const Graph = () => {
  return (
    <View style={styles.container}>
      <VictoryChart width={400} theme={VictoryTheme.material}>
        <VictoryBar
          alignment="start"
          cornerRadius={{ top: 3 }}
          style={{ data: { fill: "orange", width: 25 } }}
          animate={{
            duration: 1000,
            onLoad: { duration: 1000 },
          }}
          data={[
            { x: "Sun", y: 10 },
            { x: "Mon", y: 25 },
            { x: "Tue", y: 40 },
            { x: "Wed", y: 50 },
            { x: "Thu", y: 50 },
            { x: "Fri", y: 50 },
            { x: "Sat", y: 50 },
          ]}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 30,
  },
});

export default Graph;

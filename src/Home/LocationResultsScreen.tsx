import React from "react";
import { ScrollView, Text, StyleSheet, FlatList } from "react-native";

class LocationResultsScreen extends React.Component {
  render() {
    return (
      <ScrollView
        style={{ backgroundColor: "#f3f2f8", flex: 1 }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Text style={styles.description}>
          Learn about the virus and its symptoms.
        </Text>
      </ScrollView>
    );
  }
}

export default LocationResultsScreen;

const styles = StyleSheet.create({
  description: {
    fontFamily: "Regular",
    fontSize: 18,
    position: "absolute",
    marginLeft: 16,
  },
});

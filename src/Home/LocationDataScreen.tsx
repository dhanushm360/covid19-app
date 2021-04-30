import React from "react";
import { View, Text } from "react-native";
import ItemView from "./SearchScreen";
import { Routes, StackNavigationProps } from "../components/Navigation";

interface SearchProps {
  onPress: () => void;
}

const LocationDataScreen = ({ onPress }: SearchProps) => {
  return <Text>hi</Text>;
  //
};

export default LocationDataScreen;

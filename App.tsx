import React, { useEffect } from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import Geocoder from "react-native-geocoding";
import apiKey from "./apiKey/api";
import { ThemeProvider } from "./src/components/Theme";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import * as Location from "expo-location";
import { TouchableWithoutFeedback, Text } from "react-native";
import "react-native-reanimated";
import BottomTabNavigator from "./navigation/TabNavigator";

Geocoder.init(apiKey);

enableScreens();

import SplashScreen from "./src/Onboarding/SplashScreen";
import { LoadAssets } from "./src/components";
import { Routes } from "./src/components/Navigation";

import { enableScreens } from "react-native-screens";

const fonts = {
  Bold: require("./assets/fonts/Bold.ttf"),
  "Rounded-Bold": require("./assets/fonts/Rounded-Bold.ttf"),
  Semibold: require("./assets/fonts/Semibold.ttf"),
  "Rounded-Semibold": require("./assets/fonts/Rounded-Semibold.ttf"),
  Regular: require("./assets/fonts/Regular.ttf"),
  "Rounded-Regular": require("./assets/fonts/Rounded-Regular.ttf"),
  Heavy: require("./assets/fonts/Heavy.ttf"),
  Medium: require("./assets/fonts/Medium.ttf"),
};

const SplashScreenStack = createNativeStackNavigator<Routes>();
const SplashScreenNavigator = () => {
  return (
    <SplashScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <SplashScreenStack.Screen name="SplashScreen" component={SplashScreen} />
    </SplashScreenStack.Navigator>
  );
};

export default function App() {
  const scheme = useColorScheme();

  useEffect(() => {
    (async () => {
      let status = await Location.hasServicesEnabledAsync();
      if (status !== true) {
        return (
          <TouchableWithoutFeedback
            style={{
              position: "absolute",
              width: 100,
              height: 10,
              borderRadius: 8,
              backgroundColor: "lightblue",
            }}
          >
            <Text>Location services are off</Text>
          </TouchableWithoutFeedback>
        );
      }
    })();
  }, []);

  return (
    <LoadAssets {...{ fonts }}>
      <BottomTabNavigator />
    </LoadAssets>
  );
}

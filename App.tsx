import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Geocoder from "react-native-geocoding";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import SearchBarCustom from "./src/Home/SearchScreen";

Geocoder.init("AIzaSyA6H2o9tyZB2pPP2pYe_E42-LcFjuQe5S8");

enableScreens();

import SplashScreen from "./src/Onboarding/SplashScreen";
import { LoadAssets } from "./src/components";
import HomeScreen from "./src/Home/HomeScreen";
import { Routes } from "./src/components/Navigation";
import DataScreen from "./src/Home/DataScreen";
import AboutScreen from "./src/Home/AboutScreen";
import PrecautionsScreen from "./src/Home/PrecautionsScreen";
import TestingScreen from "./src/Home/TestingScreen";
import AboutCOVID19Screen from "./src/Home/AboutCOVID19Screen";
import SymptomsScreen from "./src/Home/SymptomsScreen";
import RiskScreen from "./src/Home/RiskScreen";
import VariantsScreen from "./src/Home/VariantsScreen";
import SearchScreen from "./src/Home/SearchScreen";
import LocationDataScreen from "./src/Home/LocationDataScreen";

import { enableScreens } from "react-native-screens";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";

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

const HomeScreenStack = createNativeStackNavigator<Routes>();
const HomeScreenNavigator = () => {
  return (
    <HomeScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeScreenStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeScreenStack.Navigator>
  );
};

const DataScreenStack = createNativeStackNavigator<Routes>();
const DataScreenNavigator = () => {
  return (
    <DataScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <DataScreenStack.Screen name="DataScreen" component={DataScreen} />
    </DataScreenStack.Navigator>
  );
};

const AboutScreenStack = createNativeStackNavigator<Routes>();
const AboutScreenNavigator = () => {
  return (
    <AboutScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <AboutScreenStack.Screen name="AboutScreen" component={AboutScreen} />
    </AboutScreenStack.Navigator>
  );
};

const PrecautionsScreenStack = createNativeStackNavigator<Routes>();
const PrecautionsScreenNavigator = () => {
  return (
    <PrecautionsScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <PrecautionsScreenStack.Screen
        name="PrecautionsScreen"
        component={PrecautionsScreen}
      />
    </PrecautionsScreenStack.Navigator>
  );
};

const TestingScreenStack = createNativeStackNavigator<Routes>();
const TestingScreenNavigator = () => {
  return (
    <TestingScreenStack.Navigator>
      <TestingScreenStack.Screen
        name="TestingScreen"
        component={TestingScreen}
      />
    </TestingScreenStack.Navigator>
  );
};

const AboutCOVID19ScreenStack = createNativeStackNavigator<Routes>();
const AboutCOVID19ScreenNavigator = () => {
  return (
    <AboutCOVID19ScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <AboutCOVID19ScreenStack.Screen
        name="AboutCOVID19Screen"
        component={AboutCOVID19Screen}
      />
    </AboutCOVID19ScreenStack.Navigator>
  );
};

const SymptomsScreenStack = createNativeStackNavigator<Routes>();
const SymptomsScreenNavigator = () => {
  return (
    <SymptomsScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <SymptomsScreenStack.Screen
        name="SymptomsScreen"
        component={SymptomsScreen}
      />
    </SymptomsScreenStack.Navigator>
  );
};
const RiskScreenStack = createNativeStackNavigator<Routes>();
const RiskScreenNavigator = () => {
  return (
    <RiskScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <RiskScreenStack.Screen name="RiskScreen" component={RiskScreen} />
    </RiskScreenStack.Navigator>
  );
};
const VariantsScreenStack = createNativeStackNavigator<Routes>();
const VariantsScreenNavigator = () => {
  return (
    <VariantsScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <VariantsScreenStack.Screen
        name="VariantsScreen"
        component={VariantsScreen}
      />
    </VariantsScreenStack.Navigator>
  );
};

const LocationDataScreenStack = createNativeStackNavigator<Routes>();
const LocationDataScreenNavigator = () => {
  return (
    <LocationDataScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <LocationDataScreenStack.Screen
        name="LocationDataScreen"
        component={LocationDataScreen}
      />
    </LocationDataScreenStack.Navigator>
  );
};
type AppStackRoutes = {
  SplashScreen: undefined;
  HomeScreen: undefined;
  DataScreen: undefined;
  AboutScreen: undefined;
  PrecautionsScreen: undefined;
  TestingScreen: undefined;
  AboutCOVID19Screen: undefined;
  SymptomsScreen: undefined;
  RiskScreen: undefined;
  VariantsScreen: undefined;
  SearchScreen: undefined;
  MainTabNavigator: undefined;
  SearchScreenHeader: undefined;
  LocationDataScreen: undefined;
};

const HomeStack = createNativeStackNavigator<AppStackRoutes>();
const SearchStack = createNativeStackNavigator<AppStackRoutes>();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        title: "Summary",
        headerLargeTitle: true,
        headerTranslucent: true,
        headerLargeStyle: { backgroundColor: "#f3f2f8" },
        headerStyle: {
          backgroundColor: "rgba(255,255,255,0.1)",
          blurEffect: "prominent",
        },
        headerBackTitle: "Summary",
        headerLargeTitleHideShadow: true,
      }}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="SearchScreen"
      component={SearchBarCustom}
      options={{
        title: "Search",
        headerLargeTitle: true,
        headerTranslucent: true,
        headerLargeStyle: { backgroundColor: "#f3f2f8" },
        headerStyle: {
          backgroundColor: "rgba(255,255,255,0.1)",
          blurEffect: "prominent",
        },
        headerLargeTitleHideShadow: true,
      }}
    />
  </SearchStack.Navigator>
);

const MainTabBar = createBottomTabNavigator();

const Tab = (props) => (
  <BlurView
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    }}
    tint="light"
    intensity={100}
  >
    <BottomTabBar {...props} />
  </BlurView>
);

const AppStack = createNativeStackNavigator<AppStackRoutes>();

const MainTabNavigator = () => (
  <MainTabBar.Navigator
    tabBar={Tab}
    tabBarOptions={{
      style: {
        borderTopColor: "#b2b2b2",

        backgroundColor: "transparent",
      },
    }}
  >
    <MainTabBar.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => <Icon name="home" color={color} size={30} />,
      }}
    />
    <MainTabBar.Screen
      name="Search"
      component={SearchStackScreen}
      options={{
        tabBarLabel: "Search",
        tabBarIcon: ({ color }) => (
          <Icon2 name="ios-search" color={color} size={30} />
        ),
      }}
    />
  </MainTabBar.Navigator>
);

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AppStack.Navigator>
        <AppStack.Screen
          name="SplashScreen"
          component={SplashScreenNavigator}
          options={{ headerShown: false }}
        />

        <AppStack.Screen
          name="MainTabNavigator"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="DataScreen"
          component={DataScreenNavigator}
          options={{
            headerBackTitle: "Summary",
            headerStyle: { backgroundColor: "white" },
          }}
        />
        <AppStack.Screen
          name="PrecautionsScreen"
          component={PrecautionsScreenNavigator}
        />
        <AppStack.Screen
          name="LocationDataScreen"
          component={LocationDataScreenNavigator}
        />
        <AppStack.Screen
          name="AboutScreen"
          component={AboutScreenNavigator}
          options={{
            title: "About COVID-19",
            headerLargeTitle: true,
            headerTranslucent: true,
            headerLargeTitleStyle: { fontFamily: "Heavy" },
            headerLargeStyle: { backgroundColor: "#f3f2f8" },
            headerStyle: { backgroundColor: "white" },
            headerLargeTitleHideShadow: true,
          }}
        />
        <AppStack.Screen
          name="TestingScreen"
          component={TestingScreenNavigator}
          options={{
            title: "amazon.com",
            stackPresentation: "modal",
            headerTranslucent: true,
          }}
        />
        <AppStack.Screen
          name="AboutCOVID19Screen"
          component={AboutCOVID19ScreenNavigator}
          options={{ stackPresentation: "modal", headerTranslucent: true }}
        />
        <AppStack.Screen
          name="SymptomsScreen"
          component={SymptomsScreenNavigator}
          options={{ stackPresentation: "modal", headerTranslucent: true }}
        />
        <AppStack.Screen
          name="RiskScreen"
          component={RiskScreenNavigator}
          options={{ stackPresentation: "modal", headerTranslucent: true }}
        />
        <AppStack.Screen
          name="VariantsScreen"
          component={VariantsScreenNavigator}
          options={{ stackPresentation: "modal", headerTranslucent: true }}
        />
      </AppStack.Navigator>
    </LoadAssets>
  );
}

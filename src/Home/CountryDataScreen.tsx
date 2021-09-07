import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import SegmentedControl from "@react-native-community/segmented-control";
import { useCountryData } from "../api/useCountryData";
const { width: W_WIDTH } = Dimensions.get("window");
import Svg, { LinearGradient, Path, Stop } from "react-native-svg";

// import { GraphIndex, graphs, SIZE } from "../components/Model";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { mixPath, useVector } from "react-native-redash";
import BarGraph, { DataPoint } from "../components/BarGraph";
import { TabRouter } from "@react-navigation/native";
import CountryGraph from "../components/CountryGraph";
import { useUSDataHistorical } from "../api/useUSDataHistorical";

const { width } = Dimensions.get("window");
const startDate = new Date("2021-05-09").getTime();

const CountryDataScreen = () => {
  const { USCasesHistorical, todayUSCases, USCases } = useUSDataHistorical();

  return (
    <ScrollView>
      <View
        style={{
          width: width,
          height: 417,
          backgroundColor: "white",
          position: "absolute",
        }}
      />
      <CountryGraph
        USCasesHistorical={USCasesHistorical}
        todayUSCases={todayUSCases}
        USCases={USCases}
      />
    </ScrollView>
  );
  //     <ScrollView style={{ backgroundColor: "#f3f2f8", flex: 1 }}>
  //       <View>
  //         <Svg width={SIZE} height={SIZE}>
  //           <AnimatedPath
  //             animatedProps={animatedProps}
  //             fill="transparent"
  //             stroke="#00BFDD"
  //             strokeWidth={6}
  //           />
  //         </Svg>
  //       </View>

  //       <BarGraph
  //         data={data}
  //         startDate={startDate}
  //         numberOfMonths={numberOfMonths}
  //       />
  //       {graphs.map((graph, index) => {
  //         return (
  //           <SegmentedControl
  //             key={graph.value}
  //             style={styles.control}
  //             values={["D", "W", "M", "Y"]}
  //             selectedIndex={index as GraphIndex}
  //             onChange={() => {
  //               previous.value = current.value;
  //               transition.value = 0;
  //               current.value = index as GraphIndex;
  //               transition.value = withTiming(1);
  //             }}
  //           />
  //         );
  //       })}
  //     </ScrollView>
  //   );
  // };

  //       <View>

  //           <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
  //             <Stop stopColor="#CDE3F8" offset="0%" />
  //             <Stop stopColor="#eef6fd" offset="80%" />
  //             <Stop stopColor="#FEFFFF" offset="100%" />
  //           </LinearGradient>
  //           <AnimatedPath
  //             animatedProps={animatedProps}
  //             fill="url(#gradient)"
  //             stroke="#00BFDD"
  //             strokeWidth={6}
  //           />
  //         </Svg>
  //         <Cursor translation={translation} index={current} />
  //       </View>
  //       {graphs.map((graph, index) => {
  //         return (
  //           <SegmentedControl
  //             key={graph.value}
  //             style={styles.control}
  //             values={["D", "W", "M", "Y"]}
  //             selectedIndex={index as GraphIndex}
  //             onChange={() => {
  //               previous.value = current.value;
  //               transition.value = 0;
  //               current.value = index as GraphIndex;
  //               transition.value = withTiming(1);
  //             }}
  //           />
  //         );
  //       })}
  //     </ScrollView>
  //   );
  // };

  const styles = StyleSheet.create({
    control: {
      transform: [{ translateY: 0 }],
      margin: 15,
    },
  });
};

export default CountryDataScreen;


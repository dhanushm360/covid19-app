import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { RectButton } from "react-native-gesture-handler";
import { Routes, StackNavigationProps } from "../components/Navigation";
import color from "../components/Covid19DataCard";

const { width: W_WIDTH } = Dimensions.get("window");

const SearchBarCustom = (props) => {
  return <SearchBar {...props} />;
};

const SearchScreen = ({
  navigation,
}: StackNavigationProps<Routes, "HomeScreen">) => {
  const [filteredCountryData, setFilteredCountryData] = useState<any>();
  const [masterCountryData, setMasterCountryData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCountryData();
    return () => {};
  }, []);

  useEffect(() => {
    fetchStateData();
    return () => {};
  }, []);

  const fetchCountryData = () => {
    const apiURL = "https://coronavirus-19-api.herokuapp.com/countries";
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredCountryData(responseJson);
        setMasterCountryData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [filteredStateData, setFilteredStateData] = useState<any>();
  const [masterStateData, setMasterStateData] = useState([]);

  const fetchStateData = () => {
    const apiURL =
      "https://api.covidactnow.org/v2/states.json?apiKey=fac351e08be8429da56ccddb711aaa9a";
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredStateData(responseJson);
        setMasterStateData(responseJson);
        console.log(filteredStateData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const SearchCountryFilter = (text) => {
    if (text) {
      const newCountryData = filteredCountryData.filter((item) => {
        const itemCountryData = item.country;

        const textCountryData = text.toUpperCase();
        return itemCountryData.indexOf(textCountryData) > -1;
      });
      setFilteredCountryData(newCountryData);
      setSearch(text);
    } else {
      setFilteredCountryData(masterCountryData);
      setSearch(text);
    }
  };

  const SearchStateFilter = (text) => {
    if (text) {
      const newStateData = filteredStateData.filter((item) => {
        const itemStateData = item.state;

        const textStateData = text.toUpperCase();
        return itemStateData.indexOf(textStateData) > -1;
      });
      setFilteredStateData(newStateData);
      setSearch(text);
    } else {
      setFilteredStateData(masterStateData);
      setSearch(text);
    }
  };

  const ItemViewCountry = ({ item }) => {
    return (
      <RectButton
        onPress={() => navigation.navigate("LocationDataScreen")}
        style={styles.searchcontainer}
      >
        <Text style={[styles.itemStyle, { textTransform: "capitalize" }]}>
          {item.id}
          {item.country.toUpperCase()}
        </Text>
      </RectButton>
    );
  };

  const ItemViewState = ({ item }) => {
    return (
      <RectButton
        onPress={() => navigation.navigate("LocationDataScreen")}
        style={styles.searchcontainer}
      >
        <Text style={[styles.itemStyle, { textTransform: "capitalize" }]}>
          {item.id}
          {item.state.toUpperCase()}
        </Text>
      </RectButton>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 1.5,
          width: "90%",
          marginLeft: 35,
          backgroundColor: "#f3f2f8",
        }}
      />
    );
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      stickyHeaderIndices={[0]}
      style={[styles.container, { flex: 1 }]}
    >
      <SearchBarCustom
        value={search}
        placeholder="Search"
        containerStyle={{ backgroundColor: "#f3f2f8" }}
        inputContainerStyle={{
          backgroundColor: "#e3e3e9",
          height: 25,
          marginHorizontal: 5,

          marginTop: -5,
        }}
        placeholderTextColor="#96969b"
        platform="ios"
        onChangeText={(text) => {
          SearchCountryFilter(text);
          SearchStateFilter(text);
        }}
      />
      <FlatList
        data={filteredCountryData}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemViewCountry}
        style={styles.listcontainer}
      />
      <Text style={{ fontFamily: "Bold", fontSize: 20 }}>States</Text>
      <FlatList
        data={filteredStateData}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemViewState}
        style={styles.listcontainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f2f8",
  },

  textInput: {
    height: 36,
    width: 300,
    borderRadius: 10,
    marginTop: -50,
    backgroundColor: "#e3e3e9",
    fontSize: 13,
    marginHorizontal: 5,
  },
  inputWrapper: {
    marginTop: 80,
  },
  itemStyle: {
    padding: 10,
    fontSize: 20,
    fontFamily: "Medium",
    marginVertical: 10,
    marginLeft: 5,
  },
  searchcontainer: {
    marginHorizontal: 0,
  },
  listcontainer: {
    marginTop: 20,
    backgroundColor: "white",
    width: W_WIDTH * 0.89,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});

export default SearchScreen;

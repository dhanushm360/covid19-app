import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  Dimensions,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Constants from "expo-constants";
import * as Location from "expo-location";
import Geocoder from "react-native-geocoding";
Geocoder.init("AIzaSyA6H2o9tyZB2pPP2pYe_E42-LcFjuQe5S8");
import axios from "axios";
import apiKey from "../../api/api";

const { width: W_WIDTH } = Dimensions.get("window");

interface DataCardProps {
  onPress: () => void;
}

// fac351e08be8429da56ccddb711aaa9a
const Covid19DataCard = ({ onPress }: DataCardProps) => {
  const [latest, setLatest] = useState(Number);

  useEffect(() => {
    axios
      .get("https://coronavirus-19-api.herokuapp.com/all")
      .then((res) => {
        setLatest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var NumAbbr = require("number-abbreviate");
  var abbreviate = require("number-abbreviate");

  var numAbbrK = new NumAbbr("K");
  var numAbbrM = new NumAbbr("M");

  var worldcases = abbreviate(latest.cases, 1);
  var worlddeaths = abbreviate(latest.deaths, 1);

  const [latitude, setlatitude] = useState(Number);
  const [longitude, setlongitude] = useState(Number);

  const [location, setLocation] = useState(Object);
  const [errorMsg, setErrorMsg] = useState(String);

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android" && !Constants.isDevice) {
        setErrorMsg(
          "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
        );
        return;
      }
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      const latitude = location.coords.latitude;
      setlatitude(latitude);
      const longitude = location.coords.longitude;
      setlongitude(longitude);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const [statedata, setstateData] = useState(null);
  var [countydata, setcountydata] = useState(null);
  const [countrydata, setcountrydata] = useState(null);
  var [stateNameshort, setstateNameshort] = useState(String);
  var [countryNameshort, setCountryNameshort] = useState(String);

  fetch(
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      latitude +
      "," +
      longitude +
      "&key=" +
      apiKey
  )
    .then((response) => response.json())
    .then((responseJson) => {
      const resState = responseJson.results[0].address_components.filter(
        (x: any) =>
          x.types.filter((t: Object) => t == "administrative_area_level_1")
            .length > 0
      )[0].long_name;
      setstateData(resState);
      const resCounty = responseJson.results[0].address_components.filter(
        (x: any) =>
          x.types.filter((t: Object) => t == "administrative_area_level_2")
            .length > 0
      )[0].long_name;
      setcountydata(resCounty);
      const resCountry = responseJson.results[0].address_components.filter(
        (x: any) => x.types.filter((t: Object) => t == "country").length > 0
      )[0].long_name;
      setcountrydata(resCountry);
      const resStateShort = responseJson.results[0].address_components.filter(
        (x: any) =>
          x.types.filter((t: Object) => t == "administrative_area_level_1")
            .length > 0
      )[0].short_name;
      setstateNameshort(resStateShort);
      const resCountryShort = responseJson.results[0].address_components.filter(
        (x: any) => x.types.filter((t: Object) => t == "country").length > 0
      )[0].short_name;
      setCountryNameshort(resCountryShort);
      if (countryNameshort === "US") {
        countryNameshort = "US" + "A";
      }
    });

  if (stateNameshort === "MN") {
    var stateNameshortIndex = 23;
  }

  const [earliest, setEarliest] = useState(Number);
  const [stateCases, setStateCases] = useState(Number);
  const [stateDeaths, setStateDeaths] = useState(Number);
  const [stateVaccinations, setStateVaccinations] = useState(Number);
  const [stateRiskLevel, setStateRiskLevel] = useState(Number);

  useEffect(() => {
    axios
      .get(
        "https://api.covidactnow.org/v2/states.json?apiKey=fac351e08be8429da56ccddb711aaa9a"
      )
      .then((res) => {
        setEarliest(res.data);

        const stateCases = res.data[stateNameshortIndex].actuals.cases;
        setStateCases(stateCases);

        const stateDeaths = res.data[stateNameshortIndex].actuals.deaths;
        setStateDeaths(stateDeaths);

        const stateVaccinations =
          res.data[stateNameshortIndex].actuals.vaccinationsCompleted;
        setStateVaccinations(stateVaccinations);

        const stateRiskLevel = res.data[stateNameshortIndex].riskLevels.overall;
        setStateRiskLevel(stateRiskLevel);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (stateRiskLevel >= 3) var color = "red";

  var statecases = numAbbrK.abbreviate(stateCases, 0);
  var statedeaths = numAbbrK.abbreviate(stateDeaths, 2);
  var statevaccines = abbreviate(stateVaccinations, 1);

  const [earliest1, setEarliest1] = useState(Number);
  const [countyDeaths, setcountyDeaths] = useState(Number);
  const [countyCases, setcountyCases] = useState(Number);

  useEffect(() => {
    axios
      .get(
        "https://api.covidactnow.org/v2/counties.json?apiKey=fac351e08be8429da56ccddb711aaa9a"
      )
      .then((res) => {
        setEarliest1(res.data);

        const enteredCountyName = countydata;
        const countyArray = res.data.filter(
          (item) => item.county === enteredCountyName
        );

        const resCountyDeaths = countyArray[0].actuals.deaths;
        setcountyDeaths(resCountyDeaths);
        const resCountyCases = countyArray[0].actuals.cases;
        setcountyCases(resCountyCases);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var countycases = abbreviate(countyCases, 0);

  const [earliest2, setEarliest2] = useState([]);
  const [countryDeaths, setcountryDeaths] = useState(Number);
  const [countryCases, setcountryCases] = useState(Number);
  const [country, setCountry] = useState();

  useEffect(() => {
    axios
      .get("https://coronavirus-19-api.herokuapp.com/countries")
      .then((response) => {
        setEarliest2(response.data);

        const enteredCountryName = countryNameshort;
        const countryArray = response.data.filter(
          (item) => item.country === enteredCountryName
        );

        const resCountryDeaths = countryArray[0].deaths;
        setcountryDeaths(resCountryDeaths);

        const resCountryCases = countryArray[0].cases;
        setcountryCases(resCountryCases);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var countrycases = abbreviate(countryCases, 1);
  var countrydeaths = abbreviate(countryDeaths, 0);

  var formattedcountyDeaths = countyDeaths.toLocaleString();

  return (
    <RectButton
      style={[styles.container, { backgroundColor: "white" }]}
      {...{ onPress }}
    >
      <Text style={styles.textOverview}>hi</Text>

      <View style={[styles.divider, { top: 45, left: 110 }]}></View>
      <View style={[styles.divider, { top: 45, left: 230 }]}></View>
      <View style={[styles.divider, { top: 155, left: 110 }]}></View>
      <View style={[styles.divider, { top: 265, left: 110 }]}></View>
      <View style={[styles.divider, { top: 155, left: 230 }]}></View>
      <View style={[styles.divider, { top: 265, left: 230 }]}></View>
      <View style={[styles.divider, { top: 375, left: 110 }]}></View>
      <View style={[styles.divider, { top: 375, left: 230 }]}></View>

      <Text style={[styles.textLocation, { top: 15, left: 10 }]}>
        {String(countydata)}
      </Text>
      <Text style={[styles.textLocation, { top: 125, left: 10 }]}>
        {statedata}
      </Text>

      <Text style={[styles.textLocation, { top: 235, left: 10 }]}>
        {countrydata}
      </Text>
      <Text style={[styles.textLocation, { top: 345, left: 10 }]}>
        Worldwide
      </Text>

      <Text style={[styles.casesNumber, { top: 50, left: 10 }]}>
        {countycases}
      </Text>
      <Text style={[styles.casesNumber, { top: 160, left: 10 }]}>
        {statecases}
      </Text>
      <Text style={[styles.casesNumber, { top: 275, left: 10, fontSize: 18 }]}>
        {countrycases}
      </Text>
      <Text style={[styles.casesNumber, { top: 50, left: 120 }]}>
        {formattedcountyDeaths}
      </Text>
      <Text style={[styles.casesNumber, { top: 160, left: 120 }]}>
        {statedeaths}
      </Text>
      <Text style={[styles.casesNumber, { top: 271, left: 120 }]}>
        {countrydeaths}
      </Text>
      <Text style={[styles.casesNumber, { top: 271, left: 240 }]}>1.1M</Text>

      <Text style={[styles.casesNumber, { top: 380, left: 10 }]}>
        {worldcases}
      </Text>
      <Text style={[styles.casesNumber, { top: 380, left: 120 }]}>
        {worlddeaths}
      </Text>

      <Text style={[styles.casesNumber, { top: 50, left: 240 }]}>—</Text>
      <Text style={[styles.casesNumber, { top: 160, left: 240 }]}>
        {statevaccines}
      </Text>
      <Text style={[styles.casesNumber, { top: 383, left: 240, fontSize: 18 }]}>
        200M
      </Text>

      <Text style={[styles.casesText, { top: 57, left: 65 }]}>cases</Text>
      <Text style={[styles.casesText, { top: 167, left: 65 }]}>cases</Text>
      <Text style={[styles.casesText, { top: 279, left: 65 }]}>cases</Text>
      <Text style={[styles.casesText, { top: 387, left: 65 }]}>cases</Text>

      <Text style={[styles.casesText, { top: 57, left: 180 }]}>deaths</Text>
      <Text style={[styles.casesText, { top: 167, left: 180 }]}>deaths</Text>
      <Text style={[styles.casesText, { top: 278, left: 180 }]}>deaths</Text>
      <Text style={[styles.casesText, { top: 387, left: 180 }]}>deaths</Text>

      <Text style={[styles.casesText, { top: 57, left: 285 }]}>doses</Text>
      <Text style={[styles.casesText, { top: 167, left: 285 }]}>doses</Text>
      <Text style={[styles.casesText, { top: 278, left: 285 }]}>doses</Text>
      <Text style={[styles.casesText, { top: 387, left: 285 }]}>doses</Text>

      <Text style={[styles.todayCases, { top: 75, left: 10 }]}>+267</Text>
      <Text style={[styles.todayCases, { top: 75, left: 120 }]}>+2</Text>
      <Text style={[styles.todayCases, { top: 185, left: 120 }]}>+7</Text>
      <Text style={[styles.todayCases, { top: 185, left: 10 }]}>+1,310</Text>
      <Text style={[styles.todayCases, { top: 295, left: 10 }]}>+45,552</Text>
      <Text style={[styles.todayCases, { top: 295, left: 120 }]}>+487</Text>

      <Image
        style={styles.arrow}
        source={require("../../assets/right-arrow.png")}
      ></Image>
    </RectButton>
  );
};

export default Covid19DataCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 440,
    width: W_WIDTH * 0.89,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 40,
  },
  arrow: {
    width: 12,
    height: 12,
    position: "absolute",
    top: 20,
    right: 20,
    tintColor: "#bcbcbe",
  },
  textOverview: {
    fontFamily: "Regular",
    position: "absolute",
    top: 17,
    right: 40,
    color: "#98989a",
    fontSize: 16,
  },
  textLocation: {
    fontFamily: "Semibold",
    fontSize: 18,
    position: "absolute",

    color: "#FF3B30",
  },
  casesNumber: {
    fontFamily: "Rounded-Bold",
    fontSize: 21,
    position: "absolute",
  },
  casesText: {
    fontFamily: "Bold",
    fontSize: 14,
    position: "absolute",
    color: "#8C8C90",
  },
  divider: {
    width: 1,
    height: 54,
    position: "absolute",
    backgroundColor: "#DCDCDD",
  },
  todayCases: {
    fontFamily: "Rounded-Bold",
    fontSize: 14,
    position: "absolute",
    color: "#9F9F9F",
  },
});

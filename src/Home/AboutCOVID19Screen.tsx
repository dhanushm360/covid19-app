import React from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableWithoutFeedback, Text } from 'react-native';
import { Routes, StackNavigationProps } from '../components/Navigation';


const Precautions = ({ navigation }: StackNavigationProps<Routes, "PrecautionsScreen">) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView  contentInsetAdjustmentBehavior='automatic'>
            
            <Image
            
            source={require('../../assets/virus.png')}
            style={{ width: 50, height: 50, position: 'absolute', top: 60, left: 20}}
            ></Image>
            <Text style={[styles.subHeader, {marginTop: 130}]}>
                What is COVID-19?
            </Text>
            <Text style={[styles.description, {marginTop: 170}]}>
            COVID-19 is a respiratory disease that is caused by a coronavirus that mainly affects old people who have severe
            underlying medical conditions.
            </Text>
            <Text style={[styles.subHeader, {marginTop: 280}]}>
                What You Need to Know
            </Text>
            <Text style={[styles.description, {marginTop: 320}]}>
                COVID-19 spreads very easily from person to person. Generally, people who are in close contact (within 6 feet) 
                with an infected person are at greatest risk.  People who are infected but do not show symptoms can also spread
                the virus to others. 
            </Text>
            <Text style={[styles.subHeader, {marginTop: 475}]}>
                The Details
            </Text>
            <Text style={[styles.description, {marginTop: 515, marginBottom: 50}]}>
                COVID-19 infection is an airborne transmission. This means that exposure to the virus is caused by small
                respiratory droplets and particles in the air. These respiratory droplets are produced when a person coughs, 
                sneezes, breathes or talks. However, as the droplets travel further from the person, the concentration of these
                droplets decreases. COVID-19 can also spread through surfaces and objects. It is possible that a person could get 
                COVID-19 by touching a surface or a object that has the virus on it and then touching their own mouth, nose or eyes.   
            </Text>


        </ScrollView>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Image 
                style={{ width: 30, height: 30, position: 'absolute', top: 15, right: 20 }}
                source={require('../../assets/closebutton.png')}
                >

                </Image>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Precautions;

const styles = StyleSheet.create({
    subHeader: {
        fontFamily: 'Heavy',
        fontSize: 30,
        position: 'absolute',
        marginLeft: 20
    },
    description: {
       fontFamily: 'Regular',
       fontSize: 18,
       position: 'absolute',
       lineHeight: 24,
       left: 20,
       marginRight: 40 
    }


})
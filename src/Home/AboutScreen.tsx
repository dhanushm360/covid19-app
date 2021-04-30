import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Routes, StackNavigationProps } from '../components/Navigation';
import AboutCOVID19Card from '../components/AboutCOVID19Card'
import SymptomsCard from '../components/SymptomsCard'
import RiskCard from '../components/RiskCard'
import VariantsCard from '../components/VariantsCard'


const AboutScreen = ({ navigation }: StackNavigationProps<Routes, "AboutScreen">) => {
    return (
        <ScrollView style={{ backgroundColor: '#f3f2f8', flex: 1 }} contentInsetAdjustmentBehavior='automatic'>
            
                <Text style={styles.description}>
                    Learn about the virus and its symptoms.
                </Text>
            <AboutCOVID19Card onPress={() => navigation.navigate('AboutCOVID19Screen')}/>
            <SymptomsCard onPress={() => navigation.navigate('SymptomsScreen')}/>
            <RiskCard onPress={() => navigation.navigate('RiskScreen')}/>
            <VariantsCard onPress={() => navigation.navigate('VariantsScreen')}/>


            </ScrollView>
    
    )
}

export default AboutScreen;

const styles = StyleSheet.create({
    description: {
        fontFamily: 'Regular',
        fontSize: 18,
        position: 'absolute',
        marginLeft: 16
    }

})
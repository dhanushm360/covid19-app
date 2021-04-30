import React from 'react'
import { StyleSheet, ScrollView, Text, Image, View, Dimensions } from 'react-native'
import { Routes, StackNavigationProps } from '../components/Navigation';
import Covid19DataCard from '../components/Covid19DataCard';
import AboutCard from '../components/AboutCard';
import PrecautionsCard from '../components/PrecautionsCard'
import TestingCard from '../components/TestingCard'
import WebsitesCard from '../components/WebsitesCard'
import { StatusBar } from 'expo-status-bar';

const {width: W_WIDTH} = Dimensions.get('window')




const HomeScreen = ({ navigation }: StackNavigationProps<Routes, "HomeScreen">) => {

    return (
        <>
        <StatusBar style='dark' />
            <ScrollView style={styles.container} contentInsetAdjustmentBehavior='automatic' >
                <Image
                    source={require('../../assets/cdclogoclip0000.png')}
                    style={{ width: 35, height: 35, position: 'absolute', right: 20}}
                />
                <Covid19DataCard onPress={() => navigation.navigate('DataScreen') } />
                <AboutCard onPress={() => navigation.navigate('AboutScreen')} />
                <PrecautionsCard onPress={() => navigation.navigate('PrecautionsScreen')} />
                <TestingCard />  
                <WebsitesCard />               

                <Text style={[styles.textheader, {top: 10}]}>
                    Overview
                </Text> 
                <Text style={[styles.textheader, {top: 510}]}>
                    About COVID-19
                </Text>
                <Text style={[styles.textheader, {top: 680}]}>
                    Precautions
                </Text>
                <Text style={[styles.textheader, {top: 875}]}>
                    Testing Information
                </Text>
                <Text style={[styles.textheader, {top: 1175}]}>
                    More Information
                </Text>

                
            </ScrollView>
            </>
            
     
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
   container: {
        flex: 1,
        backgroundColor: '#f3f2f8', 
   },

   textheader: {
       fontFamily: 'Bold',
       fontSize: 22,
       paddingLeft: 20,
       position: 'absolute',
       top: 10
   },
   
   

    
})


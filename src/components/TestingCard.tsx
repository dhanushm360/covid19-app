import React, { useState } from 'react'
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Routes, StackNavigationProps } from '../components/Navigation';
import * as WebBrowser from 'expo-web-browser';

const {width: W_WIDTH} = Dimensions.get('window')


export default function TestingCard() {
    
    const [result, setResult] = useState(null);

    const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://expo.io');
    setResult(result);
    };
    
    return (
        <View style={[styles.container, { backgroundColor: 'white'},]} >
            <Image
            source={require('../../assets/contract.png')}
            style={{ width: 20, height: 20, position: 'absolute', top: 15, left: 15}}
            >

            </Image>
            <Text style={styles.QuestionText}>
                Should I get Tested?
            </Text>
            <Text style={[styles.mainLabel, {top: 45, left: 15}]}>
                Get informed about when it's time to test for COVID-19 and gain greater insight on your results.
            </Text>
            
                <RectButton
                    onPress={_handlePressButtonAsync}
                    style={[styles.buttonContainer, { backgroundColor: '#0075FF'}]}>
                    <Text style={[styles.label, { color: 'white' }]}>
                        Get Started
                    </Text> 
                </RectButton>
            
            
            
        </View>
        

    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        height: 240,
        width: W_WIDTH * 0.89,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 60,

    },
    QuestionText: {
        fontFamily: 'Bold',
        fontSize: 16,
        position: 'absolute',
        color: '#AF52DE',
        top: 17,
        left: 40
    },
    mainLabel: {
        fontFamily: 'Semibold',
        fontSize: 22,
        position: 'absolute',
        marginRight: 25
    },
    buttonContainer: {
        borderRadius: 8,
        height: 50,
        width: 305,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 160
    },
    label: {
        fontFamily: "Semibold",
        fontSize: 16,
        textAlign: 'center'
    },
    
   
})


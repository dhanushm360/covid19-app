import React, { useState } from 'react'
import { StyleSheet, Text, Image, Dimensions, View, TouchableWithoutFeedback } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';


const {width: W_WIDTH} = Dimensions.get('window')




export default function WebsitesCard() {

    const [result, setResult] = useState(null);

    const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-covid-spreads.html');
    setResult(result);
    };

    const _handlePressButtonAsync2 = async () => {
        let result = await WebBrowser.openBrowserAsync('https://www.who.int/emergencies/diseases/novel-coronavirus-2019');
        setResult(result);
        };
    
    const _handlePressButtonAsync3 = async () => {
        let result = await WebBrowser.openBrowserAsync('https://www.usa.gov/coronavirus');
        setResult(result);
        };
    

    return (
        <View style={[styles.container, { backgroundColor: 'white'}]}>
            <TouchableWithoutFeedback onPress={_handlePressButtonAsync}>
                <Image
                        source={require('../../assets/cdclogoclip0000.png')}
                        style={{ width: 45, height: 45, position: 'absolute', left: 15, top: 15}}
                    />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={_handlePressButtonAsync}>
                <Text style={[styles.textName, { position: 'absolute', marginHorizontal: 35, top: 12, left: 40 }]}>
                    Centers for Disease Control and Prevention (CDC)
                </Text>
            </TouchableWithoutFeedback>
            <Text style={[styles.textDescription, { position: 'absolute', marginHorizontal: 30, top: 47, left: 44 }]}>
                    CDC Response to COVID-19 Pandemic
            </Text>
            
            <View style={[styles.divider, { top: 75, right: 0 }]} />
            
            <TouchableWithoutFeedback onPress={_handlePressButtonAsync2}>
            <Image
                    source={require('../../assets/who-emblem.png')}
                    style={{ width: 45, height: 40, position: 'absolute', left: 15, top: 90}}
                />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={_handlePressButtonAsync2}>
            <Text style={[styles.textName, { position: 'absolute', marginHorizontal: 30, top: 90, left: 44 }]}>
                World Health Organization (WHO)
            </Text>
            </TouchableWithoutFeedback>

            <View style={[styles.divider, { top: 145, right: 0 }]} />
            
            <TouchableWithoutFeedback onPress={_handlePressButtonAsync3}>
            <Image
                    source={require('../../assets/usagov.png')}
                    style={{ width: 65, height: 65, position: 'absolute', left: 5, top: 150}}
                />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={_handlePressButtonAsync3}>
            <Text style={[styles.textName, { position: 'absolute', marginHorizontal: 30, top: 160, left: 44 }]}>
                USA.gov
            </Text>
            </TouchableWithoutFeedback>


        
        </View>
        

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        height: 220,
        width: W_WIDTH * 0.89,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 55,
        marginBottom: 70


    },
    divider: {
        width: 260,
        height: 1,
        position: 'absolute',
        backgroundColor: '#DCDCDD',
    },
    textName: {
        fontFamily: 'Semibold',
        fontSize: 15,

    },
    textDescription: {
        fontFamily: 'Medium',
        fontSize: 14,
        color: '#98989a',

    }
    
   
})
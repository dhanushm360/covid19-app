import React from 'react'
import { StyleSheet, Text, Image, Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const {width: W_WIDTH} = Dimensions.get('window')


interface DataCardProps {
    onPress: () => void;
}


const AboutCard = ({ onPress }: DataCardProps) => {
    return (
        <RectButton style={[styles.container, { backgroundColor: 'white'},  ]} {...{ onPress }}>
            <Image
            source={require('../../assets/virus.png')}
            style={{ width: 20, height: 20, position: 'absolute', top: 15, left: 15}}
            >

            </Image>
            <Text style={[styles.QuestionText, {color: '#FF9500'}]}>
                What is COVID-19?
            </Text>
            <Text style={[styles.mainLabel, {top: 45, left: 15}]}>
                Learn about the virus and its symptoms.
            </Text>
            <Image 
                style={styles.arrow}
                source={require('../../assets/right-arrow.png')}
                >
                
            </Image>
            
        </RectButton>
        

    )
}

export default AboutCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        height: 115,
        width: W_WIDTH * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 60

    },
    QuestionText: {
        fontFamily: 'Bold',
        fontSize: 16,
        position: 'absolute',
        top: 17,
        left: 40
    },
    mainLabel: {
        fontFamily: 'Semibold',
        fontSize: 22,
        position: 'absolute'
    },
    arrow: {
        width: 12,
        height: 12,
        position: 'absolute',
        top: 20,
        right: 20,
        tintColor: '#bcbcbe'
    }


   
})
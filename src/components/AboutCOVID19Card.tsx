import React from 'react'
import { StyleSheet, Text, Image, View, Button } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'


interface DataCardProps {
    onPress: () => void;
}


const AboutCOVID19Card = ({ onPress }: DataCardProps) => {
    return (
        <View style={[styles.container, { backgroundColor: 'white'},  ]} >
            <View style={styles.line}/>

            <Image
            source={require('../../assets/virus.png')}
            style={{ width: 20, height: 20, position: 'absolute', top: 15, left: 15}}
            >

            </Image>
            <Text style={[styles.QuestionText, ]}>
                What is COVID-19?
            </Text>
            <Text style={[styles.mainLabel, {top: 45, left: 15}]}>
                COVID-19 is a respiratory disease that is caused by a coronavirus that mainly affects old people
                who have severe underlying medical conditions.
            </Text>
            
            <View style={{position: 'absolute', bottom: 10, left: 10}}>
                <Button title='Learn More' {...{ onPress }}>
                    
                </Button>
            </View>
            <Image 
                style={styles.arrow}
                source={require('../../assets/right-arrow.png')}
                >
                
            </Image>
            
        </View>
        

    )
}

export default AboutCOVID19Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        height: 180,
        width: 385,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 35

    },
    QuestionText: {
        fontFamily: 'Bold',
        fontSize: 16,
        position: 'absolute',
        top: 17,
        left: 40
    },
    mainLabel: {
        fontFamily: 'Regular',
        fontSize: 16,
        position: 'absolute',
        marginRight: 40,
        lineHeight: 22
    },
    arrow: {
        width: 12,
        height: 12,
        position: 'absolute',
        bottom: 20,
        right: 20,
        tintColor: '#bcbcbe'
    },
    MoreText: {
        fontFamily: 'Medium',
        fontSize: 16,
        color: '#007AFF',
        position: 'absolute',
        bottom: 20,
        left: 20
    },
    line: {
        width: 345,
        height: 1,
        position: 'absolute',
        backgroundColor: '#C6C6C8',
        top: 125
    }


   
})
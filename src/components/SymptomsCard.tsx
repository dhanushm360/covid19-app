import React from 'react'
import { StyleSheet, Text, Image, View, Button } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'


interface DataCardProps {
    onPress: () => void;
}


const SymptomsCard = ({ onPress }: DataCardProps) => {
    return (
        <View style={[styles.container, { backgroundColor: 'white'},  ]} >
            <View style={styles.line}/>

            <Image
            source={require('../../assets/thermometer.png')}
            style={{ width: 20, height: 20, position: 'absolute', top: 15, left: 15}}
            >

            </Image>
            <Text style={[styles.QuestionText, ]}>
                What are COVID-19's symptoms?
            </Text>
            <Text style={[styles.mainLabel, {top: 45, left: 15}]}>
                COVID-19 affects different people in different ways. Symptoms can be mild or severe: fever, cough,
                shortness of breath, fatigue,  loss of taste or smell, nausea, and diarrhea. 
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

export default SymptomsCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        height: 200,
        width: 385,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 20

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
        top: 145
    }


   
})
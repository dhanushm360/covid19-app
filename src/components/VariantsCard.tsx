import React from 'react'
import { StyleSheet, Text, Image, View, Button } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'


interface DataCardProps {
    onPress: () => void;
}


const VariantsCard = ({ onPress }: DataCardProps) => {
    return (
        <View style={[styles.container, { backgroundColor: 'white'},  ]} >
            <View style={styles.line}/>

            <Image
            source={require('../../assets/variant.png')}
            style={{ width: 20, height: 20, position: 'absolute', top: 18, left: 15}}
            >

            </Image>
            <Text style={[styles.QuestionText, ]}>
                What are the variants of the virus?
            </Text>
            <Text style={[styles.mainLabel, {top: 45, left: 15}]}>
                Viruses constantly change through mutation, and COVID-19 is no exception. Sometimes new variants emerge and disappear.
                Other times, new variants emerge and persist. Multiple variants of COVID-19.
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

export default VariantsCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        height: 220,
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
        top: 165
    }


   
})
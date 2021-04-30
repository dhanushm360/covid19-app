import React from 'react'
import { StyleSheet, Text, Image, Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const {width: W_WIDTH} = Dimensions.get('window')


interface DataCardProps {
    onPress: () => void;
}


const PrecautionsCard = ({ onPress }: DataCardProps) => {
    return (
        <RectButton style={[styles.container, { backgroundColor: 'white'},  ]} {...{ onPress }}>
            <Image
            source={require('../../assets/list.png')}
            style={{ width: 20, height: 20, position: 'absolute', top: 15, left: 15}}
            >

            </Image>
            <Text style={styles.QuestionText}>
                What Can You Do?
            </Text>
            <Text style={[styles.mainLabel, {top: 45, left: 15}]}>
                Stay up to-date about precautions to take to reduce exposure to the virus.
            </Text>
            <Image 
                style={styles.arrow}
                source={require('../../assets/right-arrow.png')}
                >
                
            </Image>
        </RectButton>
        

    )
}

export default PrecautionsCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        height: 140,
        width: W_WIDTH * 0.89,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 55

    },
    QuestionText: {
        fontFamily: 'Bold',
        fontSize: 16,
        position: 'absolute',
        color: '#32D74B',
        top: 17,
        left: 40
    },
    mainLabel: {
        fontFamily: 'Semibold',
        fontSize: 22,
        position: 'absolute',
        marginRight: 20
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
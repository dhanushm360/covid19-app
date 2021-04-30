import React from 'react'
import { StyleSheet, Text, Image, View, Button } from 'react-native'


interface DataCardProps {
    onPress: () => void;
}


const RiskCard = ({ onPress }: DataCardProps) => {
    return (
        <View style={[styles.container, { backgroundColor: 'white'},  ]} >
            <View style={styles.line}/>

            <Image
            source={require('../../assets/group.png')}
            style={{ width: 20, height: 20, position: 'absolute', top: 17, left: 15}}
            >

            </Image>
            <Text style={[styles.QuestionText, ]}>
                Who is at increased risk for COVID-19?
            </Text>
            <Text style={[styles.mainLabel, {top: 45, left: 15}]}>
                The risk for severe illness increases with age, with older adults at highest risk. Other factors can increase
                your risk as well, such as having underlying medical conditions. Pregnant people are also at an increased risk
                when compared to non-pregnant people. 
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

export default RiskCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        height: 240,
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
        top: 185
    }


   
})


































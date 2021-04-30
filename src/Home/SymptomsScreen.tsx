import React from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableWithoutFeedback, Text } from 'react-native';
import { Routes, StackNavigationProps } from '../components/Navigation';


const SymptomsScreen = ({ navigation }: StackNavigationProps<Routes, "PrecautionsScreen">) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView  contentInsetAdjustmentBehavior='automatic'>
            
            <Image
            
            source={require('../../assets/thermometer.png')}
            style={{ width: 50, height: 50, position: 'absolute', top: 60, left: 20}}
            ></Image>
            <Text style={[styles.subHeader, {marginTop: 130}]}>
                What are COVID-19's Symptoms?
            </Text>
            <Text style={[styles.description, {marginTop: 210}]}>
                COVID-19 affects different people in different ways. Symptoms can be mild or severe: fever, cough, shortness
                of breath, fatigue,  loss of taste or smell, nausea, and diarrhea. 
            </Text>
            <Text style={[styles.subHeader, {marginTop: 320}]}>
                Watch for Symptoms
            </Text>
            <Text style={[styles.description, {marginTop: 360}]}>
                There are a wide range of symptoms reported ranging from mild symptoms to severe illness. Symptoms may appear
                2-14 days after exposure to the virus.  People with these symptoms may have COVID-19. {"\n"} {"\n"}

                • Fever or chills {"\n"}
                • Cough {"\n"}
                • Shortness of breath or difficulty breathing {"\n"}
                • Fatigue {"\n"}
                • Muscle or body aches {"\n"}
                • Headache {"\n"}
                • New loss of taste or smell {"\n"}
                • Sore throat {"\n"}
                • Congestion or runny nose {"\n"}
                • Nausea or vomiting {"\n"}
                • Diarrhea {"\n"}
            </Text>
            <Text style={[styles.subHeader, {marginTop: 700}]}>
                When to Seek Emergency Medical Attention
            </Text>
            <Text style={[styles.description, {marginTop: 540, marginBottom: 50}]}>
                .   
            </Text>


        </ScrollView>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Image 
                style={{ width: 30, height: 30, position: 'absolute', top: 15, right: 20 }}
                source={require('../../assets/closebutton.png')}
                >

                </Image>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default SymptomsScreen;

const styles = StyleSheet.create({
    subHeader: {
        fontFamily: 'Heavy',
        fontSize: 30,
        position: 'absolute',
        marginLeft: 20
    },
    description: {
       fontFamily: 'Regular',
       fontSize: 18,
       position: 'absolute',
       lineHeight: 24,
       left: 20,
       marginRight: 40 
    }


})
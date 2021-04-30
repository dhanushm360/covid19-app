import React from 'react';
import { ScrollView, Button, StyleSheet, View } from 'react-native';
import { Routes, StackNavigationProps } from '../components/Navigation';


const Precautions = ({ navigation }: StackNavigationProps<Routes, "PrecautionsScreen">) => {
    return (
        <ScrollView style={{ backgroundColor: '#f3f2f8', flex: 1 }}>
            <View style={styles.Button}>
                <Button title='Close' onPress={() => navigation.goBack()} />
            </View>
        </ScrollView>
    )
}

export default Precautions;

const styles = StyleSheet.create({
    Button: {
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        left: 150,
        top: 10
    }

})
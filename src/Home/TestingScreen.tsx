import React, { useState } from 'react';
import { ScrollView, Button } from 'react-native';
import { Routes, StackNavigationProps } from '../components/Navigation';
import { WebView } from 'react-native-webview';
import * as Progress from 'react-native-progress';

const TestingScreen = ({ navigation }: StackNavigationProps<Routes, "TestingScreen">) => {

    const [progress, setProgress] = useState(0)
    const [isLoaded, setLoaded] = useState(false)
    
    return (
        <>
        {
        !isLoaded ?
            <Progress.Bar
                useNativeDriver={true}
                borderWidth={0}
                borderRadius={0}
                height={3}
                progress={progress} 
                width={null} 
            />
        : null
        }
        
        <WebView
        source={{uri: 'https://amazon.com'}}
        onLoadProgress={({ nativeEvent} ) => setProgress(nativeEvent.progress)}
        onLoadEnd={() => setLoaded(true)}
        />
        </>
    )
}

export default TestingScreen;
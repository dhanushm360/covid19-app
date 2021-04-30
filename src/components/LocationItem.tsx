import React, { PureComponent  } from "react";
import { View, Text, StyleSheet} from 'react-native';

class LocationItem extends PureComponent {
    
    

    render() {
        return (
            <View style={styles.root}>
                <Text style={{ fontFamily: 'Semibold', fontSize: 18}}>{this.props.description}</Text>
            </View>
        );
    }
}

export default LocationItem;

const styles = StyleSheet.create({
    root: {
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center'
    },
})
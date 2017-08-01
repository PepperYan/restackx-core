/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View
} from 'react-native';

class NavBar extends Component {
    render() {
        return (
            <View style={styles.navContainer}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navContainer: {
        height: 60,
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection:'row',
        backgroundColor: '#ffffff',
        shadowOpacity:0.3,
        shadowOffset:{ width:2, height:2 },
        shadowColor:'#000000',
    },
    title:{

    },
    left:{

    },
    right:{

    }
});
export default NavBar;

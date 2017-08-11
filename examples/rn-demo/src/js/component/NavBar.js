/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component,PropTypes} from 'react';
import {BaseComponent} from "restackx-core/lib/native";
import {observable, computed, reaction,autorun} from 'mobx'
import {observer} from "mobx-react";

import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

@observer
class NavBar extends BaseComponent {
    componentWillMount() {

    }
    render() {
        return (
            <View style={styles.navContainer}>
                <Text style={styles.title}>{this.props.title}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    navContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        backgroundColor: '#ffffff',
        shadowOpacity:0.3,
        shadowOffset:{ width:2, height:2 },
        shadowColor:'#000000',
    },
    title:{
        fontSize:17,
        fontWeight:('bold'),
        color:"#272727",
        marginTop:10,
    },
    left:{

    },
    right:{

    }
});
NavBar.prototypes = {
    title: PropTypes.string
}
export default NavBar;

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
    View
} from 'react-native';

@observer
class NavBar extends BaseComponent {
    @observable title;

    componentWillMount() {
        let manager = this.context.store.MenuBarModel;
        autorun(
            ()=>{
                this.title = manager.route.title;
            }
        );

    }
    render() {
        return (
            <View style={styles.navContainer}>
                <Text style={styles.title}>{this.title}</Text>
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
        color:"#3768ff"

    },
    left:{

    },
    right:{

    }
});

export default NavBar;

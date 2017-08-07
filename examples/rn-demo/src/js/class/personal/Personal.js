import React, {Component, PropTypes} from 'react';
import {observable, computed, reaction} from 'mobx'
import {observer} from "mobx-react";

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import BaseController from '../../component/BaseController';

@observer
export default class Personal extends BaseController {
    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>Welcome to Personal</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff9148',
    },
    instructions: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
    },
});

Personal.prototypes = {
    userId: PropTypes.string
}
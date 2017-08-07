import React, {PropTypes} from 'react';
import {observable, computed, reaction} from 'mobx'
import {observer} from "mobx-react";
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import BaseController from '../../component/BaseController';

@observer
export default class Message extends BaseController {
    componentWillMount() {

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>Welcome to Message</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#825ee2',
    },
    instructions: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
    },
});

Message.prototypes = {
    userId: PropTypes.string
}
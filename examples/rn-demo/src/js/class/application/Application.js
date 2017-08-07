import React, {PropTypes} from 'react';
import {observable, computed, reaction} from 'mobx'
import {observer} from "mobx-react";
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import BaseController from '../../component/BaseController'

@observer
export default class Application extends BaseController {
    componentWillMount() {

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>Welcome to application</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa1d7',
    },
    instructions: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 150,

    },
});

Application.prototypes = {
    uid: PropTypes.string
}
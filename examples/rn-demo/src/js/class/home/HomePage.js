/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
export default class HomePage extends BaseController {
    @observable id;

    componentWillMount() {

    }
    componentDidMount() {
        super.componentDidMount();

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>restakx-core</Text>
                <Text style={styles.instructions}>welcome to Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffb283',
    },
    instructions: {
        color: '#376aff',
        fontSize: 20,
        textAlign: 'center',

    },
});

HomePage.prototypes = {
    user: PropTypes.object
}


// export default HomePage;


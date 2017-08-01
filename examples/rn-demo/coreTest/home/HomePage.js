/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Actions} from "react-native-router-flux";
import {BaseComponent} from "restackx-core/lib/native";
export default class HomePage extends BaseComponent {
    componentWillMount() {
    }
    componentDidMount() {

    }
    render() {
        let manger = this.context.store.HomePage;

        let meg = this.props.data;
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>{meg + '！！！'}</Text>
                <Text style={styles.welcome} onPress={() => Actions.pop()}>
                    你可以点击返回登录
                </Text>
                <Button title="Welcome to React Native!"
                        onPress={() => manger.homePageHandleAction("Welcome to React Native!")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#91c5ff',
    },
    welcome: {
        textAlign: 'center',
        marginTop: 150,
        fontSize: 15,

    },
    instructions: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 150,

    },
});
// export default HomePage;


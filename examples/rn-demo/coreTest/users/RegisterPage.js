import React, {Component} from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';
import styles from './Style'
import {Actions} from "react-native-router-flux";
import {BaseComponent} from "restackx-core/lib/native";

export default class RegisterPage extends BaseComponent {
    componentDidMount() {
        let manger = this.context.store.HomePage;
        console.log(manger.id);
    }
    render() {
        return (
            <View style={styles.registerContainer}>
                <Text>注册成功，可返回登录！！！</Text>
                <Button title="返回？登陆!" onPress={() => {
                    Actions.pop();
                    Actions.loginModal({'user': "user", 'password': "123"})
                }}/>
            </View>
        );

    }
}

RegisterPage.propTypes = {

}
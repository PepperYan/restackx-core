
import React, {Component,PropTypes} from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';
import {Actions} from "react-native-router-flux";
import {BaseComponent} from "restackx-core/lib/native";

import styles from './Style'

export default class LoginPage extends BaseComponent {


    componentDidMount() {
        let manger = this.context.store.HomePage;
        console.log(manger.id);
    }
    render() {
        return (
            <View style={styles.loginContainer}>
                <Button title="登录!" onPress={() => Actions.home("你已登录成功，并且进入首页")}/>
            </View>
        );

    }
}
LoginPage.propTypes = {

}




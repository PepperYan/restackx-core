import React, {Component} from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';
import NavBar from  './NavBar'
import LoginPage from './users/LoginPage';
import RegisterPage from "./users/RegisterPage";
import HomePage from './home/HomePage';

export const Routers = () => {
    return (
        <Scene overlay>
            <Scene key="box" leftButtonTextStyle={{color: '#9c28ff'}}
                   rightButtonTextStyle={{color: '#9c28ff'}}
                   backButtonTextStyle={{color: '#9c28ff'}} initial>
                <Scene key="loginModal" component={LoginPage} title="Login" rightTitle="Home"
                       onRight={() => Actions.home("你虽然进入首页，但是你没有登录")}
                       leftTitle="注册" onLeft={() => Actions.register()}
                       initial/>
                <Scene key="register" component={RegisterPage} title="register" leftTitle="返回"
                       onLeft={() => Actions.pop()}/>

                <Scene key="home" component={HomePage} title="Home" leftTitle="返回" navBar={NavBar} onLeft={() => Actions.pop()}/>

            </Scene>
        </Scene>
    )
};


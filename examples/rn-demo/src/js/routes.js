import React, {Component} from 'react';
import NavBar from  './component/NavBar'
import HomePage from './class/home/HomePage';
import Message from './class/message/Message';
import Application from './class/application/Application';
import Personal from './class/personal/Personal';
import MenuBar from './component/MenuBar'
import { NativeRouter, Route, Link} from 'react-router-native';
import {View} from 'react-native'

var route = [
    {
        "title":"Home",
        "path":"/",
    },{
        "title":"Message",
        "path":"/Message",
    },{
        "title":"Application",
        "path":"/Application",
    },{
        "title":"Personal",
        "path":"/Personal",
    },
];
const Routes = (
    <View style={{flex:1}}>
        <NavBar />
        <Route exact path={route[0].path} component={HomePage}/>
        <Route path={route[1].path} component={Message}/>
        <Route path={route[2].path} component={Application}/>
        <Route path={route[3].path} component={Personal}/>
        <MenuBar routes={route} initRoute={route[0]}/>
    </View>
);
export default Routes;

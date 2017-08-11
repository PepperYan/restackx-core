import React, {Component} from 'react';
import Main from './class/Main';
import {Route} from 'react-router-native';
import {Switch} from 'react-router'
import LaunchPage from './class/LaunchPage';
import App from './class/App';
import {View} from 'react-native'

const Routes = (
    <View style={{flex:1}}>
        <Switch>
            <Route exact path="/" component={LaunchPage}/>
            <Route path="/app" component={App}/>
            <Route path="/main" component={Main}/>
        </Switch>
    </View>
);

export default Routes;





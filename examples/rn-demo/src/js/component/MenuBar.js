import React, {Component, PropTypes} from 'react';
import {BaseComponent} from "restackx-core/lib/native";

import {
    View,
    StyleSheet,
} from 'react-native';
import MenuBarItem from './MenuBarItem'
import {observable} from 'mobx';
import {observer} from "mobx-react";

@observer
class MenuBar extends BaseComponent {

    @observable manager = this.context.store.MenuBarModel;

    componentWillMount() {
        this.manager.route = this.props.initRoute;
    }

    componentDidMount() {

    }

    renderItem() {
        let comArr = [];
        if (this.props.routes) {
            for (let i = 0; i < this.props.routes.length; i++) {
                let route = this.props.routes[i];
                let select = this.manager.route.path === route.path;
                comArr.push(
                    <MenuBarItem key={i} title={route.title} isSelect={select}
                                onChangeRoutePath={() => this.manager.changeRoutePath(route)}/>
                );
            }
        }
        return comArr;

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menuBar}>
                    {this.renderItem()}
                </View>
            </View>


        )

    }
}
const styles = StyleSheet.create({
    container: {
        height: 45,

        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "#f6f6f6",
    },
    menuBar: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        top: 6,
        left: 15,
        right: 15,
    }
})

MenuBar.propTypes = {
    routes: PropTypes.array,
    initRoute: PropTypes.object,
}


export default MenuBar ;
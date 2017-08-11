import React, {Component, PropTypes} from 'react';
import {BaseComponent} from "restackx-core/lib/native";
import {Link} from 'react-router-native';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';


class TopBar extends BaseComponent {
    renderItem() {
        let comArr = [];
        if (this.props.routes) {
            for (let i = 0; i < this.props.routes.length; i++) {
                let route = this.props.routes[i];
                comArr.push(
                    <Link key={i}  to={route.path} replace={true} component={TouchableOpacity}>
                        <Text style={{fontSize:16,fontWeight:('bold'),}}>{route.title}</Text>
                    </Link>
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
        backgroundColor: "#f6f6f6",
        height:40,
        marginTop:20,
        justifyContent: 'center',

    },
    menuBar: {
        justifyContent: 'space-around',
        // backgroundColor: "#6050f6",
        flexDirection: 'row',


    }
})

TopBar.propTypes = {
    routes: PropTypes.array,
}


export default TopBar ;
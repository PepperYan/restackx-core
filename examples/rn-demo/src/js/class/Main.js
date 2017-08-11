
import React, {PropTypes} from 'react';
import {observable, computed, reaction} from 'mobx'
import {observer} from "mobx-react";
import {BaseComponent} from "restackx-core/lib/BaseComponent";
import {Link,NativeRouter,Route} from 'react-router-native';
import TopBar from '../component/TopBar'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

const routes = [
    {
        "path":"/",
        "title":"first"
    },{
        "path":"/second",
        "title":"second"
    },{
        "path":"/third",
        "title":"third"
    }
    ];
@observer
class Main extends BaseComponent {
    @observable id;

    render() {
        return (
            <View style={styles.container}>
                <NativeRouter>
                    <View style={{height:250}}>
                        <TopBar routes={routes}/>
                        <Route exact path={routes[0].path} component={First}/>
                        <Route path={routes[1].path} component={Second}/>
                        <Route path={routes[2].path} component={Third}/>
                    </View>
                </NativeRouter>

                <Link replace={true} component={TouchableOpacity} to={'/'}>
                    <Text style={styles.instructions} >back</Text>
                </Link>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#ffb283',
    },
    instructions: {
        color: '#376aff',
        fontSize: 16,
        textAlign: 'center',

    },
    text: {
        margin:80,
        textAlign:"center",
        justifyContent: 'space-around',
        color: '#3768ff',
        fontSize: 20,
        fontWeight:("bold"),
        fontStyle:"italic",
        fontFamily:'Georgia'

    }
});

Main.prototypes = {
}


const First = ()=> (
    <Text style={styles.text}>first</Text>
)
const Second = ()=> (
    <Text style={styles.text}>Second</Text>
)
const Third = ()=>(
    <Text style={styles.text}>third</Text>
)

export default Main;
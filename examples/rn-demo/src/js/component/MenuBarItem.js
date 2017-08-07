import React, {Component,PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

// import { Route, Link} from 'react-router-native';

class MenuBarItem extends Component {
    static defaultProps = {
        title:"",
        isSelect:false,
        onChangeRoutePath:()=>{},

    }
    static propTypes = {
        title:PropTypes.string,
        isSelect: PropTypes.bool,
        onChangeRoutePath:PropTypes.func,
    }
    componentDidMount(){


    }
    render (){
        return (
            <TouchableOpacity onPress={this.props.onChangeRoutePath}>
                <View style={styles.container}>
                    <Text style={{
                        color:this.props.isSelect?"#ff9148":"#adadad",
                        textAlign: 'center',
                        fontSize: 14,
                    }}>
                        {this.props.title}
                    </Text>
                </View>

            </TouchableOpacity>

        )
    }

}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        height:35,
    }
});

export default MenuBarItem;
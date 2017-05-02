import React, { Component } from 'react'

import PropTypes from 'prop-types'
import _ from 'lodash'
var HeaderBar = require('../../components/ui/framework/header-bar/header-bar');
var NavBar = require('../../components/ui/framework/header-bar/header-navbar');
import SiderBar from '../../components/ui/framework/sider-bar'


export default class App extends Component {

    static propTypes ={

    }

    onClickMenu(e) {
    }

    render() {

        return (
            <div>
                <HeaderBar isShow={{nav:true, notifications:true}} title="React Demo">
                    <NavBar isShow={{notifications:true}}/>
                </HeaderBar>
                <SiderBar title={'hibad'} mainheader="管理列表">
                    <li><a href="javascript:void(0)" onClick={this.onClickMenu.bind(this)} data-link="/"><i
                        className="fa fa-book"></i> <span>Index</span></a></li>
                      <li><a href="javascript:void(0)" onClick={this.onClickMenu.bind(this)} data-link="/pagetwo"><i
                            className="fa fa-book"></i> <span>Page2</span></a></li>
                </SiderBar>
                <div className="content-wrapper" style={{minHeight: 916}}>
                    <section className="content">
                        {this.props.children}
                    </section>
                </div>
            </div>
        )
    }
}

import React,{Component} from 'react'
import { render } from 'react-dom'
import { Router} from 'react-native-router-flux'
import {Provider} from './Provider'

export class App extends Component{
  render(){
    return (
      <Provider store={this.props.store}>
        <Router>
          {this.props.routes}
        </Router>
      </Provider>
    )
  }
}

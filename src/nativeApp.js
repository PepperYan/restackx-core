import React,{Component} from 'react'
import { render } from 'react-dom'
import { NativeRouter} from 'react-router-native'
import {Provider} from './Provider'

export class App extends Component{
  render(){
    return (
      <Provider store={this.props.store}>
        <NativeRouter>
          {this.props.routes}
        </NativeRouter>
      </Provider>
    )
  }
}

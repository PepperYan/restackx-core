import React,{Component} from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from './Provider'

export class App extends Component{
  render(){
    return (
      <Router>
        <Provider store={this.props.store}>
          {this.props.routes}
        </Provider>
      </Router>
    )
  }
}
//<IndexRoute component={App}/>

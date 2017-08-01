import React,{Component} from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from './Provider'
let Router;

export class App extends Component{

  componentWillMount(){
    if(this.props.router){
      Router = this.props.router
    }
  }

  render(){
    
    return (
      <div>
        {
          !this.props.router && 
          <BrowserRouter>
            <Provider store={this.props.store}>
              {this.props.routes}
            </Provider>
          </BrowserRouter>
        }
        {
          this.props.router && 
          <Router>
            <Provider store={this.props.store}>
              {this.props.routes}
            </Provider>
          </Router>
        }
      </div>
    )
  }
}

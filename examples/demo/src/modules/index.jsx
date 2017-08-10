import React,{Component} from 'react'
import { render } from 'react-dom'
import routes from './routes'
import Store from './stores'
import {App} from 'restackx-core'

const container = document.getElementById('container');
render(
  <App store={Store} routes={routes}/>,
  container
)

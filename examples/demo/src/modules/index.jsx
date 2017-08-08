import React,{Component} from 'react'
import { render } from 'react-dom'
import { Router} from 'react-router'
import routes from './routes'
import Store from './store'
import {App} from 'restackx-core'

const container = document.getElementById('container');
render(
  <App store={Store} routes={routes}/>,
  container
)

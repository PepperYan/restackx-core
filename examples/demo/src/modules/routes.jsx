import React from 'react';
import {Route, Switch} from 'react-router-dom'

import App from './demo/App';
import NewComponent from './demo/newcomponent'
import PageTwo from './demo/page2'

export default (
  <Route path="/">
    <App>
      <Switch>
        <Route exact path="/" component={NewComponent}/>
        <Route path="pagetwo" component={PageTwo}/>
      </Switch>
    </App>
  </Route>
);

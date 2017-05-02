import React from 'react';
import {Route, IndexRoute} from 'react-router'

import App from './demo/App';
import NewComponent from './demo/newcomponent'
import PageTwo from './demo/page2'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={NewComponent}/>
    <Route path="pagetwo" component={PageTwo}/>
  </Route>
);

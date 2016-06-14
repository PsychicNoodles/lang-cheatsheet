import React from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import Link from 'react-router/lib/Link'
import hashHistory from 'react-router/lib/hashHistory'

import Main from './main'
import ConsonantRules from './components/consonant-rules'
import NoMatch from './components/no-match'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render((
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='korean'>
        <Route path='consonant-rules' component={ConsonantRules}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
  ), document.getElementById('app'));

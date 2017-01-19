import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory} from 'react-router'

import App from "./app"
import Home from "./home"
import Detail from "./detail"

render (
  (
    <Router history={hashHistory} >
      <Route component={App}>
        <Route path="/" component={Home} />
          <Route path="/contact/:name/:email/:phone/:location" component={Detail} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)

//    <Route path="/project/:name/:url" component={Project} />

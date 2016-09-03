// need these for a basic React app
import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'config/routes'

// need these to wire react app with redux store
import {createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import * as reducers from 'redux/modules'
import { hashHistory } from 'react-router'

// setup our Redux store
const store = createStore(
  combineReducers(
    {
      ...reducers,
      routing: routerReducer
    }
  ),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
)

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    {routes(history)}
  </Provider>,
  document.getElementById('app')
)
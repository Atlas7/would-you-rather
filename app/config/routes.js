import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import {
  MainContainer,
  HomeContainer
} from 'containers'

export default function routes () {
  return (
    <Router history={hashHistory}>
      <Router path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} />
      </Router>
    </Router>
  )
}
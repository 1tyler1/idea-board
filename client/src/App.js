import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import IdeaPage from './components/IdeaPage'

class App extends Component {
<<<<<<< HEAD
  render () {
    return (
      <Router>
        <div>
          <div>
            
          </div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LogInPage}/>
            <Route path="/user/:userId" component={IdeaPage}/>
=======
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LogInPage} />
            <Route path="/user/:userId" component={IdeaPage} />
>>>>>>> 23a1d2b91560543f8428a8a74281fcd835ee5ace
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
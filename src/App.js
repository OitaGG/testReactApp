import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Feed from './components/Feed/Feed'
import Profile from './components/Profile/Profile'

export default class App extends Component {
  render () {
      return(
        <Router>
            <div className="App">
                <Header/>
                <Route path={"/"} component={Feed} exact/>
                <Route path={"/profile"} component={Profile} exact />
            </div>
        </Router>
      );
  }
}
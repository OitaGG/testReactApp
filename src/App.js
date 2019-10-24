import React, {Component} from 'react';
import Header from './components/Header/Header'
import Feed from './components/Feed/Feed'

export default class App extends Component {
  render () {
      return(
        <div className="App">
            <Header/>
            <Feed/>
        </div>
      );
  }
}
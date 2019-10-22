import React, {Component} from 'react';
import Header from './Components/Header/Header'
import Feed from './Components/Feed/Feed'

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
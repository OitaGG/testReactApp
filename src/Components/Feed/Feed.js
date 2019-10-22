import React, {Component} from 'react'
import Posts from './Posts/Posts'
import Users from "./Users/Users";

export default class Feed extends Component {
    render() {
        return(
          <div className="container feed">
              <Posts/>
              <Users/>
          </div>
        );
    }
}
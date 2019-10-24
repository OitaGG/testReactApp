import React, {Component} from 'react'
import Posts from './Posts/Posts'
import Users from "./Users/Users";

const Feed = () => {
        return(
          <div className="container feed">
              <Posts/>
              <Users/>
          </div>
        )
};

export default Feed
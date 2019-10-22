import React, {Component} from 'react'
import Post from './Post/Post'

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://sun9-22.userapi.com/c849128/v849128309/1bc320/aSyNDPcrg6c.jpg" alt="Me"/>
                <Post src="https://sun9-17.userapi.com/c850436/v850436140/1753d5/1MbBErqa0NI.jpg" alt="Me"/>
            </div>
        );
    }
}
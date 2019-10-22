import React, {Component} from 'react'
import User from "../../Users/User/User";

export default class Post extends Component {
    render() {
        return(
            <div className="post">
                <User
                    src="https://sun9-51.userapi.com/c855324/v855324478/1ffba/lNqHS_A1ye4.jpg"
                    alt="AgaingME"
                    name="MEE"
                />
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">
                    Some account
                </div>
                <div className="post__descr">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
            </div>
        )
    }
}
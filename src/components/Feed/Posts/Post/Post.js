import React, {Component} from 'react'
import User from "../../Users/User/User";

const Post = (props) => {
        return(
            <div key={props.id} className="post">
                <User
                    src={props.photo}
                    alt={props.altname}
                    name={props.name}
                    min
                />
                <img src={props.src} alt={props.alt}/>
                <div className="post__name">
                    {props.name}
                </div>
                <div className="post__descr">
                    {props.descr}
                </div>
            </div>
        )
};

export default Post
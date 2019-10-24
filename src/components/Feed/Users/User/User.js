import React, {Component} from 'react'


const User = (props) => {
    return(
        <a href="#" className={props.min ? "user min" : "user"}>
            <img src={props.src} alt={props.alt}/>
            <div>{props.name}</div>
        </a>
    );
};

export default User
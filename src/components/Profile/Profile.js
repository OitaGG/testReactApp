import React from 'react'
import User from "../Feed/Users/User/User";
import Palette from "../Palette/Palette";

const Profile = () => {
    return(
        <div className={"container"}>
            <User
                src={"https://sun9-22.userapi.com/c849128/v849128309/1bc320/aSyNDPcrg6c.jpg"}
                alt={"me"}
                name={"Ilya"}
            />
            <Palette/>
        </div>
    );
};

export default Profile
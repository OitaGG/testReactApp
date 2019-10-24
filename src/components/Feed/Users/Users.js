import React, {Component} from 'react'
import User from "./User/User";

const Users = () => {
    return(
        <div className="right">
            <User
                src="https://sun9-51.userapi.com/c855324/v855324478/1ffba/lNqHS_A1ye4.jpg"
                alt="AgaingME"
                name="MEE"
            />
            <div className="users__block">
                <User
                    src="https://sun9-51.userapi.com/c855324/v855324478/1ffba/lNqHS_A1ye4.jpg"
                    alt="AgaingME"
                    name="MEE"
                    min
                />
                <User
                    src="https://sun9-51.userapi.com/c855324/v855324478/1ffba/lNqHS_A1ye4.jpg"
                    alt="AgaingME"
                    name="MEE"
                    min
                />
                <User
                    src="https://sun9-51.userapi.com/c855324/v855324478/1ffba/lNqHS_A1ye4.jpg"
                    alt="AgaingME"
                    name="MEE"
                    min
                />
            </div>
        </div>
    )
};

export default Users
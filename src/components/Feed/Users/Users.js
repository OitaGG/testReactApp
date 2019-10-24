import React, {Component} from 'react'
import User from "./User/User";
import InstaService from '../../../services/instaService'
import ErrorMessage from "../../Error/Error";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        error: false,
        users: [],
        loading: true,
    };

    componentDidMount() {
        this.updateUsers();
    };

    updateUsers() {
        this.InstaService.getAllUsers()
            .then(this.onUserLoaded)
            .catch(this.onError)
    };

    onError = (err) => {
        console.log(err);
        this.setState({
            error: true,
        })
    };

    onUserLoaded = (users) => {
        this.setState({
            error: false,
            users,
            loading: false,
        })
    };

    renderItems = (arrayUsers) => {
        return arrayUsers.map(user => {
            return(
                <User src={user.photo} name={user.name} alt={user.alt} min/>
            );
        });
    };

    render() {
        const {error, users, loading} = this.state;
        if(error){
            return (
                <ErrorMessage/>
            );
        }

        if(loading){
            return (
                <LoadingSpinner/>
            );
        }

        const items = this.renderItems(users);
        return (
            <div className={"right"}>
                <User
                    src={"https://sun9-22.userapi.com/c849128/v849128309/1bc320/aSyNDPcrg6c.jpg"}
                    alt={"me"}
                    name={"Ilya"}
                />
                <div className={"users__block"}>
                    {items}
                </div>
            </div>
        );
    }

};


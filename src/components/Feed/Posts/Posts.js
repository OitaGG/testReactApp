import React, {Component} from 'react'
import InstaService from '../../../services/instaService'
import Post from './Post/Post'
import ErrorMessage from "../../Error/Error";

export default class Posts extends Component {
    InstaService = new InstaService();

    state = {
        posts: [],
        error: false,
    };

    componentDidMount() {
        this.updatePosts();
    };

    updatePosts() {
        this.InstaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError);
    };

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false,
        });
        console.log(this.state.posts)
    };

    onError = (error) => {
        this.setState({
            error: true,
        })
    };

    renderItems(array) {
        return array.map(item => {
            const {name, altname, photo, src, alt, descr, id} = item;
            return (<Post name={name}
                          altname={altname}
                          photo={photo}
                          src={src}
                          alt={alt}
                          descr={descr}
                          id={id}
            />)
        });
    };

    render() {
        const {error, posts} = this.state;
        if(error) {
            return <ErrorMessage/>
        }
        const items = this.renderItems(posts);
        return (
            <div className="left">
                {items}
            </div>
        );
    }
}
import React, {Component} from 'react'
import InstaService from '../../services/instaService'
import ErrorMessage from "../Error/Error";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default class Palette extends Component{
    InstaService = new InstaService();
    state = {
        error: false,
        photos: [],
        loading: true,
    };

    componentDidMount() {
        this.updatePhotos();
    };

    updatePhotos() {
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    };

    onError = (err) => {
        this.setState({
            error: true,
        })
    };

    onPhotosLoaded = (photos) => {
        this.setState({
            error: false,
            photos,
            loading: false,
        })
    };

    renderItems(array) {
        return array.map(item => {
            return(
                <img src={item.src} alt={item.alt}/>
            )
        });
    }

    render() {
        const {error, photos, loading} = this.state;
        if(error){
            return <ErrorMessage/>
        }

        if(loading){
            return <LoadingSpinner/>
        }

        const items = this.renderItems(photos);
        return(
            <div className={"palette"}>
                {items}
            </div>
        );
    }
}

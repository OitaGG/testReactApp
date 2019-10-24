export default class instaService {
    constructor(){
        this._apiBase = 'http://localhost:3000/';
    };

    getResources = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}; recieved ${res.status}`);
        }

        return await res.json();
    };

    getAllPosts = async () => {
        return await this.getResources('posts/');
    }
}
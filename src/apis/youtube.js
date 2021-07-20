import axios from 'axios';
const KEY = 'AIzaSyCOU_wy7UqLE_s87B2eF8Oq0Y2sErB9q8o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

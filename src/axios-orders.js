import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e9d8c.firebaseio.com/'
});

export default instance;

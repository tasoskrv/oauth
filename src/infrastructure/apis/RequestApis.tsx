import axios from 'axios';

export default axios.create({
    // baseURL: 'http://192.168.1.119:8080/oauth/server/index.php'
    //baseURL: 'https://u497761731.hostingerapp.com/oauth/server/index.php'
    baseURL:'http://127.0.0.1:8080/oauth/server/index.php/'
});  
import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.1.129:8080/oauth/server/index.php'
});
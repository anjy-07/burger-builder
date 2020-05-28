import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://login-56aac.firebaseio.com/'
})

export default instance;
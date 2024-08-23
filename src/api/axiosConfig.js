import axios from 'axios';

export default axios.create({
    baseURL:'https://e591-78-164-134-254.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})
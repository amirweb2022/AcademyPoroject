import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/v1";

const http = {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
};

export default http;
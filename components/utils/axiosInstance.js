import axios from "axios";

const Instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL
});

Instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Instance.defaults.withCredentials = true;

export default Instance;
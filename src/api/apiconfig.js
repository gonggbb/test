import axios from "axios"
const http  = axios.create({
        baseURL:'',
        timeout:5000,
        headers: {
                'Content-Type': 'application/json;charset=UTF-8'
        }
})
http.interceptors.request.use(
        config => config,
        error => Promise.reject(error)
)
http.interceptors.response.use(
        respomse => respomse,
        error => Promise.reject(error)
)
export default http
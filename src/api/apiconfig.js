import axios from "axios"
import {
	Loading
} from 'element-ui'
let loading
const http  = axios.create({
        baseURL:'',
        timeout:5000,
        headers: {
                'Content-Type': 'application/json;charset=UTF-8'
        }
})
http.interceptors.request.use(
        config => {
                console.log('startLoading =============')
                loading = Loading.service({
                        lock: true,
                        text: "loading......",
                        // spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                })
               return config
        },
        error => Promise.reject(error)
)
http.interceptors.response.use(
        respomse => {
                setTimeout(() => {
                   console.log('endLoading==========')
                   loading.close() 
                }, 2000);
             return respomse
        },
        error => Promise.reject(error)
)
export default http
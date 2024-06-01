import axios from 'axios'
// 创建axios实例
const request = axios.create({
    // 这里可以放一下公用属性等。
    baseURL: 'http://localhost:8080',
    withCredentials: false,
    timeout: 3 * 1000,
})

export default request;
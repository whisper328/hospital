import axios from 'axios'

//请求头加入cookie
axios.defaults.withCredentials = true
//设置post请求数据的格式
axios.defaults.headers.post['Content-Type'] = 'application/json'
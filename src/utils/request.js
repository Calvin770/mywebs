import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response;
}, function(error) {
    switch (error.response.status) {
        case 401:
            this.$message.error('无权限');
            break;
        case 404:
            this.$message.error('无页面');
            break;
        case 500:
            this.$message.error('服务器错误');
            break;
    }
    // 对响应错误做点什么
    return Promise.reject(error);
    //12．正确进行axios的封装，根据状态码集中处理错误情况（
});

export default axios
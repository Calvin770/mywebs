import axios from '../utils/request'

export const gethomebg = () => axios.get('/api/site/homepagebg') //获取首页背景图

export const getrouter = () => axios.get('/api/oub/router_msg') //获取路由信息
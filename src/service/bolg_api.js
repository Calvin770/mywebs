import axios from '../utils/request'

export const getContact = () => axios.get('/api/site/contcat')
export const getKnowInfo = (params) => axios.get(`/api/site/knowinfo?key=${params}`)
export const changeLikeCount = (msg) => axios.get(`/api/site/changelike_count?key=${msg.key}&id=${msg.id}&count=${msg.count}`)
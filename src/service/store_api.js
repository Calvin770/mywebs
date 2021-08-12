import axios from '../utils/request'

export const getStoreInfoList = (key) => axios.get(`/api/site/storeinfo?key=${key}`)
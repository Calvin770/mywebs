import { gethomebg, getrouter } from '../service/home_api'
const state = {
    HomeBgMsg: {},
    homeMyMsg: {},
    RouterMsg: []
}
const mutations = {
    setHomeMsg(state, payload) {
        state.HomeBgMsg = payload[0]
        state.homeMyMsg = payload[1]
    },
    setRouter(state, payload) {
        state.RouterMsg = payload
    }
}
const actions = {
    async getHomeMsg({ commit }) {
        let res = await gethomebg();
        commit('setHomeMsg', res.data)

    },
    async getRouter({ commit }) {
        let res = await getrouter();
        commit('setRouter', res.data)
    },
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters,
}
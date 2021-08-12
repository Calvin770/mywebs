import { getContact } from '../service/bolg_api'
const state = {
    contactList: [],
    tapList: [{
        name: "JavaScript",
        key: 'jsbolg',
        id: 1,
    }, {
        name: "CSS",
        key: 'cssbolg',
        id: 2,
    }, {
        name: "HTML",
        key: 'htmlbolg',
        id: 3,
    }, {
        name: "框架和库",
        key: 'frameworkbolg',
        id: 4,
    }, {
        name: "读书",
        key: 'readbolg',
        id: 5,
    }, {
        name: "摄影",
        key: 'photographybolg',
        id: 6,
    }],

}
const mutations = {
    setContactMsg(state, payload) {
        state.contactList = payload
    }
}
const actions = {
    async getContactMsg({ commit }) {
        let res = await getContact();
        commit('setContactMsg', res.data)

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
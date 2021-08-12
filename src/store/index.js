import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Home from './home_request.js'
import Bolg from './boolg_request'
import Store from './store_request'
import Info from './info_request'
export default new Vuex.Store({
    modules: {
        Home,
        Bolg,
        Store,
        Info
    }
})
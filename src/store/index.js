import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isAuthenticated: false
  },
  getters: {
    getIsAuthenticated(state) {
      return state.isAuthenticated
    }
  },
  mutations: {
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value
    }
  }
})

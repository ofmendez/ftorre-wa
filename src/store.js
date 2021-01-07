import Vue from 'vue'
import Vuex from 'vuex'
const gatewayURL = 'https://ftorre-api-gateway.herokuapp.com/graphql'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {
    gatewayURL: () => gatewayURL
  }
})

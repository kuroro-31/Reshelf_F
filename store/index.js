import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import authenticate from './authenticate'
import cart from './cart'

const store = () => {
  return new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
      authenticate,
      cart,
    },
  })
}

export default store

import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import authenticate from './authenticate'
import cart from './cart'
import post from './post'

const store = () => {
  return new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
      authenticate,
      post,
      cart,
    },
  })
}

export default store

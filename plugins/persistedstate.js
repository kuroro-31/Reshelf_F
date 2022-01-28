import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = () => {
  return new Vuex.Store({
    plugins: [createPersistedState()],
  })
}

export default store

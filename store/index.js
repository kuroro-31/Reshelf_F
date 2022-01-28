import Vuex from 'vuex'
import cart from './shop/cart'
import cource from './shop/cource'
import user from './user'

const store = () => {
  return new Vuex.Store({
    modules: {
      user,
      cource,
      cart,
    },
  })
}

export default store

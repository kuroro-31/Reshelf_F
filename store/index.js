import Vuex from 'vuex'
import cart from './cart.js'
import post from './shop/post'
import user from './user.js'

export const store = () => {
  return new Vuex.Store({
    modules: {
      user,
      post,
      cart,
    },
  })
}

import Vuex from 'vuex'
import cart from './shop/cart'
import post from './shop/post'
import user from './user'

export const store = () => {
  return new Vuex.Store({
    modules: {
      user,
      post,
      cart,
    },
  })
}

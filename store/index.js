import Vuex from 'vuex'
import cart from './shop/cart'
import post from './shop/post'
import user from './user'

const store = () => {
  return new Vuex.Store({
    modules: {
      user,
      post,
      cart,
    },
  })
}

export default store

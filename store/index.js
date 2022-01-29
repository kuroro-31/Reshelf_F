import Vuex from 'vuex'

export const store = () => {
  return new Vuex.Store({
    modules: {
      user: {
        name: 'user',
        namespaced: true,
      },
      post: {
        name: 'post',
        namespaced: true,
      },
      cart: {
        name: 'cart',
        namespaced: true,
      },
    },
  })
}

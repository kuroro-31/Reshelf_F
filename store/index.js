import Vuex from 'vuex'

export const store = () => {
  return new Vuex.Store({
    modules: {
      user: {
        name: 'user',
        namespaced: true,
      },
      product: {
        name: 'product',
        namespaced: true,
      },
      cart: {
        name: 'cart',
        namespaced: true,
      },
    },
  })
}

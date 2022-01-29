// import actions from './actions'
// import getters from './getters'
// import mutations from './mutations'
// import state from './state'

// export default {
//   name: 'cart',
//   namespaced: true,
//   state: state,
//   getters: getters,
//   mutations: mutations,
//   actions: actions,
// }

export const state = () => ({
  cart: null,
})
export const getters = {
  cart(state) {
    return state.cart
  },
}

export const mutations = {
  setCart(state, value) {
    state.cart = value
  },
}

export const actions = {
  async add({ rootState, commit }, data) {
    await this.$axios
      .$post('/api/cart/add', {
        post_id: data.id,
      })
      .then((response) => {
        commit('setCart', response.data)

        // user情報をもってくる
        let userState = {
          user: rootState.authenticate.user,
        }
        this.$router.push({
          path: `/user/${userState.user.id}/cart`,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  async get({ commit }) {
    await this.$axios
      .$get(`/api/cart`)
      .then((response) => {
        commit('setCart', response.data)
      })
      .catch((error) => {
        if (error.response.status == '401') {
          this.$store.dispatch('user/logout')
          this.$router.push('/auth/login')
        } else if (error.response.status == '404') {
          this.$router.push('/error/404')
        } else if (error.response.status == '500') {
          this.$router.push('/error/500')
        } else {
          alert(error)
          console.log(error)
        }
      })
  },
  async clear({ commit }, data) {
    await this.$axios
      .$post(`/api/cart/delete/${data.id}`)
      .then((response) => {
        commit('setCart', response.data)
        location.reload()
      })
      .catch((error) => {
        console.log(error)
      })
  },
  nuxtServerInit({ commit }) {
    commit('setCart')
  },
}

export default {
  name: 'user',
  namespaced: true,
}

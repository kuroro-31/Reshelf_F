const state = {
  cart: null,
}

const getters = {
  cart(state) {
    return state.cart
  },
}

const mutations = {
  setCart(state, value) {
    state.cart = value
  },
}

const actions = {
  add({ rootState, commit }, data) {
    try {
      this.$axios
        .$post('/api/cart/add', {
          post_id: data.id,
        })
        .then((response) => {
          commit('setCart', response.data)

          const userState = {
            user: rootState.authenticate.user,
          }
          this.$router.push({
            path: `/user/${userState.user.id}/cart`,
          })
        })
    } catch (error) {
      console.log(error)
    }
  },
  get({ commit }) {
    try {
      this.$axios.$get(`/api/cart`).then((response) => {
        commit('setCart', response.data)
      })
    } catch (error) {
      if (error.response.status == '401') {
        this.stateLogout()
        this.$router.push('/auth/login')
      } else if (error.response.status == '404') {
        this.$router.push('/error/404')
      } else if (error.response.status == '500') {
        this.$router.push('/error/500')
      }
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

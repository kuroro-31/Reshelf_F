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

          // user情報をもってくる
          let userState = {
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
      console.log(error)
    }
  },
  clear({ commit }, data) {
    this.$axios.$post(`/api/cart/delete/${data.id}`).then((response) => {
      commit('setCart', response.data)
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

export const state = () => ({
  carts: [],
})

export const getters = {
  carts(state) {
    return state.carts
  },
}

export const mutations = {
  setCart(state, value) {
    let array = []
    array = state.carts.push(value)
    return array
  },
}

export const actions = {
  async add({ rootState, commit }, data) {
    await this.$axios.$post('/api/cart/add', {
      post_id: data.id,
    })
    // .then((response) => {
    commit('setCart', data)
    // user情報をもってくる
    let userState = {
      user: rootState.user.user,
    }
    this.$router.push({
      path: `/user/${userState.user.id}/cart`,
    })
    // })
    // .catch((error) => {
    //   alert(error)
    //   console.log(error)
    // })
  },
  async get({ commit }) {
    await this.$axios
      .$get(`/api/cart`)
      .then(({ data }) => {
        commit('setCart', data)
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
  },
  async clear({ commit }, data) {
    await this.$axios
      .$post(`/api/cart/delete/${data.id}`)
      .then(() => {
        commit('setCart', null)
        // location.reload()
      })
      .catch((error) => {
        console.log(error)
      })
  },
  nuxtServerInit({ commit }) {
    commit('setCart')
  },
}

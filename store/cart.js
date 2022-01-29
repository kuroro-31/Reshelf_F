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
        // let userState = {
        //   user: rootState.user.user,
        // }
        // this.$router.push({
        //   path: `/user/${userState.user.id}/cart`,
        // })
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
  },
  async get({ commit }) {
    const { data } = await this.$axios.$get(`/api/cart`)
    commit('setCart', data).catch((error) => {
      alert(error)
      console.log(error)
    })
    // await this.$axios
    //   .$get(`/api/cart`)
    //   .then(({ data }) => {
    //     commit('setCart', data)
    //   })
    //   .catch((error) => {
    //     alert(error)
    //     console.log(error)
    //   })
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

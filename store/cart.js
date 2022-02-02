export const state = () => ({
  carts: [],
  cartsCount: 0,
})

export const getters = {
  carts(state) {
    return state.carts
  },
  cartsCount(state) {
    return state.cartsCount
  },
}

export const mutations = {
  resetCart(state, value) {
    state.carts = value
  },
  setCart(state, value) {
    let array = []

    if (value != null) {
      array = state.carts.push(value)
    }

    const array2 = Array.from(new Set(array))
    state.carts = array2
    state.cartsCount++
  },
  deleteCart(state, id) {
    // Create a new array other than to be deleted
    const afterCart = state.carts.filter((cart) => cart.id !== id)
    state.carts = afterCart
    state.cartsCount--
  },
}

export const actions = {
  async add({ rootState, commit }, data) {
    await this.$axios
      .$post('/api/cart/add', {
        post_id: data.id,
      })
      .then(() => {
        commit('setCart', data)
        // user情報をもってくる
        let userState = {
          user: rootState.user.user,
        }
        this.$router.push({
          path: `/user/${userState.user.id}/cart`,
        })
      })
      .catch((error) => {
        alert(error)
        // commit('setCart', null)
      })
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
  async clear({ commit, state }, data) {
    await this.$axios
      .$post(`/api/cart/delete/${data.id}`)
      .then(() => {
        commit('deleteCart', data.id)
        // commit('resetCart', null)
        alert('成功！')
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
  },
  nuxtServerInit({ commit }) {
    commit('setCart', 'resetCart' < 'deleteCart')
  },
}

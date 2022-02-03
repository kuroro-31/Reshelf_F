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
    state.carts = value
  },
  deleteCart(state, id) {
    // Create a new array other than to be deleted
    const afterCart = state.carts.filter((cart) => cart.id !== id)
    state.carts = afterCart
  },
}

export const actions = {
  async reset({ commit }) {
    await commit('setCart', null)
  },
  async add({ rootState, commit }, data) {
    await this.$axios
      .$post('/api/cart/add', {
        post_id: data.id,
      })
      .then((data) => {
        commit('setCart', data)
      })
      .catch((error) => {
        if (error.response.status == '401') {
          this.$router.push('/auth/login')
        } else if (error.response.status == '404') {
          this.$router.push('/error/404')
        } else if (error.response.status == '500') {
          this.$router.push('/error/500')
        }
      })

    // user情報をもってくる
    // let userState = {
    //   user: rootState.user.user,
    // }
    // this.$router.push({
    //   path: `/user/${userState.user.id}/cart`,
    // })
    // })
    // .catch((error) => {
    //   alert('カート追加エラー' + error)
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
        // alert('カート取得エラー' + error)
        console.log(error)
      })
  },
  async clear({ commit }, data) {
    await this.$axios
      .$post(`/api/cart/delete/${data.id}`)
      .then(() => {
        commit('deleteCart', data.id)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  nuxtServerInit({ commit }) {
    commit('setCart', 'deleteCart')
  },
}

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

    if (value != null) {
      array = state.carts.push(value)
    }

    const array2 = Array.from(new Set(array))
    state.carts = array2
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
    // .catch((error) => {
    //   if (error.response.status == '401') {
    //     this.$router.push('/auth/login')
    //   } else if (error.response.status == '404') {
    //     this.$router.push('/error/404')
    //   } else if (error.response.status == '500') {
    //     this.$router.push('/error/500')
    //   }
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
  async clear({ commit, state }, data) {
    await this.$axios
      .$post(`/api/cart/delete/${data.id}`)
      .then(() => {
        commit('setCart', null)

        // let stateCarts = state.carts
        // let newCart = stateCarts.filter((stateCart) => {
        //   if (stateCart.id != data.id) {
        //     return stateCart
        //   }
        // })
        // commit('setCart', newCart)
        // commit('setCart', null)
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

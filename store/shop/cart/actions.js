export default {
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
        console.log(error)
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
  nuxtClientInit({ commit }, context) {
    commit('setCart')
  },
}

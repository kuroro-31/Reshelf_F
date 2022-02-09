export const state = () => ({
  product: null,
})

export const getters = {
  product(state) {
    return state.product
  },
}

export const mutations = {
  setProduct(state, value) {
    state.product = value
  },
}

export const actions = {
  async get({ commit }) {
    await this.$axios
      .$get(`/api/posts`)
      .then(({ data }) => {
        commit('setProduct', data)
      })
      .catch((error) => {
        if (error.response.status == '401') {
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
  async create({ commit }) {
    // try {
    await this.$axios.$post('/api/posts')
    // .then(({ data }) => {
    //   this.$router.push(`/item/edit/${data.id}`)
    //   commit('setProduct', data)
    // })
    // .catch((error) => {
    // if (error.response.status == '401') {
    //   this.stateLogout()
    //   this.$router.push('/auth/login')
    // } else if (error.response.status == '404') {
    //   this.$router.push('/error/404')
    // } else if (error.response.status == '500') {
    //   this.$router.push('/error/500')
    // }
    // })
  },
  async delete({ commit }, id) {
    await this.$axios.$delete(`/api/posts/${id}`).then(() => {
      commit('setProduct', null)
    })
  },
  nuxtServerInit({ commit }) {
    commit('setProduct')
  },
}

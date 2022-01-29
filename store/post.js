export const state = () => ({
  post: null,
})

export const getters = {
  post(state) {
    return state.post
  },
}

export const mutations = {
  setPost(state, value) {
    state.post = value
  },
}

export const actions = {
  nuxtServerInit({ commit }) {
    commit('setPost')
  },
}

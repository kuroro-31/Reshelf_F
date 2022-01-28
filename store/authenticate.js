const state = {
  authenticated: false,
  user: null,
}

const getters = {
  authenticated(state) {
    return state.authenticated
  },
  user(state) {
    return state.user
  },
}

const mutations = {
  setAuthed(state, value) {
    state.authenticated = value
  },
  setUser(state, value) {
    state.user = value
  },
}

const actions = {
  async register({ commit }, data) {
    await this.$axios
      .$post('/api/auth/register', data)
      .then((response) => {
        commit('setUser', response)
      })
      .catch((error) => {
        alert(error)
      })
  },
  async login({ commit }, data) {
    commit('setUser', data)
    commit('setAuthed', true)
  },
  async logout({ commit }) {
    commit('setUser', null)
    commit('setAuthed', false)
    this.$router.push({ path: '/' })
  },
  async update({ commit }, data) {
    await this.$axios
      .$patch(`/api/users/${data.id}`, data)
      .then(({ data }) => {
        commit('setUser', data)
      })
      .catch(({ response: { data } }) => {
        console.log(data.message)
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

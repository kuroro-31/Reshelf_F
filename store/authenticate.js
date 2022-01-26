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
  register({ commit }, data) {
    const response = this.$axios.post('/api/auth/register', data)
    commit('setUser', response.data)
  },
  login({ commit }, data) {
    try {
      this.$axios.$post('/api/auth/login', data).then(() => {
        this.$axios.$get('/api/user').then(({ data }) => {
          commit('setUser', data)
          commit('setAuthed', true)
          this.$router.back()
        })
      })
    } catch (error) {
      commit('setUser', {})
      commit('setAuthed', false)

      if (error.response.status == '401') {
        this.logout()
        this.$router.push('/auth/login')
      } else if (error.response.status == '404') {
        this.$router.push('/error/404')
      } else if (error.response.status == '500') {
        this.$router.push('/error/500')
      }
    }
  },
  logout({ commit }) {
    this.$axios.$post('/api/logout')
    commit('setUser', null)
    commit('setAuthed', false)
    this.$router.push({ path: '/' })
  },
  update({ commit }, data) {
    this.$axios
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

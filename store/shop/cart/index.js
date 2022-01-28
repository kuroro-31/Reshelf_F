import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

export default {
  name: 'cart',
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
}

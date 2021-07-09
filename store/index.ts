import { getAccessorType } from 'typed-vuex'

export const state = () => ({})
export const getters = {}
export const mutations = {}
export const actions = {}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    // ディレクトリ名
    // ００: {
    modules: {
      // 追加したいモジュール
      // hoge,
    },
    // },
  },
})

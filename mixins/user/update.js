import _ from 'lodash'

export const update = {
  async asyncData({ $axios, params }) {
    const { data } = await $axios.$get(`/api/users/${params.id}`)
    return { user: data }
  },
  data() {
    return {
      user: {
        name: '',
      },
      saved: false,
      alert: '',
    }
  },
  watch: {
    user: {
      handler: _.debounce(function () {
        this.update()
      }, 2000), // 更新されたら保存処理
      deep: true,
    },
    saved: {
      // 保存完了後にアラートを消す
      handler: _.debounce(function () {
        this.clearAlert()
      }, 2000),
      deep: true,
    },
  },
  methods: {
    async update() {
      this.alert = '保存中です...'
      await this.$axios
        .$patch(`/api/users/${this.$route.params.id}`, this.user)
        .then(({ data }) => {
          this.alert = '保存しました。'
          this.saved = true
        })
        .catch(({ response: { data } }) => {
          alert(data.message)
        })
    },
    clearAlert() {
      this.alert = ''
    },
  },
}

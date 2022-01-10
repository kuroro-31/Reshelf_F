import _ from 'lodash'
import { mapGetters } from 'vuex'

export const update = {
  middleware: 'authenticated',
  async asyncData({ $axios, params }) {
    const { data } = await $axios.$get(`/api/posts/${params.id}`)
    return { post: data }
  },
  data() {
    return {
      post: {
        title: '',
        body: '',
        tags: [],
      },
      saved: false,
    }
  },
  watch: {
    post: {
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
    ...mapGetters({
      authenticated: 'authenticate/authenticated',
    }),
    async update() {
      this.alert = '保存中です...'
      await this.$axios
        .$patch(`/api/posts/${this.$route.params.id}`, this.post)
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

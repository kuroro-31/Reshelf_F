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
    }
  },
  watch: {
    post: {
      handler: _.debounce(function () {
        this.update()
      }, 2000), // memosのデータの更新が終わった2秒後に実行される
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
        })
        .catch(({ response: { data } }) => {
          alert(data.message)
        })
    },
  },
}

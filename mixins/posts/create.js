import { mapGetters } from 'vuex'

export const create = {
  methods: {
    ...mapGetters({
      authenticated: 'authenticate/authenticated',
    }),
    async create() {
      if (!this.authenticated) {
        this.$nuxt.$router.push({ path: '/auth/login' })
      } else {
        await this.$axios
          .$post('/api/posts')
          .then(({ data }) => {
            this.$nuxt.$router.push(`/item/edit/${data.id}`)
          })
          .catch(({ response: { data } }) => {
            console.log(data.message)
            alert('再度ログインしてください。')
            this.$nuxt.$router.push(`/auth/login`)
          })
      }
    },
  },
}

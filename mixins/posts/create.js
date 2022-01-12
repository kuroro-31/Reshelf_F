import { mapGetters } from 'vuex'

export const create = {
  data() {
    return {
      create_success: false,
      create_error: false,
    }
  },
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
            this.create_success = true
            setTimeout(() => (this.create_success = false), 3000)

            this.$nuxt.$router.push(`/item/edit/${data.id}`)
          })
          .catch(({ response: { data } }) => {
            // console.log(data.message)
            alert('セッションが切れました。再度ログインしてください。')
            location.reload(`/auth/login`)
          })
      }
    },
  },
}

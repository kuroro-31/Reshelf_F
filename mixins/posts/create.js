import { mapGetters } from 'vuex'

export const create = {
  data() {
    return {
      success: false,
      // create_error: false,
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
            // setTimeout(() => (this.success = false), 10000)

            this.$nuxt.$router.push({
              path: `/item/edit/${data.id}`,
              params: { success: true },
            })
          })
          .catch(({ response: { data } }) => {
            console.log(data.message)
            // alert(data.message)
            // location.reload(`/auth/login`)
          })
      }
    },
  },
}

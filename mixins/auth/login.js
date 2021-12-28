import { mapActions } from 'vuex'

export const login = {
  methods: {
    ...mapActions({
      signIn: 'authenticate/login',
    }),
    async login() {
      await this.$axios
        .post('/api/auth/login', this.auth)
        .then(({ data }) => {
          this.signIn()
          this.modal = false
          this.$nuxt.$router.back()
          // this.$nuxt.$router.push({ path: '/' })
        })
        .catch(({ response: { data } }) => {
          alert(data.message)
        })
    },
  },
}

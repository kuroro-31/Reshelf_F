import { mapActions } from 'vuex'

export const logout = {
  methods: {
    ...mapActions({
      signOut: 'authenticate/logout',
    }),
    async logout() {
      this.signOut()
      this.$nuxt.$router.push({ path: '/' })
    },
  },
}

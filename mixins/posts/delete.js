export const destroy = {
  methods: {
    async destroy(id) {
      try {
        await this.$axios.$delete(`/api/posts/${id}`)
        location.reload('/')
      } catch (error) {
        alert(error.message)
      }
    },
  },
}

<template>
  <div @click="AuthProvider('facebook')">
    <re-button class="re-button">
      <button class="re-button-primary-filled bg-primary">
        Facebookで新規登録・ログイン
      </button>
    </re-button>
  </div>
</template>
<script>
import ReButton from '@/components/atoms/ReButton'
export default {
  components: {
    ReButton,
  },
  methods: {
    AuthProvider(provider) {
      var self = this

      this.$auth
        .authenticate(provider)
        .then((response) => {
          self.SocialLogin(provider, response)
        })
        .catch((err) => {
          console.log({ err: err })
        })
    },

    SocialLogin(provider, response) {
      this.$http
        .post('/sociallogin/' + provider, response)
        .then((response) => {
          console.log(response.data)
        })
        .catch((err) => {
          console.log({ err: err })
        })
    },
  },
}
</script>

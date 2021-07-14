<template>
  <div>
    <div v-if="signedIn">
      {{ user.name }}
    </div>
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { isUserSignIn } from '~/utils'

export default Vue.extend({
  async mounted() {
    await this.$nextTick(async function () {
      const signedIn = await isUserSignIn()
      console.log('signedIn?')
      console.log(signedIn)
      if (!signedIn) {
        // this.onSignedOut();
        this.$router.push({ path: '/auth/login' })
      } else {
        // this.onSignedIn();
      }
    })
  },

  beforeDestroy() {
    this.$nuxt.$off('warningSnackbar')
    this.$nuxt.$off('signedIn')
  },
})
</script>

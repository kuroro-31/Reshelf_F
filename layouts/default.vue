<template>
  <div>
    <div v-if="$auth.loggedIn">
      {{ $auth.user.name }}
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
    })
  },

  beforeDestroy() {
    this.$nuxt.$off('warningSnackbar')
    this.$nuxt.$off('signedIn')
  },
})
</script>

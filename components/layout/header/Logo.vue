<template>
  <nuxt-link to="/">
    <img src="@/assets/images/logo.svg" alt="Reshelf logo" />
  </nuxt-link>
</template>
<script>
export default {
  name: 'Logo',
}
</script>
<style lang="scss" scoped>
a {
  @apply h-full;
  background: transparent !important;
}
img {
  @apply h-full;
  max-width: 120px;
}
</style>

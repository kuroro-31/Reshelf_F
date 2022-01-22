<template>
  <h1 @click="top">
    <img src="@/assets/images/logo.svg" alt="Reshelf logo" />
  </h1>
</template>
<script>
export default {
  methods: {
    top() {
      location.reload('/')
    },
  },
}
</script>
<style lang="scss" scoped>
h1 {
  @apply cursor-pointer;
}
a {
  @apply h-full;
  background: transparent !important;
}
img {
  @apply h-full;
  max-width: 120px;
}
</style>

<template>
  <div>
    <transition appear>
      <div
        class="hero"
        :class="!display ? 'hidden' : 'block'"
        @click="display = false"
      ></div>
    </transition>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      display: true,
    }
  },
}
</script>
<style lang="scss" scoped>
.hero {
  @apply w-full duration-200 mb-8 rounded;
  height: 300px;
  background: #000;
}
</style>

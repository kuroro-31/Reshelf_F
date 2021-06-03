<template>
  <div class="item">
    <span class="item-title">受講生</span>
    <nuxt-link class="item-link" to="/user/learning">受講中の教材</nuxt-link>
    <nuxt-link class="item-link" to="/user/like">お気に入り</nuxt-link>
    <nuxt-link class="item-link" to="/user/bought">購入履歴</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.item {
  @apply duration-200 flex flex-col;
  &-title {
    @apply text-sm font-bold pt-2;
    color: var(--sub-color);
  }
  &-link {
    @apply duration-200 px-4 py-2 text-lg w-full h-full;
    color: var(--color);
    &:hover {
      @apply cursor-pointer;
      transform: translateX(5px);
      background-color: rgba($primary, 0.08);
      border-radius: 6px;
    }
  }
}
.title {
  color: var(--color);
}
</style>

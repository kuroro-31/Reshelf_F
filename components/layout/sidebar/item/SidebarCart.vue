<template>
  <div class="flex flex-col">
    <div class="sidebar-search scroll-none">
      <span class="text-xs">合計</span>
      <span class="text-4xl font-bold mb-4 text-black">
        {{ totalPrice | moneyFormat }}
      </span>
    </div>

    <div class="sidebar-search-btn">
      <re-button class="re-button re-button-extra-large no-shadow w-full">
        <button
          type="submit"
          class="re-button-primary bg-primary w-full"
          @click="$router.push('/user/learning')"
        >
          <!-- Search -->
          購入する
        </button>
      </re-button>
    </div>
  </div>
</template>

<script>
//Icons
// import { ChevronRightIcon } from 'vue-feather-icons'
// atoms
import ReButton from '@/components/atoms/ReButton'

export default {
  filters: {
    moneyFormat(num) {
      return (
        '¥' +
        (num || 0)
          .toString()
          .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
      )
    },
  },
  components: {
    ReButton,
  },
  props: {
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isDisabled: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.sidebar-search {
  @apply flex flex-col w-full;
  color: var(--sub-color);
}
</style>

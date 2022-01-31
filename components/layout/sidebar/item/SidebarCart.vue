<template>
  <div class="flex flex-col">
    <div class="sidebar-search scroll-none">
      <span class="text-xs">{{ $t('合計') }}</span>
      <span class="text-4xl font-bold mb-4 text-black">
        {{ $moneyFormat(totalPrice) }}
      </span>
    </div>

    <div class="sidebar-search-btn">
      <re-button class="re-button re-button-extra-large no-shadow w-full">
        <button
          type="submit"
          class="re-button-primary bg-primary w-full"
          @click="checkout"
        >
          <!-- Search -->
          {{ $t('購入する') }}
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
  methods: {
    checkout(products) {
      this.$store.dispatch('cart/checkout', products)
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar-search {
  @apply flex flex-col w-full;
  color: var(--sub-color);
}
</style>

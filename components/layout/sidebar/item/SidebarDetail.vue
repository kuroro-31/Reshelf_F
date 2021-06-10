<template>
  <div class="flex flex-col">
    <div class="sidebar-search scroll-none"></div>

    <div class="sidebar-search-btn">
      <re-button
        class="re-button re-button-small no-shadow"
        :class="isDisabled ? 'no-shadow' : ''"
      >
        <button
          type="submit"
          :class="
            isDisabled
              ? 're-button-disabled no-shadow'
              : 're-button-primary-border'
          "
          :disabled="isDisabled"
          @click="isDisabled = !isDisabled"
        >
          <!-- Search -->
          検索する
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
    // ChevronRightIcon,
    ReButton,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isDisabled: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>

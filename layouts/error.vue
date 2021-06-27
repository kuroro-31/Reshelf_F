<template>
  <div class="w-full h-full mx-auto flex flex-col">
    <HeaderNav />
    <div class="main">
      <ul class="flex flex-col">
        <li
          v-for="(value, key, index) in error"
          :key="index"
          class="text-6xl font-bold flex message"
        >
          {{ key }}
          {{ value }}
        </li>
        <nuxt-link to="/">
          <re-button class="re-button w-32 mt-8">
            <button class="re-button-primary-filled">HOME</button>
          </re-button>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>
<script>
import HeaderNav from '@/components/layout/header/HeaderNav'
import ReButton from '@/components/atoms/ReButton'

export default {
  components: {
    HeaderNav,
    ReButton,
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {}
  },
  head() {
    return {
      title: this.error.message,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.error.message,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.main {
  @apply w-full flex items-center justify-center mx-auto;
  height: calc(100vh - 61px);
  overflow-y: hidden;
}
.message {
  color: var(--sub-color);
}
</style>

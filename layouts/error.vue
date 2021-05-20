<template>
  <div class="w-full h-full mx-auto flex flex-col">
    <HeaderNav />
    <main class="w-full flex items-center justify-center mx-auto">
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
    </main>
  </div>
</template>
<script>
import HeaderNav from '@/components/layout/HeaderNav'
import ReButton from '@/components/atoms/button/ReButton'

export default {
  components: {
    HeaderNav,
    ReButton
  },
  props: {
    error: {
      type: Object,
      default: null
    }
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
          content: this.error.message
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
main {
  height: calc(100vh - 61px);
  overflow-y: hidden;
}
.message {
  color: var(--sub-color);
}
</style>

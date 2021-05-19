<template>
  <div class="w-full h-full mx-auto flex flex-col">
    <HeaderNav />
    <main class="w-full flex items-center justify-center mx-auto">
      <h1 v-if="error && error.statusCode === 404" class="text-6xl font-bold">
        {{ error.statusCode }}
        <br />
        ページが見つかりません
      </h1>
      <h1 v-else-if="error && error.message" class="text-6xl font-bold">
        {{ error.message }}
        <br />
        エラーが発生しました
      </h1>
    </main>
  </div>
</template>
<script>
import HeaderNav from '@/components/layout/HeaderNav'
export default {
  components: {
    HeaderNav
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
main {
  height: calc(100vh - 61px);
  overflow-y: hidden;
}
</style>

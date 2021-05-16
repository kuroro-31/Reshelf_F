<template>
  <div class="w-full h-full mx-auto flex flex-col">
    <HeaderNav />
    <main class="w-full flex max-w-screen-xl mx-auto container">
      <div class="lg:flex w-full">
        <nav class="docs-index lg:max-h-(screen-22) pin-22">
          <SidebarSearch />
        </nav>
        <div class="markdown-body min-h-(screen-16)"></div>
      </div>
    </main>
    <!-- <FooterNav /> -->
  </div>
</template>
<script>
// layout
import HeaderNav from '@/components/layout/HeaderNav'
// import FooterNav from '@/components/layout/FooterNav'
import SidebarSearch from '@/components/layout/sidebar/SidebarSearch'
export default {
  components: {
    HeaderNav,
    // FooterNav,
    SidebarSearch,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
main {
  height: calc(100vh - 61px);
  overflow-y: hidden;
}
.docs-index {
  @apply hidden w-full lg:block lg:w-1/4 xl:w-1/5 p-6 lg:border-r z-10 lg:sticky overflow-y-auto;
}
.markdown-body {
  @apply w-full lg:w-3/4 xl:w-4/5 pt-10 px-6 lg:px-12;
}
</style>

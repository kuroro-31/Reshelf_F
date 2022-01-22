<template>
  <div class="w-full mx-auto flex flex-col scroll-none">
    <HeaderNav />

    <template v-if="!$store.state.authenticate.authenticated">
      <HeroItem />
    </template>

    <main class="w-full flex max-w-screen-xl mx-auto container">
      <div class="lg:flex w-full -mx-6">
        <nav class="side-nav lg:max-h-(screen-22) pin-22">
          <SidebarSearch />
        </nav>
        <div class="main-body min-h-(screen-16)">
          <!-- <hero-item /> -->
          <template v-if="loading">読み込み中です</template>
          <all-item v-else :items="items" />

          <!-- <FooterNav /> -->
        </div>
      </div>
    </main>

    <FooterNav />
  </div>
</template>
<script>
// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
import FooterNav from '@/components/layout/FooterNav'
import SidebarSearch from '@/components/layout/sidebar/SidebarSearch'
// atoms
import AllItem from '@/components/atoms/item/AllItem'
import HeroItem from '@/components/atoms/item/HeroItem'

export default {
  components: {
    HeaderNav,
    FooterNav,
    SidebarSearch,
    AllItem,
    HeroItem,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(`/api/posts`)
    return { items: data }
  },
  data() {
    return {
      loading: false,
      items: [],
    }
  },
}
</script>
<style lang="scss" scoped>
.side-nav {
  @apply hidden w-full lg:block lg:w-1/4 xl:w-1/5 z-10 lg:sticky overflow-y-auto;
  // @screen lg {
  //   border-right: 1px #ddd solid;
  // }
  // @screen lg {
  //   @apply overflow-y-auto;
  //   height: calc(100vh - 68px);
  // }
}
.main-body {
  // @apply w-full lg:w-3/4 xl:w-3/5 pt-10 px-6 lg:px-12;
  // @apply w-full lg:w-3/4 xl:w-3/5 p-6;
  @apply w-full lg:w-3/4 xl:w-4/5 pt-10 px-6 lg:px-12;
  // @screen lg {
  //   @apply overflow-y-auto;
  //   height: calc(100vh - 68px);
  // }
}
</style>

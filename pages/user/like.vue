<template>
  <div class="w-full h-screen mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <main class="w-full flex max-w-screen-lg mx-auto container scroll-none">
      <div class="lg:flex w-full">
        <nav class="side-nav lg:max-h-(screen-22) pin-22 scroll-none">
          <SidebarSetting class="divider" />
          <SidebarStudent class="divider" />
          <SidebarTeacher />
        </nav>
        <div class="main-body scroll-none">
          <div class="main-body-content">
            <h2 class="text-3xl font-bold mb-8">お気に入り</h2>
            <!-- <all-item :items="items" /> -->
          </div>
        </div>
      </div>
    </main>
    <!-- <FooterNav /> -->
  </div>
</template>
<script>
// layout
import HeaderNav from '@/components/layout/HeaderNav'
// import FooterNav from '@/components/layout/FooterNav'
import SidebarSetting from '@/components/layout/sidebar/SidebarSetting'
import SidebarTeacher from '@/components/layout/sidebar/SidebarTeacher'
import SidebarStudent from '@/components/layout/sidebar/SidebarStudent'
// atoms
// import AllItem from '@/components/atoms/item/AllItem'

export default {
  components: {
    HeaderNav,
    // FooterNav,
    SidebarSetting,
    SidebarTeacher,
    SidebarStudent,
    // AllItem,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.side-nav {
  @apply fixed w-full lg:block lg:w-1/4 pt-10 px-6 z-10 overflow-y-auto;
  width: 256px;
  // @screen lg {
  //   @apply overflow-y-auto;
  //   height: calc(100vh - 64px);
  // }
}
.main-body {
  @apply w-full lg:w-3/4 px-6 lg:px-12;
  margin-left: 208px;
  @screen lg {
    min-height: calc(100vh - 64px);
  }
  &-content {
    @apply pt-10 h-full;
    padding-left: 48px;
    border-left: 1px var(--thin-gray) solid;
  }
}
</style>

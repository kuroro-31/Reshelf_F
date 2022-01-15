<template>
  <div class="w-full h-screen mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div class="w-full flex max-w-screen-lg mx-auto container scroll-none">
      <div class="lg:flex w-full">
        <nav
          class="card side-nav lg:max-h-(screen-22) pin-22 scroll-none mb-auto"
        >
          <SidebarSetting class="divider" />
          <SidebarStudent class="divider" />
          <SidebarTeacher />
        </nav>
        <div class="main-body scroll-none">
          <div class="main-body-content">
            <h2 class="text-3xl font-bold mb-4">プロフィール編集</h2>
            <!-- <all-item :items="items" /> -->
            <div class="">
              <div class="">{{ alert }}</div>
              <form @submit.prevent="update">
                <!-- タイトル -->
                <label class="font-semibold text-xs text-gray-600 pb-1 block">
                  名前
                </label>
                <input
                  v-model.trim="user.name"
                  type="text"
                  autofocus
                  class="border rounded px-3 py-2 mt-1 mb-5 text-xs w-full"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <FooterNav /> -->
    <!-- <Toast :success="success" :error="error" /> -->
  </div>
</template>
<script>
import { update } from '@/mixins/user/update.js'
// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
import SidebarSetting from '@/components/layout/sidebar/SidebarSetting'
import SidebarTeacher from '@/components/layout/sidebar/SidebarTeacher'
import SidebarStudent from '@/components/layout/sidebar/SidebarStudent'
// import Toast from '@/components/atoms//Toast'

// atoms
export default {
  components: {
    HeaderNav,
    SidebarSetting,
    SidebarTeacher,
    SidebarStudent,
    // Toast,
  },
  mixins: [update],
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.side-nav {
  @apply hidden w-full lg:block my-6 lg:w-1/4 xl:w-1/5 z-10 lg:sticky overflow-y-auto;
}
.main-body {
  @apply w-full lg:w-3/4 xl:w-4/5 p-6 lg:pl-10;
}
</style>

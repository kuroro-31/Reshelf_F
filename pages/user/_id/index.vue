<template>
  <div class="w-full h-screen mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div class="w-full flex max-w-screen-lg mx-auto container scroll-none">
      <div class="lg:flex w-full">
        <div class="main-body scroll-none">
          <div class="main-body-content">
            <h2 class="text-3xl font-bold mb-4">プロフィール編集</h2>
            <!-- <all-item :items="items" /> -->
            <div class="flex">
              <nav
                class="card side-nav lg:max-h-(screen-22) pin-22 scroll-none mb-auto"
              >
                <SidebarSetting class="divider" />
              </nav>
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
                <div
                  v-for="item in items"
                  :key="item.id"
                  class="card item flex-col"
                >
                  <nuxt-link
                    :to="{ name: 'item-id', params: { id: item.id } }"
                    class="relative flex flex-col items-start"
                  >
                    <button class="relative">
                      <img
                        v-if="item.src"
                        :src="item.src"
                        alt="text image"
                        class="img"
                        :value="item"
                      />
                      <img
                        v-else
                        src="@/assets/images/noimage.svg"
                        alt="cource image"
                        class="img"
                        :value="item"
                      />
                    </button>
                    <span v-if="item.title" class="title">
                      {{ item.title }}
                    </span>
                    <span v-else class="title">無題のタイトル</span>

                    <div class="">{{ item.user_id }}</div>
                    <div class="">{{ item.user.name }}</div>
                    <ArticleLike />
                  </nuxt-link>
                </div>
              </div>
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
// import Toast from '@/components/atoms//Toast'

// atoms
export default {
  components: {
    HeaderNav,
    SidebarSetting,
    // Toast,
  },
  mixins: [update],
  // async asyncData({ $axios, params }) {
  //   const { data } = await $axios.$get(`/api/users/${params}`)
  //   return { items: data }
  // },
  data() {
    return {
      items: [],
      user: this.$store.getters['authenticate/user'],
    }
  },
  computed: {
    userInfo() {
      const data = this.$axios.$get(`/api/user/${this.user.id}`)
      return data
    },
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

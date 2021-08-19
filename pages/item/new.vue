<template>
  <div class="w-full h-screen mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div class="w-full flex max-w-screen-xl mx-auto container scroll-none">
      <div class="lg:flex w-full mt-4">
        <nav
          class="card side-nav lg:max-h-(screen-22) pin-22 scroll-none mb-auto"
        >
          <SidebarNew />
        </nav>
        <div class="main-body scroll-none">
          <div class="main-body-content">
            <h2 class="text-xl font-bold mb-4">あなたのコース</h2>
            <!-- <all-item :items="items" /> -->
            <form @submit.prevent="save">
              <!-- タイトル -->
              <label class="font-semibold text-xs text-gray-600 pb-1 block">
                タイトル
              </label>
              <input
                v-model.trim="post.title"
                type="text"
                placeholder="タイトル"
                autofocus
                class="border rounded px-3 py-2 mt-1 mb-5 text-xs w-full"
              />

              <!-- body -->
              <label class="font-semibold text-xs text-gray-600 pb-1 block">
                本文
              </label>
              <textarea
                v-model.trim="post.body"
                type="text"
                placeholder="本文"
                class="border rounded px-3 py-2 mt-1 mb-5 text-xs w-full"
              />

              <!-- ログインボタン -->
              <button
                type="submit"
                class="
                  transition
                  duration-200
                  bg-blue-500
                  hover:bg-blue-600
                  focus:bg-blue-700
                  focus:shadow-sm
                  focus:ring-4
                  focus:ring-blue-500
                  focus:ring-opacity-50
                  text-white
                  w-full
                  py-2
                  rounded
                  text-xs
                  shadow-sm
                  hover:shadow-md
                  font-semibold
                  text-center
                  inline-block
                "
              >
                <span class="inline-block mr-2 text-white">保存</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- <FooterNav /> -->
  </div>
</template>
<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
import SidebarNew from '@/components/layout/sidebar/item/SidebarNew'
// atoms
// import AllItem from '@/components/atoms/item/AllItem'

export default {
  components: {
    HeaderNav,
    SidebarNew,
    // AllItem,
  },
  middleware: 'authenticated',
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
      errors: {},
    }
  },
  methods: {
    ...mapGetters({
      authenticated: 'authenticate/authenticated',
    }),
    async save() {
      axios.defaults.withCredentials = true

      if (!this.authenticated) {
        this.$nuxt.$router.push({ path: '/auth/login' })
      } else {
        this.$nuxt.$loading.start()
        await axios.get('/sanctum/csrf-cookie').then(async () => {
          await axios
            .post('/api/posts', this.post)
            .then(({ data }) => {
              // this.$nuxt.$router.back()
              this.$nuxt.$router.push({ path: '/' })
            })
            .catch(({ response: { data } }) => {
              // alert(data.message)
              console.log(data.message)

              alert('再度ログインをしてください')
              this.$nuxt.$router.push({ path: '/auth/login' })
            })
        })
        this.$nuxt.$loading.finish()
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.side-nav {
  @apply hidden w-full lg:block mt-6 lg:w-1/4 xl:w-1/5 z-10 lg:sticky overflow-y-auto;
}
.main-body {
  @apply w-full lg:w-3/4 xl:w-4/5 p-6 lg:pl-10;
}
</style>

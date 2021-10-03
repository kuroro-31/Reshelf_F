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
            <p class="mb-4">{{ alert }}</p>
            <!-- <all-item :items="items" /> -->
            <form @submit.prevent="update">
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
              <client-only>
                <editor
                  v-model.trim="post.body"
                  api-key="oxl1g4dleeqrpfmcnpvu7wqcnpsljq6nxbpenlhole2n0rmh"
                  output-format="html"
                  :init="{
                    height: 500,
                    menubar: false,
                    spellcheck: true,
                    body_class: 'reshelf-editor',
                    plugins: [
                      'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                    ],
                    toolbar:
                      'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                    color_map: [
                      '#BFEDD2',
                      'Light Green',
                      '#FBEEB8',
                      'Light Yellow',
                      '#F8CAC6',
                      'Light Red',
                      '#ECCAFA',
                      'Light Purple',
                      '#C2E0F4',
                      'Light Blue',

                      '#2DC26B',
                      'Green',
                      '#F1C40F',
                      'Yellow',
                      '#E03E2D',
                      'Red',
                      '#B96AD9',
                      'Purple',
                      '#3598DB',
                      'Blue',

                      '#169179',
                      'Dark Turquoise',
                      '#E67E23',
                      'Orange',
                      '#BA372A',
                      'Dark Red',
                      '#843FA1',
                      'Dark Purple',
                      '#236FA1',
                      'Dark Blue',

                      '#ECF0F1',
                      'Light Gray',
                      '#CED4D9',
                      'Medium Gray',
                      '#95A5A6',
                      'Gray',
                      '#7E8C8D',
                      'Dark Gray',
                      '#34495E',
                      'Navy Blue',

                      '#000000',
                      'Black',
                      '#ffffff',
                      'White',
                    ],
                  }"
                />
              </client-only>

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
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'
import Editor from '@tinymce/tinymce-vue'

// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
import SidebarNew from '@/components/layout/sidebar/item/SidebarNew'
// atoms
// import AllItem from '@/components/atoms/item/AllItem'

export default {
  components: {
    HeaderNav,
    SidebarNew,
    editor: Editor,

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
      alert: '',
      content: [],
    }
  },
  // watch: {
  //   post: {
  //     handler: _.debounce(function () {
  //       this.update()
  //     }, 2000), // memosのデータの更新が終わった2秒後に実行される
  //     deep: true,
  //   },
  // },
  methods: {
    ...mapGetters({
      authenticated: 'authenticate/authenticated',
    }),
    async update() {
      this.$axios.defaults.withCredentials = true

      if (!this.authenticated) {
        this.$nuxt.$router.push({ path: '/auth/login' })
      } else {
        // this.$nuxt.$loading.start()
        this.alert = '保存中です...'

        await this.$axios.get('/sanctum/csrf-cookie').then(async () => {
          await this.$axios
            .post('/api/posts', this.post)
            .then(({ data }) => {
              // this.$nuxt.$router.back()
              // this.$nuxt.$router.push({ path: '/' })
              this.alert = '保存しました。'
            })
            .catch(({ response: { data } }) => {
              // alert(data.message)
              console.log(data.message)

              alert('再度ログインをしてください')
              this.$nuxt.$router.push({ path: '/auth/login' })
            })
        })
        // this.$nuxt.$loading.finish()
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

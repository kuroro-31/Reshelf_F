<template>
  <div class="w-full h-screen mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div class="box-header">
      <div class="max-w-screen-lg w-full mx-auto">
        <div class="">
          <div class="user-cover">
            <img
              v-if="currentUser.cover"
              :src="currentUser.cover"
              :alt="currentUser.name + ' cover image'"
              class="img"
              :value="item"
            />
            <img
              v-else
              src="https://source.unsplash.com/1024x300?fashion"
              :alt="currentUser.name + ' cover image'"
            />
            <template v-if="user.id == currentUser.id">
              <div class="user-cover-edit" @click="modal = !modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <span class="ml-2">
                  {{ $t('プロフィールを編集') }}
                </span>
              </div>
              <ReModal
                v-if="modal"
                @close=";(modal = !modal), (loading = false)"
              >
                <template slot="header">
                  {{ $t('プロフィールを編集') }}
                </template>
                <!-- default -->
                <div class="w-full flex flex-col justify-center">
                  <!-- タイトル -->
                  <label class="font-semibold text-xs text-gray-600 pb-1 block">
                    {{ $t('名前') }}
                  </label>
                  <input
                    v-model="user.name"
                    type="text"
                    autofocus
                    class="border rounded px-3 py-2 mt-1 mb-5 text-xs w-full"
                  />

                  <ReButton class="re-button w-auto">
                    <button
                      :class="{ button_loading: loading == true }"
                      class="re-button-primary-filled bg-primary relative"
                      @click="update, (loading = true)"
                    >
                      <span class="button_text">{{ $t('保存') }}</span>
                    </button>
                  </ReButton>
                </div>
              </ReModal>
            </template>
          </div>
          <div class="user-profile">
            <div class="flex items-start divider">
              <img
                v-if="currentUser.icon"
                :src="currentUser.icon"
                :alt="currentUser.name + ' icon image'"
              />
              <img
                src="https://source.unsplash.com/190x190?dog"
                :alt="currentUser.name + ' icon image'"
              />
              <div class="w-full flex items-center justify-between">
                <div class="user-name">
                  <div class="font-bold text-5xl">{{ currentUser.name }}</div>
                  <div class="flex items-center">
                    <p>
                      <span class="font-bold">32,000</span>
                      {{ $t('フォロー中') }}
                    </p>
                    <p class="ml-4">
                      <span class="font-bold">32,000</span>
                      {{ $t('フォロワー') }}
                    </p>
                  </div>
                </div>
                <nuxt-link
                  v-if="user.id == currentUser.id"
                  to="/item/new"
                  class="mt-4"
                >
                  <ReButton class="re-button re-button-small no-shadow">
                    <button
                      class="re-button-primary bg-primary"
                      @click="create"
                    >
                      {{ $t('コースの作成') }}
                    </button>
                  </ReButton>
                </nuxt-link>
                <ReButton v-else class="re-button w-auto">
                  <button
                    type="submit"
                    class="re-button-primary-filled bg-primary"
                  >
                    {{ $t('チャンネル登録') }}
                  </button>
                </ReButton>
              </div>
            </div>

            <div class="item">
              <nuxt-link
                class="item-link"
                :to="{ name: 'user', params: { userId: 123 } }"
              >
                {{ $t('マイコース') }}
              </nuxt-link>
              <nuxt-link class="item-link" to="/user/learning">
                {{ $t('受講中のコース') }}
              </nuxt-link>
              <nuxt-link class="item-link" to="/user/like">
                {{ $t('お気に入り') }}
              </nuxt-link>
              <nuxt-link class="item-link" to="/user/bought">
                {{ $t('購入履歴') }}
              </nuxt-link>
              <nuxt-link class="item-link" to="/user/setting">
                {{ $t('設定') }}
              </nuxt-link>
              <nuxt-link class="item-link" to="/user/setting">
                {{ $t('願いの泉') }}
              </nuxt-link>
            </div>
            <!-- <SidebarSetting class="divider" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="box-content">
      <div class="max-w-screen-lg w-full mx-auto">
        <!-- <all-item :items="items" /> -->
        <div class="w-full flex">
          <div
            v-for="item in currentUser.posts"
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
              <span v-else class="title">{{ $t('無題のタイトル') }}</span>

              <div class="">{{ item.user_id }}</div>
              <!-- <div class="">{{ item.user.name }}</div> -->
              <!-- <ArticleLike /> -->
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <FooterNav />
    <Toast :success="success" :error="error">
      <template v-if="success">
        {{ $t('更新しました') }}
      </template>
      <template v-else-if="error">
        {{ $t('更新に失敗しました') }}
      </template>
    </Toast>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
// import { create } from '@/mixins/posts/create'
// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
import FooterNav from '@/components/layout/FooterNav'
// import SidebarSetting from '@/components/layout/sidebar/SidebarSetting'
import Toast from '@/components/atoms//Toast'
import ReButton from '@/components/atoms/ReButton'
import ReModal from '@/components/atoms/ReModal'

// atoms
export default {
  components: {
    HeaderNav,
    FooterNav,
    // SidebarSetting,
    Toast,
    ReButton,
    ReModal,
  },
  // mixins: [create],
  data() {
    return {
      loading: false,
      modal: false,
      items: [],
      success: false,
      error: false,
      name: this.$route.params.name,
      form: [],
      saved: false,
      currentUser: {},
    }
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: `${this.currentUser.name}さんのプロフィール | Reshelf`,
      ...i18nHead.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.currentUser.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.currentUser.name}のプロフィール | Reshelf`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.currentUser.description,
        },
        ...i18nHead.meta,
      ],
    }
  },
  computed: {
    ...mapGetters({
      isUser: 'user/auth',
      carts: 'cart/carts',
      product: 'product/product',
    }),
    user: {
      get() {
        return Object.assign({}, this.$store.getters['user/user'])
      },
      set(value) {
        this.$store.dispatch('user/update', value)
      },
    },
  },
  // watch: {
  //   user: {
  //     // eslint-disable-next-line
  //     handler: _.debounce(function () {
  //       this.update()
  //     }, 2000), // 更新されたら保存処理
  //     deep: true,
  //   },
  //   saved: {
  //     // 保存完了後にアラートを消す
  //     // eslint-disable-next-line
  //     handler: _.debounce(function () {
  //       this.clearAlert()
  //     }, 2000),
  //     deep: true,
  //   },
  // },
  mounted() {
    this.getItems()
    this.getCurrentUser()
  },
  methods: {
    async create() {
      await this.$store
        .dispatch('product/create')
        .then((response) => {
          alert('成功' + response)
        })
        .catch((error) => {
          alert('失敗' + error)
        })
    },
    async getItems() {
      this.loading = true
      await this.$axios
        .$get(`/api/posts`)
        .then((response) => {
          this.items = response.data
          this.loading = false
        })
        .catch((error) => {
          alert(error)
          console.log(error)
        })
    },
    async getCurrentUser() {
      this.loading = true
      await this.$axios
        .$get(`/api/users/${this.name}`)
        .then((response) => {
          this.currentUser = response.data
        })
        .catch((error) => {
          alert(error)
          console.log(error)
        })
    },
    async update() {
      await this.$axios.$patch(`/api/users/${this.user.id}`, this.user)
      this.$store
        .dispatch('user/update', this.user)
        .then(() => {
          this.success = true
          setTimeout(() => (this.success = false), 3000)
        })
        .catch(() => {
          this.error = true
          setTimeout(() => (this.error = false), 3000)
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.side-nav {
  @apply hidden w-full lg:block my-6 lg:w-1/4 xl:w-1/5 z-10 lg:sticky overflow-y-auto;
}
.box-header {
  @apply w-full flex justify-center mx-auto;
  background: #fff;
}
.box-content {
  @apply w-full flex justify-center mx-auto;
}
.user {
  &-cover {
    @apply relative;
    &-edit {
      @apply absolute flex items-center rounded py-2 px-4 font-bold cursor-pointer;
      background: #fff;
      right: 1.5rem;
      bottom: 1.5rem;
      &:hover {
        background: #f0f2f6;
      }
    }
    img {
      @apply rounded-lg object-cover;
      @screen lg {
        min-width: 1024px;
        max-width: 1024px;
        min-height: 300px;
        max-height: 300px;
      }
      // @media screen and (min-width: 1200px) and (max-width: 1440px) {
      //   min-height: 250px;
      //   max-height: 250px;
      // }
    }
  }
  &-profile {
    @apply w-full flex flex-col justify-between p-6 relative;
    // height: 200px;
    img {
      @apply object-cover rounded-full z-10;
      margin-top: -70px;
      width: 190px;
      height: 190px;
      border: 5px solid #fff;
      // @media screen and (min-width: 1200px) and (max-width: 1440px) {
      //   margin-top: -100px;
      //   min-height: 160px;
      //   max-height: 160px;
      // }
    }
  }
  &-name {
    @apply flex flex-col items-start px-8;
  }
}
.item {
  // @apply flex justify-start;
  &-link {
    @apply w-full py-3 px-2 text-center;
    &:hover {
      @apply rounded-lg;
      background: #f0f2f6;
    }
  }
}
// .button_loading {
//   &::after {
//     content: '';
//     position: absolute;
//     width: 22px;
//     height: 22px;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     margin: auto;
//     border: 2px solid transparent;
//     border-top-color: #ffffff;
//     border-radius: 50%;
//     animation: button-loading-spinner 1s ease infinite;
//   }
//   .button_text {
//     @apply duration-200;
//     visibility: hidden;
//     opacity: 0;
//   }
// }

// @keyframes button-loading-spinner {
//   from {
//     transform: rotate(0turn);
//   }

//   to {
//     transform: rotate(1turn);
//   }
// }
</style>

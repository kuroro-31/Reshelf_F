<template>
  <div v-if="isUser" class="w-full h-screen mx-auto flex flex-col scroll-none">
    <HeaderNav />
    <div class="box-header">
      <div class="max-w-screen-lg w-full mx-auto">
        <div class="">
          <div class="user-cover">
            <!-- <img
                  v-if="item.src"
                  :src="item.src"
                  alt="text image"
                  class="img"
                  :value="item"
                /> -->
            <img src="@/assets/images/noimage.svg" alt="user cover image" />
            <div v-if="isUser" class="user-cover-edit">
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
              <span class="ml-2" @click="modal = !modal">
                プロフィールを編集
              </span>
              <ReModal
                v-if="modal"
                @close=";(modal = !modal), (loading = false)"
              >
                <template slot="header">プロフィールの編集</template>
                <!-- default -->
                <div class="w-full flex flex-col justify-center">
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

                  <ReButton class="re-button w-auto">
                    <button
                      :class="{ button_loading: loading == true }"
                      class="re-button-primary-filled bg-primary relative"
                      @click="update, (loading = true)"
                    >
                      <span class="button_text">保存</span>
                    </button>
                  </ReButton>
                </div>
              </ReModal>
            </div>
          </div>
          <div class="user-profile">
            <div class="flex items-start divider">
              <img src="@/assets/images/noimage.svg" alt="user cover image" />
              <div class="w-full flex items-center justify-between">
                <div class="user-name">
                  <div class="font-bold text-5xl">{{ user.name }}</div>
                  <div>チャンネル登録者数 3.2万人</div>
                </div>
                <nuxt-link v-if="isUser" to="/item/new" class="mt-4">
                  <ReButton class="re-button re-button-small no-shadow">
                    <button
                      class="re-button-primary bg-primary"
                      @click="create"
                    >
                      コースの作成
                    </button>
                  </ReButton>
                </nuxt-link>
                <ReButton v-else class="re-button w-auto">
                  <button
                    type="submit"
                    class="re-button-primary-filled bg-primary"
                  >
                    チャンネル登録
                  </button>
                </ReButton>
              </div>
            </div>

            <div class="item">
              <nuxt-link
                class="item-link"
                :to="{ name: 'user', params: { userId: 123 } }"
              >
                マイコース
              </nuxt-link>
              <nuxt-link class="item-link" to="/user/learning">
                受講中のコース
              </nuxt-link>
              <nuxt-link class="item-link" to="/user/like">
                お気に入り
              </nuxt-link>
              <nuxt-link class="item-link" to="/user/bought">
                購入履歴
              </nuxt-link>
              <nuxt-link class="item-link" to="/user/setting">設定</nuxt-link>
              <nuxt-link class="item-link" to="/user/setting">
                願いの泉
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
          <div v-for="item in items" :key="item.id" class="card item flex-col">
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
              <!-- <div class="">{{ item.user.name }}</div> -->
              <!-- <ArticleLike /> -->
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <FooterNav />
    <Toast :success="success" :error="error">
      <template v-if="success">ユーザー情報を更新しました。</template>
      <template v-else-if="error">ユーザー情報の更新に失敗しました。</template>
    </Toast>
  </div>
</template>
<script>
import { create } from '@/mixins/posts/create'
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
  mixins: [create],
  data() {
    return {
      loading: false,
      modal: false,
      items: [],
      success: false,
      error: false,
      id: this.$route.params.id,
      form: [],
    }
  },
  computed: {
    isUser() {
      return this.$store.getters['user/auth']
    },
    user() {
      return this.$store.getters['user/user']
    },
    carts() {
      return this.$store.getters['cart/carts']
    },
  },
  mounted() {
    this.getItems()
  },
  methods: {
    async getItems() {
      await this.$axios.$get(`/api/users/${this.id}`).then((response) => {
        this.items = response
      })
    },
    async update() {
      await this.$store
        .dispatch('user/update', this.user)
        .then(() => {
          this.success = true
          setTimeout(() => (this.success = false), 5000)
        })
        .then(() => {
          this.error = true
          setTimeout(() => (this.error = false), 5000)
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
      @apply rounded;
      @screen lg {
        @apply object-cover;
        min-width: 1024px;
        max-width: 1024px;
        min-height: 300px;
        max-height: 300px;
      }
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
.button_loading {
  &::after {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 2px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
  }
  .button_text {
    @apply duration-200;
    visibility: hidden;
    opacity: 0;
  }
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>

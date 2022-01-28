<template>
  <div class="w-full h-screen mx-auto flex flex-col scroll-none">
    <HeaderNav :user="user" />
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
          </div>
          <div class="user-profile">
            <div class="flex items-start divider">
              <img src="@/assets/images/noimage.svg" alt="user cover image" />
              <div class="w-full flex items-center justify-between">
                <div class="user-name">
                  <div class="font-bold text-5xl">{{ user.name }}</div>
                  <div>チャンネル登録者数 3.2万人</div>
                </div>
                <template v-if="user">
                  <nuxt-link to="/item/new" class="mt-4">
                    <!-- <form @submit.prevent="create"> -->
                    <ReButton class="re-button re-button-small no-shadow">
                      <button
                        class="re-button-primary bg-primary"
                        @click="create"
                      >
                        コースの作成
                      </button>
                    </ReButton>
                    <!-- </form> -->
                  </nuxt-link>
                </template>
                <template v-else>
                  <ReButton class="re-button w-auto">
                    <button
                      type="submit"
                      class="re-button-primary-filled bg-primary"
                    >
                      チャンネル登録
                    </button>
                  </ReButton>
                </template>
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
          <div class="">
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
                <!-- <div class="">{{ item.user.name }}</div> -->
                <!-- <ArticleLike /> -->
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <FooterNav /> -->
    <Toast :success="success" :error="error">
      <template v-if="success">ユーザー情報を更新しました。</template>
      <template v-else>ユーザー情報の更新に失敗しました。</template>
    </Toast>
  </div>
</template>
<script>
import { create } from '@/mixins/posts/create'
// layout
import HeaderNav from '@/components/layout/header/HeaderNav'
// import SidebarSetting from '@/components/layout/sidebar/SidebarSetting'
import Toast from '@/components/atoms//Toast'
import ReButton from '@/components/atoms/ReButton'

// atoms
export default {
  components: {
    HeaderNav,
    // SidebarSetting,
    Toast,
    ReButton,
  },
  mixins: [create],
  middleware: 'checkAuth',
  async asyncData({ $axios, params }) {
    const { data } = await $axios.$get(`/api/users/${params}`)
    return { items: data }
  },
  data() {
    return {
      items: [],
      user: this.$store.getters['user/user'],
      success: false,
      error: false,
    }
  },
  watch: {
    user: {
      // eslint-disable-next-line
      handler: _.debounce(function () {
        this.update()
      }, 2000),
      deep: true,
    },
  },
  methods: {
    update() {
      try {
        this.$store.dispatch('authenticate/update', this.user)
        this.success = true
        setTimeout(() => (this.success = false), 5000)
      } catch (error) {
        this.error = true
        setTimeout(() => (this.error = false), 5000)
      }
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
    img {
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
</style>

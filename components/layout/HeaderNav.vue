<template>
  <nav class="nav">
    <div
      class="
        container
        w-full
        mx-auto
        flex flex-wrap
        items-center
        justify-between
        mt-0
      "
    >
      <div class="nav-left py-2.5">
        <!-- <input id="side" type="checkbox" name="" value="" /> -->
        <!-- <label for="side" class="toggle">
          <menu-icon size="1.5x"></menu-icon>
        </label> -->

        <NuxtLink to="/" class="title-link">
          <h1>
            <img
              src="https://res.cloudinary.com/reshelf/image/upload/v1619871156/Logo_pfuaao.svg"
              alt="Reshelf Logo"
              width="112"
              height="24"
              class="responsive"
            />
          </h1>
        </NuxtLink>
      </div>

      <div class="nav-center flex items-center py-2.5"></div>

      <div class="nav-right">
        <!-- <span class="mr-2">{{ $auth.loggedIn }}</span> -->

        <!-- お気に入り -->
        <button
          v-if="isAuthenticated"
          class="dropdown"
          @mouseover="like = true"
          @mouseleave="like = false"
        >
          <heart-icon size="1.5x" class="dropdown-icon"></heart-icon>
          <transition>
            <div v-if="like">
              <div
                class="dropdown-contents"
                @mouseover="like = true"
                @mouseleave="like = false"
              >
                <div class="p-8">お気に入りの中身は空です</div>
              </div>
            </div>
          </transition>
        </button>

        <!-- カート -->
        <button
          v-if="isAuthenticated"
          class="dropdown"
          @mouseover="cart = true"
          @mouseleave="cart = false"
        >
          <shopping-cart-icon
            size="1.5x"
            class="dropdown-icon"
          ></shopping-cart-icon>
          <transition>
            <div v-if="cart">
              <div
                class="dropdown-contents"
                @mouseover="cart = true"
                @mouseleave="cart = false"
              >
                <div class="cart-content">
                  <p class="cart-content-name">My Cart</p>
                  <p class="divider"></p>

                  <div class="cart-content-products scroll-none">
                    <!-- 商品１ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品２ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品１ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品２ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品１ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品２ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                  </div>

                  <re-button class="pt-4 re-button re-button-small">
                    <button
                      :class="
                        modal
                          ? 're-button-primary-border'
                          : 're-button-primary-filled'
                      "
                      @click="modal = !modal"
                    >
                      Checkout
                    </button>
                  </re-button>
                </div>
              </div>
            </div>
          </transition>
        </button>

        <!-- ユーザードロップダウン -->
        <button
          class="dropdown"
          @mouseover="dropdown = true"
          @mouseleave="dropdown = false"
        >
          <img
            class="dropdown-img"
            width="40px"
            height="40px"
            src="https://i.gyazo.com/ea69860bb5555cb60c4860a3bd7b3e70.png"
          />
          <transition>
            <div
              v-if="dropdown"
              class="dropdown-contents scroll-none"
              @mouseover="dropdown = true"
              @mouseleave="dropdown = false"
            >
              <div class="menu">
                <div class="menu-name">
                  <img
                    width="50px"
                    height="50px"
                    src="https://i.gyazo.com/ea69860bb5555cb60c4860a3bd7b3e70.png"
                  />
                  <span v-if="isAuthenticated" class="menu-name-person">
                    {{ loggedInUser.name }}
                  </span>
                </div>
                <div class="menu-me">
                  <span class="menu-me-title">受講生</span>
                  <nuxt-link class="menu-me-link" to="/user/learning">
                    受講中のコース
                  </nuxt-link>
                  <nuxt-link class="menu-me-link" to="/user/like">
                    お気に入り
                  </nuxt-link>
                </div>
                <div class="menu-me">
                  <span class="menu-me-title">講師</span>
                  <nuxt-link class="menu-me-link" to="/teacher/course">
                    ダッシュボード
                  </nuxt-link>
                </div>
                <!-- <div class="menu-me">
                  <nuxt-link class="menu-me-link" to="/user/top">
                    通知・お知らせ
                  </nuxt-link>
                  <nuxt-link class="menu-me-link" to="/user/top">
                    メッセージ
                  </nuxt-link>
                </div> -->
                <div class="menu-me">
                  <div class="">
                    <select v-model="$colorMode.preference">
                      <option value="system">System</option>
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="sepia">Sepia</option>
                    </select>
                  </div>
                  <span class="menu-me-title">共通</span>
                  <nuxt-link class="menu-me-link" to="/user/setting">
                    アカウント設定
                  </nuxt-link>
                  <button class="menu-me-link" to="/user/top" @click="logout">
                    ログアウト
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </button>

        <!-- ログイン -->
        <!-- <nuxt-link v-if="!isAuthenticated" flat to="/auth/login">
          ログイン
        </nuxt-link> -->
        <div v-if="!isAuthenticated" class="py-2.5">
          <span class="cursor-pointer" @click="modal = !modal">Log in</span>
          <ReModal v-if="modal" @close="modal = !modal">
            <template slot="header">Welcome To Reshelf！</template>
            <!-- default -->
            <div class="w-full flex justify-center">
              <form @submit.prevent="submit">
                <button
                  :class="post ? 'fb-btn-posted' : 'fb-btn'"
                  @click="post = !post"
                >
                  Facebookで新規登録・ログイン
                </button>
              </form>
            </div>
            <!-- /default -->
            <template slot="footer">
              ※
              Reshelfでは、多重アカウントを防止するため、Facebookでのアカウント作成をお願いしています。
            </template>
          </ReModal>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ReButton from '@/components/atoms/ReButton'
import ReModal from '@/components/atoms/ReModal'
import {
  // MenuIcon,
  ShoppingCartIcon,
  HeartIcon,
} from 'vue-feather-icons'

export default {
  components: {
    ReButton,
    ReModal,
    // MenuIcon,
    ShoppingCartIcon,
    HeartIcon,
  },
  data() {
    return {
      visible: false,
      modal: false,
      message: '',
      cart: false,
      dropdown: false,
      post: false,
      like: false,
    }
  },
  computed: {
    isAuthenticated() {
      return this.$auth.loggedIn
    },
    loggedInUser() {
      return this.$auth.user
    },
  },
  methods: {
    async submit() {
      await this.$axios
        .post('/api/auth/facebook')
        .then(() => {})
        .catch((err) => {
          console.log(err)
        })
      // await this.$authentication.loginWith('local', {
      //   data: this.form,
      // })
      // this.$router.push({
      //   path: this.$route.query.redirect || '/',
      // })
    },
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
<style lang="scss" scoped>
.toggle {
  @apply mr-4 cursor-pointer p-2 flex-shrink-0;
  height: 40px;
  width: 40px;
  &:hover {
    @apply rounded-lg;
    background: var(--eee);
  }
}
.nav {
  @apply sticky top-0 z-20 flex items-center h-16;
  background-color: var(--bg-secondary);
  // &::after {
  //   content: '';
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   top: 100%;
  //   height: 4px;
  //   background: linear-gradient(
  //     180deg,
  //     rgba(9, 30, 66, 0.13) 0,
  //     rgba(9, 30, 66, 0.13) 1px,
  //     rgba(9, 30, 66, 0.08) 1px,
  //     rgba(9, 30, 66, 0) 4px
  //   );
  // }
  &-left {
    @apply flex items-center;
    height: 45px;
    width: 240px;
  }
  &-center {
    @apply mr-auto;
  }
  &-right {
    @apply justify-end;
  }
  &-left,
  &-right {
    @apply flex h-full items-center;
  }
}
.dropdown {
  @apply px-3 relative;
  height: 60px;
  &-icon {
    @apply flex-shrink-0 inline-block cursor-pointer;
  }
  &-img {
    @apply object-cover rounded-full shadow-lg cursor-pointer;
    width: 40px;
    height: 40px;
  }
  &-contents {
    @apply absolute top-0 right-0 z-50 rounded-lg shadow-lg overflow-y-auto cursor-default;
    background-color: var(--bg-secondary);
    @screen lg {
      margin-top: 60px;
      width: 300px;
      max-height: calc(100vh - 120px);
    }
  }
}
.cart-content {
  @apply overflow-auto flex flex-col p-4 items-start;
  &-name {
    @apply pb-2 text-lg font-bold;
  }
  &-img {
    @apply object-cover shadow-lg cursor-pointer;
    height: 50px;
    width: 40px;
  }
  &-box {
    @apply w-full flex items-start pl-4;
    width: 228px;
  }
  &-products {
    @apply overflow-y-auto;
    max-height: 300px;
  }
  &-title {
    @apply w-full font-bold break-words text-left;
  }
  &-author {
    @apply w-full truncate text-sm text-grey text-left pt-2;
  }
  &-price {
    @apply pl-2 whitespace-nowrap;
  }
}
.fb-btn {
  @apply py-3 px-4 text-white rounded-lg text-xl font-bold  duration-200;
  background: #1976f2;
  border: 1px solid #1976f2;

  &:hover {
    -webkit-box-shadow: 0 8px 25px -8px #1976f2;
    box-shadow: 0 8px 25px -8px #1976f2;
  }
}
.fb-btn-posted {
  @apply py-3 px-4 text-white rounded-lg text-xl font-bold;
  color: #1976f2;
  border: 1px solid #1976f2;
}
.show {
  @apply block;
}
.dropdown-bg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.menu {
  &-name {
    @apply flex items-center p-4;
    border-bottom: 1px solid #ccc;
    &-person {
      @apply ml-2;
      max-width: 140px;
    }
  }
  &-me {
    @apply flex flex-col items-start p-3;
    border-bottom: 1px solid #ccc;
    &-title {
      @apply text-sm font-bold pt-2;
      color: var(--sub-color);
    }
    &-link {
      @apply py-3 w-full rounded text-left px-4 duration-200;
      &:hover {
        @apply cursor-pointer;
        transform: translateX(5px);
        background: #f0f2f6;
        border-radius: 6px;
      }
    }
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(-15px);
    opacitx: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
// .divider {
//   @apply w-full z-50;
//   border-bottom: 1px var(--thin-gray) solid;
//   padding: 0 -9999px;
// }
</style>

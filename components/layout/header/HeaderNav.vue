<template>
  <nav class="nav">
    <div
      class="
        max-w-screen-xl
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="112"
              height="24"
              viewBox="0 0 459.458 97.981"
            >
              <g transform="translate(-580.567 1559.479)">
                <g transform="translate(580.567 -1559.479)">
                  <path
                    d="M532.324,212.714c-28.021-9.617-40.435,12.166-39.952,13.393.522,1.306,2.35,1.044,7.05,1.306,3.517.2,7.473,2.293,9.241,3.335a47.24,47.24,0,0,1,23.66-18.033Z"
                    transform="translate(-492.358 -210.173)"
                    fill="#fff"
                  />
                  <path
                    d="M615.356,259.78a3.518,3.518,0,0,0-.021-.363,6.839,6.839,0,0,0-.5-2.146c-.956-2.943-2.846-6.732-2.35-8.719,1.828-7.311-.144-14.649-4.833-20.616a47.133,47.133,0,0,0-84.21,29.1c0,.491,0,.979.023,1.465l-.023-.029a49.353,49.353,0,0,0,49.352,49.352s4.084.334,13.709-.653c10.184-1.044,10.818-3.264,15.276-3.264,4.7,0,7.05,1.567,7.834.522s-2.611-7.311-2.872-11.489.261-11.489-.522-11.228-5.484,5.484-8.617,8.095-5.222,3.395-5.484,4.178,0,2.35-.783,2.872a26.144,26.144,0,0,1-18.018,1.757,28.071,28.071,0,0,1-17.4-48.308,27.483,27.483,0,0,1,4.092,10.006c.783,5.222.783,9.578.914,10.142s.914.3,1.436-.219,8.095-4.439,9.923-10.706c1.8-6.191,2.59-9.583,2.35-16.973h.645a28.083,28.083,0,0,1,27.075,20.634,6.915,6.915,0,0,0,13.007-3.275v-.131Z"
                    transform="translate(-515.324 -209.9)"
                    fill="#fff"
                  />
                </g>
                <g transform="translate(733.152 -1543.776)">
                  <g transform="translate(0)">
                    <path
                      d="M547.315,538.925h-10.7v66.583h30.76v-9.362H547.314Z"
                      transform="translate(-536.615 -535.004)"
                      fill="#fff"
                    />
                    <path
                      d="M654.169,538.925H616.244v66.583h37.925v-9.362H626.943V573.792h24.838V564.43H626.943V553.922l-7.738-5.636h34.964Z"
                      transform="translate(-568.52 -535.004)"
                      fill="#fff"
                    />
                    <path
                      d="M742.432,543.559l-5.35-11.177-5.35,11.177-28.467,59.323h10.7l5.636-11.75-6.018-4.394h38.88l7.738,16.144h10.7Zm-16.24,33.817,10.89-22.641,10.89,22.641Z"
                      transform="translate(-603.387 -532.382)"
                      fill="#fff"
                    />
                    <path
                      d="M867.72,577.706c8.215-1.719,15.666-6.4,15.666-19.01,0-18.15-15.476-19.775-26.557-19.775H843.837v66.583h10.7V578.566h1.242L875.84,605.6h12.61Zm-13.182-24.455-6.974-4.967H859.5c5.636,0,13.183.86,13.183,10.413,0,9.648-7.547,10.508-13.183,10.508h-4.967Z"
                      transform="translate(-659.709 -535.002)"
                      fill="#fff"
                    />
                    <path
                      d="M997.769,582.735,959.08,543.377l-6.974-7.069-3.725-3.917v70.5h10.7V556.462l38.689,39.358,6.974,7.069,3.726,3.917v-70.5h-10.7Z"
                      transform="translate(-701.597 -532.386)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </h1>
        </NuxtLink>
      </div>

      <div class="nav-center flex items-center py-2.5"></div>

      <div class="nav-right">
        <!-- <span class="mr-2">{{ $auth.loggedIn }}</span> -->

        <!-- 検索 -->
        <input type="text" class="search" placeholder="Search..." />

        <!-- お気に入り -->
        <button
          v-if="$store.state.authenticate.authenticated"
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
          v-if="$store.state.authenticate.authenticated"
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
          v-if="$store.state.authenticate.authenticated"
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
                  <span class="menu-name-person">
                    {{ user.name }}
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
                      <option value="blue">Blue</option>
                      <option value="purple">purple</option>
                      <option value="gold">gold</option>
                    </select>
                  </div>
                  <span class="menu-me-title">共通</span>
                  <nuxt-link class="menu-me-link" to="/user/setting">
                    アカウント設定
                  </nuxt-link>
                  <button class="menu-me-link" @click="logout">
                    ログアウト
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </button>

        <!-- ログイン -->
        <nuxt-link
          v-if="!$store.state.authenticate.authenticated"
          flat
          to="/auth/login"
          class="text-white"
        >
          ログイン
        </nuxt-link>
        <div v-if="!$store.state.authenticate.authenticated" class="py-2.5">
          <span class="cursor-pointer text-white" @click="modal = !modal">
            Log in
          </span>
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
import { mapGetters, mapActions } from 'vuex'

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
      user: this.$store.state.authenticate.user,
      visible: false,
      modal: false,
      message: '',
      cart: false,
      dropdown: false,
      post: false,
      like: false,
    }
  },
  methods: {
    ...mapGetters({
      authenticated: 'authenticate/authenticated',
    }),
    ...mapActions({
      signOut: 'authenticate/logout',
    }),
    async logout() {
      this.$nuxt.$loading.start()
      this.signOut()
      this.$nuxt.$router.push({ path: '/' })
      this.$nuxt.$loading.finish()
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
  @apply sticky top-0 z-20 flex items-center justify-center h-16;
  // background-color: var(--bg-secondary);
  background-color: var(--primary);
  // border-bottom-width: 1px;
  // border-style: solid;
  // border-color: #e5e7eb;
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
    @apply flex items-center lg:w-1/4 xl:w-1/5 mr-12;
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
    @apply flex-shrink-0 inline-block cursor-pointer text-white;
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
      @apply py-3 w-full rounded-lg text-left px-4 duration-200;
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

.search {
  @apply px-4 py-2 rounded-lg;
  background-color: var(--bg-secondary);
  background-clip: padding-box;
  border: 1px solid var(--gray);
}

.purple {
  width: 30px;
  height: 30px;
  background: $purple;
}
</style>

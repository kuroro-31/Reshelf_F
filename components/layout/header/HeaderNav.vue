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
            <!-- <img
              src="@/assets/images/logo.svg"
              alt="Reshelf Logo"
              width="112"
              height="24"
              class="responsive"
            /> -->
            <!-- <svg
              class="responsive"
              xmlns="http://www.w3.org/2000/svg"
              width="112"
              height="24"
              viewBox="0 0 512.004 105.242"
            >
              <g id="logo-group" transform="translate(-423.454 -456.91)">
                <path
                  class="path"
                  d="M479.9,526.74c12.432-4.372,19.263-14.482,19.263-30.6,0-21.039-13.115-31.286-36.066-31.286H424.023v95.632h21.449V529.2h13.8l16.941,31.286h24.181Zm-18.034-15.028H445.336V482.475h16.531c11.066,0,17.214,3.962,17.214,14.482,0,10.656-6.284,14.755-17.214,14.755Z"
                />
                <path
                  class="path"
                  d="M574.15,495.863c-6.011-6.284-14.482-9.563-25.138-9.563-21.449,0-35.93,15.165-35.93,37.707s14.345,37.16,36.613,37.16c12.022,0,22.268-4.235,29.509-12.3L568.548,537.8a24.488,24.488,0,0,1-17.077,7.241c-8.88,0-15.3-5.328-17.624-14.618l-.273-1.23h50.138c.683-14.482-2.6-25.957-9.563-33.334Zm-10.246,22.4H533.3l.137-1.093c1.639-9.836,7.651-15.984,15.711-15.984,8.743,0,14.618,6.558,14.618,16.257Z"
                />
                <path
                  class="path"
                  d="M631.193,515.408c-6.968-2.186-12.979-4.1-12.979-8.743,0-3.825,3.006-6.148,7.924-6.148,5.875,0,13.662,2.6,22,7.241l6.831-13.8a55.034,55.034,0,0,0-27.87-7.787c-17.077,0-27.734,8.743-27.734,22.815-.137,15.3,12.842,19.263,23.225,22.541,7.1,2.186,13.252,4.1,13.252,9.153,0,3.825-3.415,6.148-8.743,6.148-7.924,0-16.8-3.142-24.728-8.743l-6.421,13.525c8.2,6.421,18.989,9.973,30.6,9.973,17.487,0,28.827-9.017,28.827-22.951.137-15.437-13.252-19.536-24.045-22.815Z"
                />
                <path
                  class="path"
                  d="M717.468,486.03c-10.246.137-18.171,4.645-22.815,12.979l-1.913,3.279V458.712H671.975V560.219h20.766V524.152c0-11.339,6.148-18.853,15.437-18.853,8.334,0,13.525,5.875,13.525,15.3v39.755h20.766V513.907c0-16.941-9.836-27.87-25-27.87Z"
                />
                <path
                  class="path"
                  d="M818.923,495.863c-6.011-6.284-14.482-9.563-25.138-9.563-21.449,0-35.93,15.165-35.93,37.707s14.345,37.16,36.613,37.16c12.022,0,22.268-4.235,29.509-12.3L813.321,537.8a24.488,24.488,0,0,1-17.077,7.241c-8.88,0-15.3-5.328-17.624-14.618l-.273-1.23h50.138c.683-14.482-2.6-25.957-9.563-33.334Zm-10.246,22.4h-30.6l.137-1.093c1.639-9.836,7.651-15.984,15.711-15.984,8.743,0,14.618,6.558,14.618,16.257Z"
                />
                <path
                  class="path"
                  d="M865.444,560.217V458.711H844.678V560.217Z"
                />
                <path
                  class="path"
                  d="M913,477.153a9.189,9.189,0,0,1,6.694-2.459,14.765,14.765,0,0,1,7.924,2.6l7.1-15.028a37.409,37.409,0,0,0-18.444-4.782c-15.847,0-26.094,9.7-26.094,24.728v7.924h-9.563v13.935h9.563v55.877h20.493V504.081h15.984V490.146H910.677v-6.421a9.38,9.38,0,0,1,2.6-6.831Z"
                />
              </g>
            </svg> -->
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              width="112"
              height="24"
              viewBox="0 0 511.992 119.677"
            >
              <g id="logo-group" transform="translate(-566.378 -556.95)">
                <path
                  id="path65034"
                  d="M566.378,675.006V556.95h25.033v97.384h47.884v20.672Z"
                  fill="#fff"
                />
                <path
                  id="path65036"
                  d="M711.258,600.558q-7.833,0-12.274,5.007-4.441,4.926-5.087,14.05h34.561q-.161-9.125-4.764-14.05Q719.09,600.558,711.258,600.558Zm3.472,76.066q-21.8,0-34.076-12.032T668.38,630.518q0-22.691,11.3-35.046,11.386-12.435,31.411-12.435,19.138,0,29.8,10.9t10.659,30.12v11.951h-58.22q.4,10.5,6.218,16.393T715.86,658.3a67.717,67.717,0,0,0,15.423-1.7,77.183,77.183,0,0,0,15.181-5.41v19.058a56.6,56.6,0,0,1-13.808,4.764,84.952,84.952,0,0,1-17.927,1.615Z"
                  fill="#fff"
                />
                <path
                  id="path65038"
                  d="M845.15,675.006l-4.764-12.274h-.646q-6.218,7.833-12.839,10.9-6.541,2.988-17.119,2.988-13,0-20.51-7.429-7.429-7.429-7.429-21.157,0-14.373,10.013-21.157,10.094-6.864,30.362-7.59l15.665-.484v-3.957q0-13.727-14.05-13.727-10.82,0-25.436,6.541l-8.156-16.634A73.392,73.392,0,0,1,824.8,582.87q18.169,0,27.858,7.913t9.69,24.062V675Zm-7.267-41.829-9.528.323q-10.74.323-15.988,3.876t-5.249,10.82q0,10.417,11.951,10.417,8.56,0,13.647-4.926,5.168-4.926,5.168-13.081Z"
                  fill="#fff"
                />
                <path
                  id="path65040"
                  d="M954.083,583.034a39.714,39.714,0,0,1,8.317.727l-1.857,23.094a28.214,28.214,0,0,0-7.267-.807q-11.789,0-18.41,6.056-6.541,6.056-6.541,16.957v45.947H903.7V584.729h18.653l3.634,15.181h1.211a33.724,33.724,0,0,1,11.3-12.193,27.994,27.994,0,0,1,15.585-4.684Z"
                  fill="#fff"
                />
                <path
                  id="path65042"
                  d="M1078.371,675.006h-24.639V622.274q0-9.771-3.472-14.616-3.472-4.926-11.063-4.926-10.336,0-14.939,6.944-4.6,6.864-4.6,22.851V675H995.027V584.725h18.815l3.311,11.547h1.373a25.812,25.812,0,0,1,11.3-9.851,38.509,38.509,0,0,1,16.473-3.392q15.746,0,23.9,8.559,8.156,8.479,8.156,24.548Z"
                  fill="#fff"
                />
              </g>
            </svg> -->
            <svg
              id="logo-group"
              xmlns="http://www.w3.org/2000/svg"
              width="105"
              height="20"
              viewBox="0 0 376.567 91.323"
            >
              <path
                id="path81398"
                d="M549.745,538.925h-13.13V620.63h37.746V609.142H549.743Z"
                transform="translate(-536.615 -534.113)"
                fill="#fff"
              />
              <path
                id="path81400"
                d="M662.782,538.925H616.244V620.63h46.538V609.142H629.373V581.711h30.479V570.223H629.373v-12.9l-9.5-6.916h42.9Z"
                transform="translate(-557.681 -534.113)"
                fill="#fff"
              />
              <path
                id="path81402"
                d="M751.327,546.1l-6.565-13.715L738.2,546.1l-34.933,72.8h13.13l6.916-14.419-7.385-5.392h47.711l9.5,19.811h13.13Zm-19.928,41.5,13.363-27.783,13.363,27.783Z"
                transform="translate(-580.703 -532.382)"
                fill="#fff"
              />
              <path
                id="path81404"
                d="M873.144,586.515c10.081-2.11,19.224-7.854,19.224-23.328,0-22.272-18.991-24.266-32.589-24.266H843.837v81.705h13.13V587.569h1.524l24.618,33.175h15.474Zm-16.176-30.01-8.557-6.1h14.653c6.916,0,16.177,1.055,16.177,12.778,0,11.84-9.261,12.9-16.177,12.9h-6.1Z"
                transform="translate(-617.891 -534.112)"
                fill="#fff"
              />
              <path
                id="path81406"
                d="M1008.986,594.169l-47.476-48.3-8.557-8.675-4.572-4.806V618.9h13.13V561.929l47.476,48.3,8.557,8.675,4.572,4.806V537.2h-13.13Z"
                transform="translate(-645.549 -532.385)"
                fill="#fff"
              />
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

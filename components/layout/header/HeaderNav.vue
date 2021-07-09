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
            <svg
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
            </svg>
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="140"
              height="43"
              viewBox="0 0 1159.433 280"
            >
              <defs>
                <radialGradient
                  id="radial-gradient"
                  cx="0.5"
                  cy="0.5"
                  r="0.505"
                  gradientTransform="translate(0.01) scale(0.979 1)"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0.01" stop-color="#2cbfbf" />
                  <stop offset="1" stop-color="#2cd5bf" />
                </radialGradient>
                <linearGradient
                  id="linear-gradient"
                  x1="0.17"
                  y1="-0.075"
                  x2="0.742"
                  y2="0.838"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0.21" stop-color="#2cd5bf" />
                  <stop offset="1" stop-color="#2cbfbf" />
                </linearGradient>
                <radialGradient
                  id="radial-gradient-2"
                  cx="0.5"
                  cy="0.5"
                  r="0.485"
                  gradientTransform="translate(-0.033) scale(1.066 1)"
                  xlink:href="#radial-gradient"
                />
              </defs>
              <g
                id="グループ_75"
                data-name="グループ 75"
                transform="translate(-1230.567 2086)"
              >
                <g id="logo" transform="translate(1230.599 -2070.98)">
                  <path
                    id="パス_519"
                    data-name="パス 519"
                    d="M721.972,324.4a8.119,8.119,0,0,0-.048-.833,15.7,15.7,0,0,0-1.151-4.927c-2.194-6.755-6.533-15.452-5.395-20.014,4.2-16.783-.33-33.626-11.095-47.322A108.309,108.309,0,0,0,584.1,215.736c-64.32-22.075-92.815,27.925-91.706,30.743,1.2,3,5.394,2.4,16.183,3,8.074.45,17.154,5.263,21.212,7.654A107.686,107.686,0,0,0,510.97,318.1c0,1.127,0,2.248.054,3.363l-.054-.066A113.286,113.286,0,0,0,624.254,434.686s9.374.767,31.468-1.5c23.376-2.4,24.833-7.492,35.064-7.492,10.789,0,16.183,3.6,17.982,1.2s-5.994-16.783-6.593-26.373.6-26.373-1.2-25.774-12.587,12.587-19.78,18.581-11.988,7.792-12.587,9.59,0,5.394-1.8,6.593-12.587,5.994-26.373,5.994a58.141,58.141,0,0,1-46.219-93.391c.276,1.145.51,2.308.683,3.482,1.8,11.988,1.8,21.986,2.1,23.28s2.1.7,3.3-.5,18.581-10.19,22.777-24.575c2.631-8.991,4.316-15.44,5.059-23.262A58.2,58.2,0,0,1,690.5,327.773a15.724,15.724,0,0,0,1.612,4.447h0a15.872,15.872,0,0,0,29.855-7.522Z"
                    transform="translate(-492.39 -209.923)"
                    fill="url(#radial-gradient)"
                  />
                  <path
                    id="パス_520"
                    data-name="パス 520"
                    d="M523.44,396.42"
                    transform="translate(-504.842 -284.642)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  />
                  <path
                    id="パス_521"
                    data-name="パス 521"
                    d="M678.907,334.92a64.434,64.434,0,0,0-4.513,128.706,58.141,58.141,0,1,1,65.051-85.772,15.723,15.723,0,0,0,1.612,4.447,64.464,64.464,0,0,0-62.15-47.382Z"
                    transform="translate(-541.331 -260.004)"
                    fill="#2baaaa"
                  />
                  <path
                    id="パス_522"
                    data-name="パス 522"
                    d="M584.1,215.88c-64.32-22.075-92.815,27.925-91.706,30.743,1.2,3,5.394,2.4,16.183,3,8.074.45,17.154,5.263,21.212,7.654A108.435,108.435,0,0,1,584.1,215.88Z"
                    transform="translate(-492.39 -210.068)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="パス_523"
                    data-name="パス 523"
                    d="M734.424,324.4a8.136,8.136,0,0,0-.048-.833,15.7,15.7,0,0,0-1.151-4.927c-2.194-6.755-6.533-15.452-5.394-20.014,4.2-16.783-.33-33.626-11.095-47.322a108.189,108.189,0,0,0-193.3,66.8c0,1.127,0,2.248.054,3.363l-.054-.066A113.286,113.286,0,0,0,636.724,434.682s9.374.767,31.468-1.5c23.376-2.4,24.833-7.492,35.064-7.492,10.789,0,16.183,3.6,17.982,1.2s-5.994-16.783-6.593-26.373.6-26.373-1.2-25.774-12.587,12.587-19.78,18.581-11.988,7.792-12.587,9.59,0,5.394-1.8,6.593-12.587,5.994-26.373,5.994a58.143,58.143,0,0,1-14.985-1.96A64.434,64.434,0,0,1,597.98,302.655s7.594,10.981,9.392,22.969,1.8,21.986,2.1,23.28,2.1.7,3.3-.5,18.581-10.19,22.777-24.575c4.142-14.211,5.946-22,5.395-38.96h1.48a64.462,64.462,0,0,1,62.149,47.364,15.872,15.872,0,0,0,29.857-7.517v-.3Z"
                    transform="translate(-504.842 -209.92)"
                    fill="url(#radial-gradient-2)"
                  />
                </g>
                <text
                  id="Reshelf"
                  transform="translate(1524 -1873)"
                  fill="#334663"
                  font-size="239"
                  font-family="TeluguMN, Telugu MN"
                >
                  <tspan x="0" y="0">Reshelf</tspan>
                </text>
              </g>
            </svg> -->
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
                  <span class="menu-name-person">
                    <!-- {{ loggedInUser.name }} -->
                    Elizabeth Swan
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

<script lang="ts">
import Vue from 'vue'
import ReButton from '@/components/atoms/ReButton.vue'
import ReModal from '@/components/atoms/ReModal.vue'
// import {
//   // MenuIcon,
//   ShoppingCartIcon,
//   HeartIcon,
// } from 'vue-feather-icons'

export default Vue.extend({
  components: {
    ReButton,
    ReModal,
    // MenuIcon,
    // ShoppingCartIcon,
    // HeartIcon,
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
})
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
  background-color: var(--bg-secondary);
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

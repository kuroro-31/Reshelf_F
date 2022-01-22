<template>
  <button
    v-if="$store.state.authenticate.authenticated"
    class="dropdown"
    @mouseover="cart = true"
    @mouseleave="cart = false"
  >
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
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
    <transition>
      <div v-if="cart">
        <div
          class="dropdown-contents"
          @mouseover="cart = true"
          @mouseleave="cart = false"
        >
          <div class="cart-content">
            <!-- <p class="cart-content-name">My Cart</p>
            <p class="divider"></p> -->

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
                      ゼロからはじめる Dockerによるアプリケーション実行環境構築
                    </p>
                    <p class="cart-content-author">クラピカクラピカクラピカ</p>
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
                      ゼロからはじめる Dockerによるアプリケーション実行環境構築
                    </p>
                    <p class="cart-content-author">クラピカクラピカクラピカ</p>
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
                      ゼロからはじめる Dockerによるアプリケーション実行環境構築
                    </p>
                    <p class="cart-content-author">クラピカクラピカクラピカ</p>
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
                      ゼロからはじめる Dockerによるアプリケーション実行環境構築
                    </p>
                    <p class="cart-content-author">クラピカクラピカクラピカ</p>
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
                      ゼロからはじめる Dockerによるアプリケーション実行環境構築
                    </p>
                    <p class="cart-content-author">クラピカクラピカクラピカ</p>
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
                      ゼロからはじめる Dockerによるアプリケーション実行環境構築
                    </p>
                    <p class="cart-content-author">クラピカクラピカクラピカ</p>
                  </div>
                  <div class="cart-content-price">¥ 3,500</div>
                </div>
              </div>
              <p class="divider"></p>
            </div>

            <ReButton class="pt-4 re-button re-button-small">
              <button
                class="re-button-primary-filled bg-primary w-full duration-500"
                @click="search"
              >
                カートに移動
              </button>
            </ReButton>
          </div>
        </div>
      </div>
    </transition>
  </button>
</template>
<script>
import ReButton from '@/components/atoms/ReButton'
export default {
  components: {
    ReButton,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(`/api/cart/`)
    return { items: data }
  },
  data() {
    return {
      cart: false,
      items: [],
    }
  },
  methods: {
    search() {
      this.$router.push({ name: 'item-cart' })
    },
  },
}
</script>
<style lang="scss" scoped>
.dropdown {
  @apply px-3 relative;
  height: 60px;
  &-icon {
    // @apply flex-shrink-0 inline-block cursor-pointer;
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
</style>

<template>
  <button class="dropdown" @mouseover="cart = true" @mouseleave="cart = false">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="svg-icon"
    >
      <path
        d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"
      ></path>
      <circle cx="10.5" cy="19.5" r="1.5"></circle>
      <circle cx="17.5" cy="19.5" r="1.5"></circle>
    </svg>
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

            <re-button class="pt-4 re-button re-button-small">
              <button
                class="re-button-primary-filled bg-primary ml-auto duration-500"
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
</template>
<script>
export default {
  data() {
    return {
      cart: false,
    }
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

<template>
  <div class="w-full flex mx-auto">
    <div class="w-full">
      <div class="items">
        <div v-for="item in carts" :key="item.id" class="item">
          <!-- 左サイド -->
          <div class="relative flex flex-col items-start">
            <nuxt-link
              to="/item/detail"
              @mouseover="visible = true"
              @mouseleave="visible = false"
            >
              <img
                v-if="item.thumbnail"
                :src="item.thumbnail"
                alt="text image"
                class="cart-content-img"
                :value="item"
              />
              <img
                v-else
                src="@/assets/images/noimage.svg"
                alt="cource image"
                class="cart-content-img"
                :value="item"
              />
            </nuxt-link>
          </div>

          <!-- センター -->
          <div class="center">
            <nuxt-link
              class="text-lg font-bold cursor-pointer"
              to="/item/detail"
            >
              {{ item.title }}
            </nuxt-link>

            <!-- 作者 -->
            <nuxt-link to="/user/top" class="name text-xs cursor-pointer">
              {{ item.name }}
            </nuxt-link>
          </div>

          <!-- 右サイド -->
          <div class="right-box">
            <div class="flex flex-col items-end">
              <span class="text-xs cursor-pointer" @click="deleteCart(item)">
                {{ $t('削除') }}
              </span>
              <span class="text-xs whitespace-nowrap">
                {{ $t('ほしいものリストに追加') }}
              </span>
            </div>
            <div class="flex items-center ml-8">
              <!-- セール価格 -->
              <span class="right-box-sale">
                {{ $moneyFormat(item.price) }}
              </span>
            </div>
          </div>
        </div>
        <nuxt-link to="/">
          <span>{{ $t('ショッピングを続ける') }}</span>
        </nuxt-link>
      </div>
    </div>
    <Toast :success="success" :error="error">
      <template v-if="success">{{ $t('商品を削除しました') }}</template>
      <template v-else>{{ $t('商品を削除できませんでした') }}</template>
    </Toast>
  </div>
</template>
<script>
import Toast from '@/components/atoms//Toast'
export default {
  components: {
    Toast,
  },
  data() {
    return {
      visible: false,
      isLiked: false,
      isDisabled: false,
      success: false,
      error: false,
    }
  },
  computed: {
    carts() {
      return this.$store.getters['cart/carts']
    },
  },
  methods: {
    deleteCart(item) {
      try {
        this.$store.dispatch('cart/clear', item)
        this.success = true
        setTimeout(() => (this.success = false), 5000)
      } catch (error) {
        console.log(error)
        this.error = true
        setTimeout(() => (this.error = false), 5000)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.items {
  @apply flex relative flex-col w-full justify-center;
}
.item {
  @apply flex pb-4 mb-4 relative justify-between;
  // @apply flex pb-6 mb-6 relative;
  border-bottom: 1px var(--thin-gray) solid;
}
.center {
  @apply flex flex-col px-6 items-start w-full;
  @screen lg {
    // min-width: 576px;
  }
}
// 商品画像
.img {
  @apply object-cover cursor-pointer;
  height: 70px;
  min-height: 70px;
  max-height: 70px;
  width: 130px;
  min-width: 130px;
  max-width: 130px;
}
.right-box {
  @apply flex items-center justify-center pl-4;
  color: var(--sub-color);
  border-left: 1px var(--thin-gray) solid;
  &-sale {
    @apply text-xl font-bold;
    color: var(--red);
  }
  &-normal {
    @apply line-through ml-2;
    color: var(--sub-color);
  }
}
.visible {
  display: flex;
}

.name {
  color: var(--sub-color);
}
</style>

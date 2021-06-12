<template>
  <div class="w-full flex mx-auto">
    <div class="w-full">
      <div class="items">
        <div v-for="item in items" :key="item.id" class="item">
          <!-- 左サイド -->
          <div class="relative flex flex-col items-start">
            <nuxt-link
              to="/item/detail"
              @mouseover="visible = true"
              @mouseleave="visible = false"
            >
              <img :src="item.src" alt="text image" class="img" />
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
            <nuxt-link to="/user/top" class="name text-sm cursor-pointer">
              {{ item.name }}
            </nuxt-link>
          </div>

          <!-- 右サイド -->
          <div class="right-box">
            <div class="flex flex-col items-end">
              <span class="text-sm">削除</span>
              <span class="text-sm whitespace-nowrap">お気に入りに移動</span>
            </div>
            <div class="flex items-center ml-8">
              <!-- セール価格 -->
              <span class="right-box-sale">
                {{ item.sale_price | moneyFormat }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  filters: {
    numberFormat: function (num) {
      return num.toLocaleString()
    },
    moneyFormat(num) {
      return (
        '¥' +
        (num || 0)
          .toString()
          .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
      )
    },
    comma: function (num) {
      return num.toFixed(1)
    },
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      visible: false,
      isLiked: false,
      isDisabled: false,
    }
  },
  methods: {},
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
.tag {
  @apply px-2 py-1 mr-2;
  border: 1px solid var(--ccc);
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

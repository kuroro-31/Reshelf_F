<template>
  <div class="w-full flex mx-auto">
    <div class="w-full">
      <div class="flex items-center justify-between mb-4">
        <span>27 results found</span>
        <div class="filter">
          <!-- ユーザードロップダウン -->
          <button
            class="dropdown"
            @mouseover="dropdown = true"
            @mouseleave="dropdown = false"
          >
            <span>Featured</span>
            <chevron-down-icon
              size="1x"
              class="inline-block"
            ></chevron-down-icon>
            <transition>
              <div
                v-if="dropdown"
                class="dropdown-contents scroll-none"
                @mouseover="dropdown = true"
                @mouseleave="dropdown = false"
              >
                <div class="menu">
                  <div class="menu-me">
                    <nuxt-link class="menu-me-link" to="/user/learning">
                      Lowest
                    </nuxt-link>
                    <nuxt-link class="menu-me-link" to="/user/like">
                      Highest
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </transition>
          </button>
          <div class="filter-icons">
            <grid-icon size="1.5x" class="filter-icons-grid"></grid-icon>
            <list-icon size="1.5x" class="filter-icons-list"></list-icon>
          </div>
        </div>
      </div>
      <div class="items">
        <div v-for="item in items" :key="item.id" class="card item">
          <!-- 左サイド -->
          <div class="relative flex flex-col items-start">
            <nuxt-link
              to="/item/detail"
              @mouseover="visible = true"
              @mouseleave="visible = false"
            >
              <img :src="item.src" alt="text image" class="img" />
            </nuxt-link>

            <div
              class="content"
              :class="{ visible: visible === true }"
              @mouseover="visible = true"
              @mouseleave="visible = false"
            >
              <!-- 説明 -->
              <div class="flex w-full items-center mt-1">
                {{ item.describe }}
              </div>
              <!-- 最終更新
              <p class="name text-xs">最終更新日：{{ item.edit_time }}</p> -->
            </div>
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

            <div class="flex items-center mt-1">
              <div class="flex items-center">
                <!-- レート -->
                <p
                  class="rate"
                  :class="{
                    rate_one: item.rate >= 0,
                    rate_two: item.rate >= 3.0,
                    rate_three: item.rate >= 4.0,
                    rate_four: item.rate >= 4.6,
                  }"
                >
                  {{ item.rate | comma }}
                </p>
                <!-- レート画像 -->
                <div
                  class="rate_img"
                  :class="{
                    rate_img_zero: item.rate >= 0.0,
                    rate_img_one: item.rate >= 1.0,
                    rate_img_one_five: item.rate >= 1.5,
                    rate_img_two: item.rate >= 2.0,
                    rate_img_two_five: item.rate >= 2.5,
                    rate_img_three: item.rate >= 3.0,
                    rate_img_three_five: item.rate >= 3.5,
                    rate_img_four: item.rate >= 4.0,
                    rate_img_four_five: item.rate >= 4.5,
                    rate_img_four_seven: item.rate >= 4.7,
                    rate_img_five: item.rate >= 5.0,
                  }"
                ></div>
              </div>
              <p class="name ml-1 text-xs">
                （総合評価：{{ item.all_rate | comma }}）
              </p>
            </div>

            <!-- 最終更新
            <p class="name text-xs text-right mt-1">
              更新：{{ item.edit_time }}
            </p> -->
            <div class="flex items-center">
              <!-- 教材レベル -->
              <!-- <span
                class="level"
                :class="{
                  level_one: item.level === '初級',
                  level_two: item.level === '中級',
                  level_three: item.level === '上級',
                  level_four: item.level === '特級',
                }"
              > -->
              <span class="level">
                {{ item.level }}
              </span>
              <!-- デモ -->
              <a :href="item.demo" class="demo" target="_blank">DEMO</a>
            </div>
          </div>

          <!-- 右サイド -->
          <div class="right-box">
            <div class="flex items-center mb-4">
              <!-- セール価格 -->
              <span class="right-box-sale">
                {{ item.sale_price | moneyFormat }}
              </span>

              <!-- 定価 -->
              <span class="right-box-normal">
                {{ item.normal_price | moneyFormat }}
              </span>
            </div>

            <!-- ボタン -->
            <div class="flex flex-col w-full">
              <re-button
                class="re-button h-full no-shadow"
                :class="isLiked ? 'no-shadow' : ''"
              >
                <button
                  type="submit"
                  class="re-button-primary-border"
                  @click="isLiked = !isLiked"
                >
                  <heart-icon
                    size="1x"
                    class="mr-2"
                    :class="isLiked ? 'text-red' : ''"
                  ></heart-icon>
                  <span :class="!isLiked ? 'block' : 'hidden'">
                    お気に入りに追加
                  </span>
                  <span :class="isLiked ? 'block' : 'hidden'">お気に入り</span>
                </button>
              </re-button>
              <re-button
                class="re-button h-full mt-2"
                :class="isDisabled ? 'no-shadow' : ''"
              >
                <button
                  type="submit"
                  class="re-button-primary-filled"
                  @click="$router.push('/item/cart')"
                >
                  <shopping-cart-icon
                    size="1x"
                    class="mr-2"
                  ></shopping-cart-icon>
                  カートに入れる
                </button>
              </re-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ReButton from '@/components/atoms/ReButton'
import {
  HeartIcon,
  ShoppingCartIcon,
  GridIcon,
  ListIcon,
  ChevronDownIcon,
} from 'vue-feather-icons'
export default {
  components: {
    ReButton,
    HeartIcon,
    ShoppingCartIcon,
    GridIcon,
    ListIcon,
    ChevronDownIcon,
  },
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
      dropdown: false,
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.dropdown {
  @apply py-2 px-3 relative rounded mr-4;

  border: 1px solid var(--color);
  &-icon {
    @apply flex-shrink-0 inline-block cursor-pointer;
  }
  &-img {
    @apply object-cover rounded-full shadow-lg cursor-pointer;
    width: 40px;
    height: 40px;
  }
  &-contents {
    @apply absolute top-0 right-0 z-50 rounded shadow-lg overflow-y-auto cursor-default;
    background-color: var(--bg);
    @screen lg {
      margin-top: 40px;
      width: 100px;
    }
  }
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
    @apply flex flex-col items-start;
    border-bottom: 1px solid #ccc;
    &-title {
      @apply text-sm font-bold pt-2;
      color: var(--sub-color);
    }
    &-link {
      @apply py-3 w-full rounded text-left px-4 duration-200;
      &:hover {
        @apply cursor-pointer;
        background: #f0f2f6;
        border-radius: 6px;
      }
    }
  }
}
.filter {
  @apply flex items-center;
  &-icons {
    @apply flex items-center flex-shrink-0;
    &-grid {
      @apply cursor-pointer block flex-shrink-0 py-2 rounded-l;
      height: 38px;
      width: 50px;
      border: solid 1px var(--color);
      border-right: none;
      &:hover {
        // @apply;
        background: var(--eee);
      }
    }
    &-list {
      @apply cursor-pointer block flex-shrink-0 py-2 rounded-r;
      height: 38px;
      width: 50px;
      border: solid 1px var(--color);
      &:hover {
        // @apply;
        background: var(--eee);
      }
    }
  }
}
.items {
  @apply flex relative flex-col w-full justify-center;
}
.item {
  // @apply flex pb-8 mb-8 relative justify-between;
  // @apply flex pb-6 mb-6 relative;
  // border-bottom: 1px var(--thin-gray) solid;
  @apply flex mb-6 relative;
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
  height: 140px;
  min-height: 140px;
  max-height: 140px;
  width: 260px;
  min-width: 260px;
  max-width: 260px;
  // height: 200px;
  // min-height: 200px;
  // max-height: 200px;
  // width: 150px;
  // min-width: 150px;
  // max-width: 150px;
}

.content {
  @apply flex flex-col items-center justify-center absolute hidden shadow-lg rounded p-6;
  background-color: var(--bg);
  top: 0px;
  left: 125px;
  max-height: 300px;
  width: 400px;
  z-index: 510;
}
.tag {
  @apply px-2 py-1 mr-2;
  border: 1px solid var(--ccc);
}
.right-box {
  @apply flex items-center justify-center flex-col px-8 lg:pr-0;
  // min-width: 100px;
  min-width: 275px;
  width: 275px;
  border-left: 1px var(--thin-gray) solid;
  &-sale {
    @apply text-3xl;
    // color: var(--red);
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
// いいね
.like {
  @apply p-2.5 ml-4 rounded-full cursor-pointer;
  color: var(--aaa);
  border: 1px solid var(--ccc);
  &-yes {
    color: var(--fff);
    background: var(--red);
    border: 1px solid var(--red);
    &:hover {
      @apply duration-200;
      -webkit-box-shadow: 0 8px 25px -8px var(--red);
      box-shadow: 0 8px 25px -8px var(--red);
    }
  }
}
// 教材レベル
.level {
  @apply flex justify-end mt-2 px-2 py-1 mr-2 text-xs cursor-pointer;
  max-width: 50px;
  border: 1px solid var(--sub-color);
  color: var(--sub-color);
  &_one {
    border: 1px solid $green;
    color: $green;
  }
  &_two {
    border: 1px solid $yellow;
    color: $yellow;
  }
  &_three {
    border: 1px solid $red;
    color: $red;
  }
  &_four {
    border: 1px solid $purple;
    color: $purple;
  }
}
// 教材評価
.rate {
  @apply text-2xl font-bold cursor-default;
  &_one {
    color: $green;
  }
  &_two {
    color: $yellow;
  }
  &_three {
    color: $red;
  }
  &_four {
    color: $purple;
  }
}
// 教材評価画像
.rate_img {
  @apply flex items-center ml-2;
  &_zero {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/zero.svg');
  }
  &_one {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/one.svg');
  }
  &_one_five {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/one-five.svg');
  }
  &_two {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/two.svg');
  }
  &_two_five {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/two-five.svg');
  }
  &_three {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/three.svg');
  }
  &_three_five {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/three-five.svg');
  }
  &_four {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/four.svg');
  }
  &_four_five {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/four-five.svg');
  }
  &_four_seven {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/four-seven.svg');
  }
  &_five {
    height: 17px;
    width: 100px;
    background-image: url('~@/assets/images/rate/five.svg');
  }
}
.demo {
  @apply inline-flex justify-center items-center mt-2 px-4 py-1 text-xs cursor-pointer;
  max-width: 50px;
  border: 1px solid var(--sub-color);
  color: var(--sub-color);
}
</style>

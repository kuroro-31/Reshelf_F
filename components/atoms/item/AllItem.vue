<template>
  <div class="w-full flex mx-auto">
    <div class="w-full">
      <div class="items">
        <div v-for="item in items" :key="item.id" class="item">
          <img
            :src="item.src"
            alt="text image"
            class="img"
            @mouseover="visible = true"
            @mouseleave="visible = false"
          />

          <div class="flex flex-col px-4">
            <h3 class="text-lg font-bold mb-2 cursor-pointer">
              {{ item.title }}
            </h3>
            <p class="mb-2">{{ item.describe }}</p>
            <p class="name mb-2 text-xs cursor-pointer">{{ item.name }}</p>
            <p class="name mb-2 text-xs">最終更新日：{{ item.edit_time }}</p>
            <div class="flex items-center">
              <div class="flex items-center">
                <p
                  class="rate"
                  :class="{
                    rate_one: item.rate >= 0,
                    rate_two: item.rate >= 3.0,
                    rate_three: item.rate >= 4.0,
                    rate_four: item.rate >= 4.6
                  }"
                >
                  {{ item.rate | comma }}
                </p>
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
                    rate_img_five: item.rate >= 5.0
                  }"
                ></div>
              </div>
              <p class="name ml-1 text-xs">
                （総合評価：{{ item.all_rate | comma }}）
              </p>
            </div>
          </div>

          <div class="right-box">
            <!-- セール価格 -->
            <span class="right-box-sale">
              {{ item.sale_price | moneyFormat }}
            </span>

            <!-- 定価 -->
            <span class="right-box-normal">
              {{ item.normal_price | moneyFormat }}
            </span>

            <!-- 教材レベル -->
            <span
              class="level"
              :class="{
                level_one: item.level === '初級',
                level_two: item.level === '中級',
                level_three: item.level === '上級',
                level_four: item.level === '特級'
              }"
            >
              {{ item.level }}
            </span>
          </div>
        </div>

        <div
          class="content"
          :class="{ visible: visible === true }"
          @mouseover="visible = true"
          @mouseleave="visible = false"
        >
          <div class="flex w-full items-center">
            <div class="flex flex-col w-full">
              <re-button
                class="re-button h-full re-button-large mb-4"
                :class="isDisabled ? 'no-shadow' : ''"
              >
                <button
                  type="submit"
                  :class="
                    isDisabled
                      ? 're-button-disabled no-shadow'
                      : 're-button-primary-filled'
                  "
                  :disabled="isDisabled"
                  @click="isDisabled = !isDisabled"
                >
                  今すぐ購入する
                </button>
              </re-button>
              <button class="cart-in">カートに入れる</button>
            </div>

            <button
              class="like"
              :class="{ 'like-yes': liked == true }"
              @click="liked = !liked"
            >
              <heart-icon size="1.5x"></heart-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ReButton from '@/components/atoms/ReButton'
import { HeartIcon } from 'vue-feather-icons'
export default {
  components: {
    ReButton,
    HeartIcon
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
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      liked: false,
      visible: false,
      isDisabled: false
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.items {
  @apply flex relative flex-col w-full justify-center;
}
.item {
  @apply flex pb-4 mb-4 relative;
  border-bottom: 1px var(--ccc) solid;
}
.img {
  @apply object-cover cursor-pointer rounded;
  width: 260px;
  min-width: 260px;
  max-width: 260px;
  height: 140px;
  min-height: 140px;
  max-height: 140px;
}

.content {
  @apply flex flex-col items-center justify-center absolute hidden shadow rounded p-6;
  background: var(--fff);
  top: 0px;
  left: 250px;
  max-height: 300px;
  width: 400px;
  z-index: 510;
}
.tag {
  @apply px-2 py-1 mr-2;
  border: 1px solid var(--ccc);
}
.right-box {
  @apply flex items-end flex-col pl-4;
  min-width: 100px;
  &-sale {
    @apply text-lg font-bold;
    // color: var(--red);
  }
  &-normal {
    @apply line-through;
  }
}
.visible {
  display: flex;
}

.name {
  color: var(--sub-color);
}
.cart-in {
  @apply px-4 py-1 outline-none text-xs font-bold;
  color: var(--primary);
}
.like {
  @apply p-2.5 ml-4 rounded-full cursor-pointer outline-none;
  color: var(--aaa);
  border: 2px solid var(--ccc);
  &-yes {
    color: var(--fff);
    background: var(--red);
    border: 2px solid var(--red);
    &:hover {
      @apply duration-200;
      -webkit-box-shadow: 0 8px 25px -8px var(--red);
      box-shadow: 0 8px 25px -8px var(--red);
    }
  }
}
// 教材レベル
.level {
  @apply flex justify-end inline-block mt-2 px-2 py-1 mr-2 font-bold rounded cursor-pointer;
  margin-right: 0 !important;
  &_one {
    border: 2px solid $green;
    color: $green;
    &:hover {
      @apply duration-300;
      -webkit-box-shadow: 0 8px 25px -8px $green;
      box-shadow: 0 8px 25px -8px $green;
    }
  }
  &_two {
    border: 2px solid $yellow;
    color: $yellow;
    &:hover {
      @apply duration-300;
      -webkit-box-shadow: 0 8px 25px -8px $yellow;
      box-shadow: 0 8px 25px -8px $yellow;
    }
  }
  &_three {
    border: 2px solid $red;
    color: $red;
    &:hover {
      @apply duration-300;
      -webkit-box-shadow: 0 8px 25px -8px $red;
      box-shadow: 0 8px 25px -8px $red;
    }
  }
  &_four {
    border: 2px solid $purple;
    color: $purple;
    &:hover {
      @apply duration-300;
      -webkit-box-shadow: 0 8px 25px -8px $purple;
      box-shadow: 0 8px 25px -8px $purple;
    }
  }
}
// 教材評価
.rate {
  @apply text-xl font-bold cursor-default;
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
</style>

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
            <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
            <p class="mb-2">
              {{ item.describe }}
            </p>
            <p class="name mb-2 text-xs">
              {{ item.name }}
            </p>
            <div class="flex">
              <span v-for="tag in item.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="price">
            <span class="price-sale">¥{{ item.sale_price }}</span>
            <span class="price-normal">¥{{ item.normal_price }}</span>
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
import ReButton from '@/components/atoms/button/ReButton'
import { HeartIcon } from 'vue-feather-icons'
export default {
  components: {
    ReButton,
    HeartIcon
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
.price {
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
  @apply p-2.5 ml-4 rounded-full cursor-pointer outline-none duration-200;
  color: var(--aaa);
  border: 2px solid var(--ccc);
  &-yes {
    @apply duration-100;
    color: var(--fff);
    background: var(--red);
    border: 2px solid var(--red);
    &:hover {
      @apply duration-300;
      -webkit-box-shadow: 0 8px 25px -8px var(--red);
      box-shadow: 0 8px 25px -8px var(--red);
    }
  }
}
</style>

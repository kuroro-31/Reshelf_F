<template>
  <div>
    <div v-for="(category, index) in categories" :key="index">
      <!-- 親カテゴリー -->
      <div
        :class="{ 'toggle-on': category.toggleOn }"
        class="
          cate-ttl
          w-full
          relative
          inline-flex
          justify-between
          items-center
        "
        @click="category.toggleOn = !category.toggleOn"
      >
        <a
          href="#"
          class="title font-semibold text-xl hover:text-blue flex-shrink-0"
        >
          {{ category.name }}
        </a>
        <div
          v-if="category.subcategories.length != 0"
          class="w-full relative flex justify-end"
        >
          <chevron-right-icon
            size="1x"
            class="arrow flex-shrink-0"
          ></chevron-right-icon>
        </div>
      </div>

      <!-- 子カテゴリー -->
      <ul
        v-for="subcategory in category.subcategories"
        :key="subcategory"
        :class="{ show: category.toggleOn }"
        class="cate-items"
      >
        <li>
          <vs-checkbox v-model="checkBox" class="checkbox">
            {{ subcategory }}
          </vs-checkbox>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//Icons
import { ChevronRightIcon } from 'vue-feather-icons'

export default {
  components: {
    ChevronRightIcon,
  },
  data() {
    return {
      checkBox: '',
      categories: [
        {
          name: '評価',
          subcategories: ['4.5以上', '4.0以上', '3.5以上'],
          toggleOn: true,
        },
        {
          name: '値段',
          subcategories: ['2,500円', '5,000円', '7,500円', '10,000円'],
          toggleOn: true,
        },
        {
          name: 'トピック',
          subcategories: [
            'Javascript',
            'React',
            'Vue.js',
            'Laravel',
            'Ruby',
            'AWS',
            'Python',
            'HTML',
            'CSS',
          ],
          toggleOn: true,
        },
        {
          name: 'レベル',
          subcategories: ['初級', '中級', '上級', '特級', 'すべて'],
          toggleOn: true,
        },
        {
          name: '言語',
          subcategories: ['英語', '日本語'],
          toggleOn: true,
        },
        {
          name: '特徴',
          subcategories: ['デモページ有り', 'サブスク対象教材'],
          toggleOn: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.cate-ttl {
  padding: 8px;
  margin-bottom: 3.5px;
  transition: all 0.2s ease;
  > a {
    transition: inherit;
    max-width: calc(100% - 14px);
  }
  .arrow {
    transition: all 0.2s ease-out;
    transform: translateX(0) rotate(90deg);
  }

  &:hover {
    @apply cursor-pointer;
    transform: translateX(5px);
    background-color: rgba($primary, 0.08);
    border-radius: 6px;
  }
  &.toggle-on {
    border-radius: 6px;
    .arrow {
      transform: rotate(270deg);
    }
  }
}
.cate-items {
  max-height: 0;
  opacity: 0;
  transition: all 0.2s ease;
  &.show {
    opacity: 1;
    max-height: 100vh;
  }
  > li {
    padding: 10px;
    transition: all 0.2s ease;
    &:hover {
      @apply cursor-pointer;
      transform: translateX(5px);
      background-color: rgba($primary, 0.08);
      border-radius: 6px;
    }
    .feather.feather-circle {
      margin-top: 8px;
    }
  }
}
.title {
  color: var(--color);
}
.checkbox {
  @apply w-full flex;
  justify-content: flex-start;
}
</style>

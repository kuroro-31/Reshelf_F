<template>
  <button
    v-if="$store.state.authenticate.authenticated"
    class="dropdown"
    @mouseover="show = true"
    @mouseleave="show = false"
  >
    <div class="relative">
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
      <BadgeNormal v-if="totalNumber > 0" class="badge">
        {{ totalNumber }}
      </BadgeNormal>
    </div>
    <transition>
      <div v-if="show">
        <div
          class="dropdown-contents"
          @mouseover="show = true"
          @mouseleave="show = false"
        >
          <div v-if="posts.length > 0" class="cart-content">
            <!-- <p class="cart-content-name">My Cart</p>
            <p class="divider"></p> -->

            <CartItem :posts="posts" />

            <re-button class="pt-4 re-button re-button-small">
              <button
                class="re-button-primary-filled bg-primary w-full duration-500"
                @click="search"
              >
                カートに移動
              </button>
            </re-button>
          </div>
          <div v-else class="p-8">カートに商品がありません</div>
        </div>
      </div>
    </transition>
  </button>
</template>
<script>
import { mapActions } from 'vuex'
import CartItem from '@/components/layout/header/components/carts/CartItem'
import ReButton from '@/components/atoms/ReButton'
import BadgeNormal from '@/components/atoms/BadgeNormal'
export default {
  components: {
    CartItem,
    ReButton,
    BadgeNormal,
  },
  data() {
    return {
      show: false,
      posts: '',
      user: this.$store.getters['authenticate/user'],
    }
  },
  computed: {
    // カート商品の数
    totalNumber() {
      let posts = this.posts
      let totalNumber = posts.length
      return totalNumber
    },
  },
  mounted() {
    this.fetch()
  },
  methods: {
    ...mapActions({
      stateLogout: 'authenticate/logout',
    }),
    search() {
      this.$nuxt.$router.push({
        path: `/user/${this.user.id}/cart`,
      })
    },
    async fetch() {
      try {
        await this.$axios.$get(`/api/cart`).then((response) => {
          this.posts = response.data
        })
      } catch (error) {
        if (error.response.status == '401') {
          this.stateLogout()
          this.$nuxt.$router.push('/auth/login')
        } else if (error.response.status == '404') {
          this.$nuxt.$router.push('/error/404')
        } else if (error.response.status == '500') {
          this.$nuxt.$router.push('/error/500')
        }
      }
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
      min-width: 300px;
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

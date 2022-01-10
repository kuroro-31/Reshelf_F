<template>
  <div class="item">
    <span class="item-title">共通</span>
    <nuxt-link class="item-link" to="/user/setting">アカウント設定</nuxt-link>
    <nuxt-link
      class="item-link"
      :to="{ name: 'user-id', params: { id: user.name } }"
    >
      プロフィール編集
    </nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      user: [],
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      return axios
        .get('/api/user')
        .then((response) => {
          this.user = response.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  @apply duration-200 flex flex-col;
  &-title {
    @apply text-xs font-bold pt-2;
    color: var(--sub-color);
  }
  &-link {
    @apply duration-200 px-4 py-2 w-full h-full;
    color: var(--color);
    &:hover {
      @apply cursor-pointer;
      transform: translateX(5px);
      background: #f0f2f6;
      border-radius: 6px;
    }
  }
}
.title {
  color: var(--color);
}
</style>

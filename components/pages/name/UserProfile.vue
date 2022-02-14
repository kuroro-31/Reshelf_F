<template>
  <div>
    <div class="user-profile">
      <div class="flex items-start divider">
        <img
          v-if="currentUser.icon"
          :src="currentUser.icon"
          :alt="currentUser.nickname + ' icon image'"
        />
        <img
          src="https://source.unsplash.com/190x190?urban"
          :alt="currentUser.nickname + ' icon image'"
        />
        <div class="w-full flex items-center justify-between">
          <div class="user-name">
            <div class="nickname">
              {{ currentUser.nickname }}
            </div>
            <div class="flex items-center">
              <p>
                <span class="font-bold">
                  <AnimatedNumber :value="number" />
                </span>
                {{ $t('フォロー中') }}
              </p>
              <p class="ml-4">
                <span class="font-bold">
                  <AnimatedNumber :value="number" />
                </span>
                {{ $t('フォロワー') }}
              </p>
            </div>
          </div>
          <template v-if="user.id == currentUser.id">
            <ReButton
              class="re-button re-button-small no-shadow whitespace-nowrap"
            >
              <button class="re-button-primary bg-primary" @click="create">
                {{ $t('コースの作成') }}
              </button>
            </ReButton>
          </template>
          <ReButton v-else class="re-button w-auto">
            <button type="submit" class="re-button-primary-filled bg-primary">
              {{ $t('チャンネル登録') }}
            </button>
          </ReButton>
        </div>
      </div>

      <div class="item">
        <nuxt-link
          v-if="currentUser.name"
          class="item-link"
          :to="{ name: 'name', params: { name: currentUser.name } }"
        >
          {{ $t('マイコース') }}
        </nuxt-link>
        <nuxt-link
          v-if="currentUser.name == user.name"
          class="item-link"
          :to="{ name: 'name-learning', params: { name: user.name } }"
        >
          {{ $t('受講中のコース') }}
        </nuxt-link>
        <nuxt-link
          v-if="currentUser.name == user.name"
          class="item-link"
          :to="{ name: 'name-like', params: { name: user.name } }"
        >
          {{ $t('お気に入り') }}
        </nuxt-link>
        <nuxt-link
          v-if="currentUser.name == user.name"
          class="item-link"
          :to="{ name: 'name-archive', params: { name: user.name } }"
        >
          {{ $t('アーカイブ') }}
        </nuxt-link>
        <nuxt-link
          v-if="currentUser.name == user.name"
          class="item-link"
          :to="{ name: 'name-setting', params: { name: user.name } }"
        >
          {{ $t('設定') }}
        </nuxt-link>
        <nuxt-link
          v-if="currentUser.name"
          class="item-link"
          :to="{
            name: 'name-spring',
            params: { name: currentUser.name },
          }"
        >
          {{ $t('願いの泉') }}
        </nuxt-link>
      </div>
      <!-- <SidebarSetting class="divider" /> -->
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      number: 32000,
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
      currentUser: 'user/currentUser',
    }),
  },
  methods: {
    async create() {
      await this.$store.dispatch('product/create')
    },
  },
}
</script>
<style lang="scss" scoped>
.user {
  &-profile {
    @apply w-full flex flex-col justify-between py-4 px-6 relative;
    // height: 200px;
    img {
      @apply object-cover rounded-full z-10;
      margin-top: -70px;
      width: 190px;
      height: 190px;
      border: 5px solid var(--bg-secondary);
      // @media screen and (min-width: 1200px) and (max-width: 1440px) {
      //   margin-top: -100px;
      //   min-height: 160px;
      //   max-height: 160px;
      // }
    }
  }
  &-name {
    @apply flex flex-col items-start px-8;
  }
}
.item {
  // @apply flex justify-start;
  &-link {
    @apply py-2 px-3 text-center inline-block;
    &:hover {
      @apply rounded-lg;
      background: #f0f2f6;
    }
  }
}
.nickname {
  @apply font-bold text-5xl;
  line-height: 1.3;
}
</style>

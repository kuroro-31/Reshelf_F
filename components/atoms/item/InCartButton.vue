<template>
  <div class="">
    <ReButton class="re-button re-button-small">
      <button
        :disabled="isClick"
        class="w-full"
        :class="
          isClick != true
            ? 're-button-primary-filled bg-primary'
            : 're-button-primary-border cursor-disabled'
        "
        @click="addCart(item)"
      >
        <template v-if="!isClick">
          {{ $t('カートに入れる') }}
        </template>
        <template v-else>
          <span @click="toCheckout">
            {{ $t('レジに進む') }}
          </span>
        </template>
        <!-- <template>
      {{ $t('コースを受講する') }}
    </template> -->
      </button>
    </ReButton>
    <Toast :success="success" :error="error">
      <template v-if="success">
        {{ $t('カートに追加しました') }}
      </template>
      <template v-else-if="error">
        {{ $t('カートの追加に失敗しました') }}
      </template>
    </Toast>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ReButton from '@/components/atoms/ReButton'
import Toast from '@/components/atoms//Toast'
export default {
  components: {
    ReButton,
    Toast,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isClick: false,
      success: false,
      error: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
    }),
  },
  methods: {
    async addCart(item) {
      try {
        await this.$store.dispatch('cart/add', item)
        this.isClick = true
        this.success = true
        setTimeout(() => (this.success = false), 3000)
      } catch (error) {
        this.error = true
        setTimeout(() => (this.error = false), 3000)

        if (error.response.status == '401' || error.response.status == '419') {
          this.$router.push('/auth/login')
        } else if (error.response.status == '404') {
          this.$router.push('/error/404')
        } else if (error.response.status == '500') {
          this.$router.push('/error/500')
        }
      }
    },
    toCheckout() {
      this.$router.push({
        path: `/user/${this.user.id}/cart`,
      })
    },
  },
}
</script>
<style lang="scss" scoped></style>

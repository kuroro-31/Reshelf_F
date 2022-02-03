<template>
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
        {{ $t('レジに進む') }}
      </template>
      <!-- <template>
      {{ $t('コースを受講する') }}
    </template> -->
    </button>
  </ReButton>
</template>
<script>
import ReButton from '@/components/atoms/ReButton'
export default {
  components: {
    ReButton,
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
    }
  },
  methods: {
    async addCart(item) {
      try {
        await this.$store.dispatch('cart/add', item)
        this.isClick = true
      } catch (error) {
        if (error.response.status == '401' || error.response.status == '419') {
          this.$router.push('/auth/login')
        } else if (error.response.status == '404') {
          this.$router.push('/error/404')
        } else if (error.response.status == '500') {
          this.$router.push('/error/500')
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>

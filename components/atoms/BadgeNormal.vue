<!-- ===================================================================================
    ファイル名: BadgeNormal.vue
    説明： アイコンにつくバッジのコンポーネント
    使用ページ： SP時のheader, SP時のdrawer menu, Searchbar.vueなど
=====================================================================================-->
<script lang="ts" setup>
export default {
  props: {
    isGrey: {
      type: Boolean,
    },
    isDanger: {
      type: Boolean,
    },
  },
  computed: {
    colorSetting() {
      if (this.isGrey) {
        return "bg-grey-20 text-black";
      } else if (this.isDanger) {
        return "bg-danger text-white";
      } else {
        return "bg-primary text-white";
      }
    },
  },
};
</script>

<template>
  <span
    class="badge-normal rounded-full flex items-center justify-center text-sm"
    :class="colorSetting"
  >
    <slot></slot>
  </span>
</template>

<style lang="scss" scoped>
.badge-normal {
  height: 20px;
  min-width: 20px;
  padding: 0 3px !important;
}
</style>

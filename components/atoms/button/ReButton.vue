<template>
  <!--
  FJオリジナルボタン
  以下をボタンを使いたいコンポーネントに追加する
  class(common.scss)とvue-feather-iconは適宜変更する
  ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
①
<re-button class="re-button">
  <button class="re-button-primary-filled">
    <home-icon size="20" class="mr-4"></home-icon>
    FJボタン
  </button>
</re-button>

②
import FjButton from '@/views/components/atoms/buttons/FjButton';
import { HomeIcon } from 'vue-feather-icons';

③
components: {
  FjButton,
  HomeIcon
}

# nomal
<re-button class="re-button">
  <button class="re-button-primary-filled">
    会員登録
  </button>
</re-button>

# extra-large
<re-button class="w-full lg:w-1/2 h-full re-button re-button-primary re-button-filled re-button-extra-large rounded-lg">
  <button class="text-xl lg:text-2xl">
    <send-icon size="20" class="mr-4"></send-icon>
    手動見積もり依頼
  </button>
</re-button>

# ダイアログ
・アップロード
<div class="vx-col w-full lg:w-2/5">
  <form ref="uploadForm1" class="w-2/3 mx-auto re-button re-button-primary re-button-border rounded-lg">
    <label class="text-center text-primary">
    <input
      type="file"
      name="up_image[]"
      multiple accept="image/*"
      class="hidden"
    />
      <upload-icon size="1.5x"></upload-icon>
      アップロード
    </label>
  </form>
</div>
 -->
  <div :disabled="ripple" @click="onClick">
    <transition
      name="ripple"
      @enter="rippleEnter"
      @after-enter="afterRippleEnter"
    >
      <span v-if="ripple" ref="ripple" class="ripple" />
    </transition>

    <!-- ボタンの中身が入る -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ripple: false,
      x: 0,
      y: 0,
    }
  },

  methods: {
    onClick(e) {
      this.x = e.layerX
      this.y = e.layerY
      this.ripple = !this.ripple
      this.$emit('click')
    },
    rippleEnter() {
      this.$refs.ripple.style.top = `${this.y}px`
      this.$refs.ripple.style.left = `${this.x}px`
    },
    afterRippleEnter() {
      this.ripple = false
    },
  },
}
</script>

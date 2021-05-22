<template>
  <!--
  オリジナルボタン
  以下をボタンを使いたいコンポーネントに追加する
  class(common.scss)とvue-feather-iconは適宜変更する
  ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
①
<re-button class="re-button">
  <button class="re-button-primary-filled">
    <home-icon size="20" class="mr-4"></home-icon>
    Reボタン
  </button>
</re-button>

②
import ReButton from '@/views/components/atomss/ReButton';
import { HomeIcon } from 'vue-feather-icons';

③
components: {
  ReButton,
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
      y: 0
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
    }
  }
}
</script>
<style lang="scss">
.re-button {
  @apply block relative overflow-hidden rounded w-full h-full outline-none border-none font-bold;
  &:hover {
    @apply duration-200;
    -webkit-box-shadow: 0 8px 25px -8px $primary;
    box-shadow: 0 8px 25px -8px $primary;
  }
  button,
  label,
  .re-button-inner {
    @apply flex items-center justify-center w-full h-full border-none rounded cursor-pointer duration-200 bg-transparent box-border px-5 py-2 outline-none;
    min-width: 100px; // 2文字などの短いボタンのケースで必要
    color: #fff;
    min-height: 40px;
    font-family: proxima-nova, 'Proxima Nova', 'Noto Sans Japanese',
      -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans,
      sans-serif, MyYuGothicM, YuGothic, 'Hiragino Kaku Gothic ProN', Meiryo;
    font-size: 1rem;
  }
  &:disabled {
    .label {
      @apply opacity-50;
      transform: translateY(1px);
    }
  }
  &:hover {
    .label {
      transform: translateY(1px);
    }
  }
  .label {
    @apply block duration-200;
    pointer-events: none;
    color: var(--fff);
    transform: translateY(0);
  }
  .ripple {
    @apply block absolute top-0 left-0 opacity-0;
    z-index: 1000;
    width: 200px;
    height: 200px;
    border-radius: 9999px;
    pointer-events: none;
    background-color: rgba(lighten($primary, 10%), 0.5);
    transform: translate(-50%, -50%) scale(10);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    &-enter {
      @apply opacity-10;
      transform: translate(-50%, -50%) scale(0);
    }
  }

  &-primary {
    &-filled {
      background: $primary !important;
      color: #fff !important;
      border: 1px solid $primary !important;
    }
    &-border {
      border: 1px solid $primary !important;
      color: $primary !important;
      box-shadow: none !important;
      &:hover {
        background: rgba($primary, 0.1) !important;
        box-shadow: none !important;
      }
    }
  }
  &-secondry {
    &-filled {
      background: rgba(var(--vs-secondry), 1);
      &:hover {
        box-shadow: 0 8px 25px -8px rgba(var(--vs-secondry), 1);
      }
    }
    &-border {
      border: 1px solid rgba(var(--vs-secondry), 1);
      color: $primary;
      &:hover {
        background: $primary;
        color: #fff;
      }
    }
  }
  &-close {
    color: #626262 !important;
    height: 100%; //rippleがはみ出してしまう
    &:hover {
      background: rgba(var(--vs-dark), 0.08) !important;
    }
  }
  &-extra-large {
    @apply font-semibold;
    height: 60px !important;
    font-size: 1.429rem !important;
  }
  &-large {
    @apply font-semibold;
    height: 50px !important;
    font-size: 1.286rem !important;
  }
  &-small {
    height: 38px !important;
  }
  &-extra-small {
    @apply text-base;
    height: 30px !important;
    padding: 0 5px !important;
    font-weight: normal !important;
  }
  &-disabled {
    background: #ccc !important;
    opacity: 0.5;
    cursor: not-allowed !important;
  }
  &-border-disabled {
    border: 1px solid #ccc !important;
    color: #ccc !important;
    cursor: not-allowed !important;
  }
}
</style>

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
  @apply block relative overflow-hidden w-full;
  border-radius: 6px; // リップルの角丸のため必要
  &:hover {
    @apply duration-200;
    -webkit-box-shadow: 0 8px 25px -8px var(--primary);
    box-shadow: 0 8px 25px -8px var(--primary);
  }
  button,
  label,
  .re-button-inner {
    @apply flex items-center justify-center w-full border-none cursor-pointer box-border bg-transparent duration-200 text-base;
    min-width: 100px; // 2文字などの短いボタンのケースで必要
    // height: 100%; // 高さが崩れるので一時コメントアウト
    padding: 0.5rem 1rem;
    min-height: 44px;
    border-radius: 6px;
    color: var(--fff);
    line-height: 1.2;
    // white-space: nowrap; //見切れる部分が出てきたのでカット
    // text-align: center; // justify-content: center;しているのでカット
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
    color: white;
    transform: translateY(0);
  }
  .ripple {
    @apply block absolute top-0 left-0 duration-500 ease-in-out;
    z-index: 1000;
    width: 200px;
    height: 200px;
    border-radius: 9999px;
    pointer-events: none;
    background-color: rgba(#fff, 0.5);
    opacity: 0;
    transform: translate(-50%, -50%) scale(10);
    &-enter {
      opacity: 1;
      transform: translate(-50%, -50%) scale(0);
    }
  }

  &-primary {
    &-filled {
      @apply h-full outline-none;
      background: var(--primary) !important;
      color: #fff !important;
    }
    &-border {
      @apply h-full outline-none;
      border: 1px solid var(--primary) !important;
      color: var(--primary) !important;
      &:hover {
        background: rgba(var(--primary), 0.1);
      }
    }
  }
  &-secondry {
    &-filled {
      @apply h-full outline-none;
      background: rgba(var(--vs-secondry), 1);
      &:hover {
        box-shadow: 0 8px 25px -8px rgba(var(--vs-secondry), 1);
      }
    }
    &-border {
      @apply h-full outline-none;
      border: 1px solid rgba(var(--vs-secondry), 1);
      color: var(--primary);
      &:hover {
        background: rgba(var(--primary), 0.1);
        color: #fff;
      }
    }
  }
  &-close {
    @apply h-full outline-none;
    color: #626262 !important;
    &:hover {
      background: rgba(var(--vs-dark), 0.08) !important;
    }
  }
  &-extra-large {
    @apply h-full font-semibold;
    min-height: 60px !important;
    height: 60px !important;
    font-size: 1.429rem !important;
  }
  &-large {
    @apply h-full font-semibold;
    min-height: 50px !important;
    height: 50px !important;
    font-size: 1.286rem !important;
    font-weight: 600;
  }
  &-small {
    min-height: 38px !important;
    height: 38px !important;
  }
  &-extra-small {
    @apply font-normal;
    min-height: 30px !important;
    height: 30px !important;
    padding: 0 5px !important;
  }
  &-disabled {
    @apply h-full cursor-not-allowed opacity-50;
    background: #ccc !important;
  }
  &-border-disabled {
    @apply h-full cursor-not-allowed;
    border: 1px solid #ccc !important;
    color: #ccc !important;
    cursor: not-allowed !important;
  }
}
</style>

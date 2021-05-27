<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <header class="modal-header">
          <button class="close" @click="$emit('close')">
            <x-icon size="1x" class=""></x-icon>
          </button>
          <div class="title">
            <slot name="header"></slot>
          </div>
        </header>
        <div class="modal-content">
          <slot />
        </div>
        <footer class="modal-footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
import { XIcon } from 'vue-feather-icons'
export default {
  components: {
    XIcon,
  },
}
</script>
<style lang="scss" scoped>
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  &-window {
    @apply rounded;
    background: #fff;
    border-radius: 4px;
    max-width: 600px;
    @media screen and (max-width: 767px) {
      max-width: 90%;
    }
  }
  &-header {
    @apply relative rounded-t text-xl font-bold py-3 pl-3 pr-8;
    background: #f2f2f2;
    text-align: left;
    min-height: 30px;
    .title {
      animation: slide-in 0.4s;
    }
  }
  &-content {
    @apply p-6;
  }

  &-footer {
    @apply rounded-b py-4 px-6;
    background: #fff;
  }
}

.close {
  @apply absolute p-2 rounded duration-300  shadow-lg;
  color: var(--color);
  background: var(--fff);
  top: -10px;
  right: -10px;
  &:hover {
    @apply shadow;
    top: -7px;
    right: -7px;
  }
}

// オーバーレイのトランジション
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s;

  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.3s, transform 0.3s;
  }
}
.modal-enter-active {
  .modal-window {
    animation: bounce-in 0.3s;
  }
}
// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.3s ease 0.2s;
  .modal-window {
    animation: bounce-in 0.3s reverse;
  }
}

.modal-enter,
.modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes slide-in {
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>

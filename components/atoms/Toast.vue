<template>
  <div class="reshelf-toast-wrapper">
    <transition name="reshelf-toast">
      <div
        :class="[
          show
            ? 'block reshelf-toast-enter-active'
            : 'reshelf-toast-leave-to reshelf-toast-leave-active',
        ]"
      >
        <div v-if="createError" class="reshelf-toast reshelf-toast-danger">
          セッションが切れました。再度ログインしてください。
        </div>
        <div class="reshelf-toast">
          <video id="check" autoplay loop muted playsinline>
            <source src="@/assets/images/animation/checkanimation.mp4" />
          </video>
          <div class="mr-4">新しいコースを作成しました。</div>
          <div class="mr-4 cursor-pointer" @click="show = !show">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    }
  },
  mounted() {
    let vid = document.getElementById('check')
    if (vid) {
      vid.playbackRate = 0.5
    }
  },
}
</script>
<style lang="scss" scoped>
.reshelf-toast {
  @apply rounded ml-auto shadow-lg flex items-center w-full justify-between;
  max-width: 400px;
  background: #fff;
  video {
    width: 100px;
    height: 100px;
  }
  &-wrapper {
    @apply fixed w-full;
    bottom: 20px;
    right: 20px;
  }
  &-success {
    color: white;
    background: #01bfa5;
  }
  &-danger {
    color: white;
    background: #ff0062;
  }
}

/* enter transitions */
.reshelf-toast-enter-active {
  animation: wobble 0.5s ease;
}
/* leave transitions */
.reshelf-toast-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
.reshelf-toast-leave-active {
  transition: all 0.3s ease;
}

@keyframes wobble {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  60% {
    transform: translateY(8px);
    opacity: 1;
  }
  70% {
    transform: translateY(-8px);
    opacity: 1;
  }
  80% {
    transform: translateY(4px);
    opacity: 1;
  }
  90% {
    transform: translateY(-4px);
    opacity: 1;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>

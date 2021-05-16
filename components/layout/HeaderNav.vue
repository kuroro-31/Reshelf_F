<template>
  <nav class="nav">
    <div
      class="
        w-full
        container
        mx-auto
        flex flex-wrap
        items-center
        justify-between
        mt-0
        py-2.5
      "
    >
      <div class="nav-left">
        <NuxtLink to="/" class="title-link">
          <h1>
            <img
              src="https://res.cloudinary.com/reshelf/image/upload/v1619871156/Logo_pfuaao.svg"
              alt="Reshelf Logo"
              width="150"
              height="50"
              class="h-6 responsive"
            />
          </h1>
        </NuxtLink>
      </div>

      <div class="nav-center flex items-center"></div>

      <div class="nav-right">
        <re-button class="re-button">
          <button class="re-button-primary-border">ログイン</button>
        </re-button>

        <transition name="lightbox">
          <div v-if="visible" class="lightbox" @click="hide">
            <div class="content"></div>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
import ReButton from '@/components/atoms/button/ReButton'
export default {
  components: {
    ReButton,
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },
  },
}
</script>
<style lang="scss" scoped>
.nav {
  @apply sticky z-50 flex w-full px-8 items-center justify-between top-0 left-0 right-0 transition-colors duration-300 ease-linear bg-white;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 4px;
    background: linear-gradient(
      180deg,
      rgba(9, 30, 66, 0.13) 0,
      rgba(9, 30, 66, 0.13) 1px,
      rgba(9, 30, 66, 0.08) 1px,
      rgba(9, 30, 66, 0) 4px
    );
  }
  &-left {
    height: 45px;
    width: 240px;
  }
  &-center {
    @apply mr-auto;
    height: 45px;
    &-form {
      @apply flex items-center py-2 rounded;
      &-input {
        @apply flex items-center outline-none;
        color: var(--adb);
        font-weight: 500;
      }
      button {
        @apply flex items-center outline-none border py-2 pr-4;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        border-left: none;
        transition: 0.1s ease;
        color: var(--adb);
        &:hover {
          color: $primary;
          transition: 0.1s ease;
        }
      }
    }
  }
  &-right {
    @apply justify-end;
  }
  &-left,
  &-right {
    @apply flex h-full items-center;
  }
}

.content {
  @apply absolute flex flex-col items-center justify-center;
  background: white;
  min-height: 60vh;
  max-height: calc(100% - 120px);
  margin-left: auto;
  margin-right: auto;
  max-width: calc(100% - 120px);
  width: 1040px;
  z-index: 510;
}
.lightbox {
  @apply fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center;
  background: rgba(9, 30, 66, 0.54);
  width: 100vw;
  height: 100vh;
  z-index: 99000;
  opacity: 1;
  transition: opacity 220ms ease 0s;
}
.lightbox-enter-active,
.lightbox-leave-active {
  transition: all 0.3s ease;
}
.lightbox-enter,
.lightbox-leave-to {
  opacity: 0;
  transform: translateY(10px);
  -webkit-transform: translateY(10px);
  -moz-transform: translateY(10px);
  -ms-transform: translateY(10px);
  -o-transform: translateY(10px);
}

// .re-button {
//   @apply px-5 py-2.5 text-white font-bold rounded outline-none duration-200;
//   background: var(--primary);
//   &:hover {
//     box-shadow: 0px 4px 20px 0px rgb(51 196 204 / 50%);
//   }
// }
</style>

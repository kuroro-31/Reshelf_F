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
          <button class="re-button-primary-border" @click="openModal">
            ログイン
          </button>
        </re-button>

        <!-- コンポーネント ReModal -->
        <ReModal v-if="modal" @close="closeModal">
          <template slot="header">新規登録・ログイン</template>
          <!-- default -->
          <div class="w-full flex justify-center">
            <button class="fb-btn">Facebookでログイン</button>
          </div>
          <!-- /default -->
          <template slot="footer">
            ※
            Reshelfでは、多重アカウントを防止するためFacebookでのアカウント作成をお願いしています。
          </template>
        </ReModal>
      </div>
    </div>
  </nav>
</template>

<script>
import ReButton from '@/components/atoms/button/ReButton'
import ReModal from '@/components/atoms/modal/ReModal'

export default {
  components: {
    ReButton,
    ReModal,
  },
  data() {
    return {
      visible: false,
      modal: false,
      message: '',
    }
  },
  methods: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
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
.fb-btn {
  @apply py-3 px-4 text-white rounded-lg font-bold outline-none;
  background: #1976f2;
  &:hover {
    @apply duration-300;
    -webkit-box-shadow: 0 8px 25px -8px #1976f2;
    box-shadow: 0 8px 25px -8px #1976f2;
  }
}
</style>

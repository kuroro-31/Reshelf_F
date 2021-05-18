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
        <!-- カート -->
        <button class="cart" @click="cart = !cart">
          <shopping-cart-icon
            size="1.5x"
            class="cart-icon"
          ></shopping-cart-icon>
          <transition>
            <div v-if="cart">
              <div class="cart-contents">
                <div class="p-8">カートの中身は空です</div>
              </div>
            </div>
          </transition>
        </button>
        <div v-if="cart" class="dropdown-bg" @click="cart = false"></div>

        <!-- ログイン -->
        <re-button class="re-button">
          <button class="re-button-primary-filled" @click="openModal">
            ログイン
          </button>
        </re-button>
        <ReModal v-if="modal" @close="closeModal">
          <template slot="header">Welcome To Reshelf！</template>
          <!-- default -->
          <div class="w-full flex justify-center">
            <form @submit.prevent="submit">
              <button class="fb-btn">Facebookで新規登録・ログイン</button>
            </form>
          </div>
          <!-- /default -->
          <template slot="footer">
            ※
            Reshelfでは、多重アカウントを防止するため、Facebookでのアカウント作成をお願いしています。
          </template>
        </ReModal>
      </div>
    </div>
  </nav>
</template>

<script>
import ReButton from '@/components/atoms/button/ReButton'
import ReModal from '@/components/atoms/modal/ReModal'
import { ShoppingCartIcon } from 'vue-feather-icons'

export default {
  components: {
    ReButton,
    ReModal,
    ShoppingCartIcon,
  },
  data() {
    return {
      visible: false,
      modal: false,
      message: '',
      cart: false,
    }
  },
  methods: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    async submit() {
      await this.$axios
        .post('/api/auth/facebook')
        .then(() => {})
        .catch((err) => {
          console.log(err)
        })
      // await this.$auth.loginWith('local', {
      //   data: this.form,
      // })
      // this.$router.push({
      //   path: this.$route.query.redirect || '/',
      // })
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
  }
  &-right {
    @apply justify-end;
  }
  &-left,
  &-right {
    @apply flex h-full items-center;
  }
}
.cart {
  @apply px-6 outline-none relative;
  height: 45px;
  &:hover {
  }
  &-icon {
    @apply flex-shrink-0 inline-block;
  }
  &-contents {
    @apply absolute top-0 right-0 z-50 rounded shadow-lg cursor-default;
    margin-top: 70px;
    width: 300px;
    background: #fff;
  }
}
.fb-btn {
  @apply py-3 px-4 text-white rounded-lg text-lg font-bold outline-none;
  background: #1976f2;
  &:hover {
    @apply duration-300;
    -webkit-box-shadow: 0 8px 25px -8px #1976f2;
    box-shadow: 0 8px 25px -8px #1976f2;
  }
}
.show {
  @apply block;
}
.dropdown-bg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
</style>

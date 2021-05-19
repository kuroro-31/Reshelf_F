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
      "
    >
      <div class="nav-left py-2.5">
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

      <div class="nav-center flex items-center py-2.5"></div>

      <div class="nav-right">
        <!-- お気に入り -->
        <button
          class="dropdown"
          @mouseover="like = true"
          @mouseleave="like = false"
        >
          <heart-icon size="1.5x" class="dropdown-icon"></heart-icon>
          <transition>
            <div v-if="like">
              <div
                class="dropdown-contents"
                @mouseover="like = true"
                @mouseleave="like = false"
              >
                <div class="p-8">お気に入りの中身は空です</div>
              </div>
            </div>
          </transition>
        </button>

        <!-- カート -->
        <button
          class="dropdown"
          @mouseover="cart = true"
          @mouseleave="cart = false"
        >
          <shopping-cart-icon
            size="1.5x"
            class="dropdown-icon"
          ></shopping-cart-icon>
          <transition>
            <div v-if="cart">
              <div
                class="dropdown-contents"
                @mouseover="cart = true"
                @mouseleave="cart = false"
              >
                <div class="p-8">カートの中身は空です</div>
              </div>
            </div>
          </transition>
        </button>

        <!-- ユーザードロップダウン -->
        <button
          class="dropdown"
          @mouseover="user = true"
          @mouseleave="user = false"
        >
          <img
            class="dropdown-img"
            width="40px"
            height="40px"
            src="https://i.gyazo.com/ea69860bb5555cb60c4860a3bd7b3e70.png"
          />
          <transition>
            <div v-if="user">
              <div
                class="dropdown-contents"
                @mouseover="user = true"
                @mouseleave="user = false"
              >
                <div class="p-8"></div>
              </div>
            </div>
          </transition>
        </button>

        <!-- ログイン -->
        <div class="py-2.5">
          <re-button class="re-button">
            <button
              :class="
                modal ? 're-button-primary-border' : 're-button-primary-filled'
              "
              @click="modal = !modal"
            >
              ログイン
            </button>
          </re-button>
          <ReModal v-if="modal" @close="modal = !modal">
            <template slot="header">Welcome To Reshelf！</template>
            <!-- default -->
            <div class="w-full flex justify-center">
              <form @submit.prevent="submit">
                <button
                  :class="post ? 'fb-btn-posted' : 'fb-btn'"
                  @click="post = !post"
                >
                  Facebookで新規登録・ログイン
                </button>
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
    </div>
  </nav>
</template>

<script>
import ReButton from '@/components/atoms/button/ReButton'
import ReModal from '@/components/atoms/modal/ReModal'
import { ShoppingCartIcon, HeartIcon } from 'vue-feather-icons'

export default {
  components: {
    ReButton,
    ReModal,
    ShoppingCartIcon,
    HeartIcon
  },
  data() {
    return {
      visible: false,
      modal: false,
      message: '',
      cart: false,
      user: false,
      post: false,
      like: false
    }
  },
  methods: {
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
    }
  }
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
.dropdown {
  @apply px-3 outline-none relative;
  height: 60px;
  &-icon {
    @apply flex-shrink-0 inline-block cursor-pointer;
  }
  &-img {
    @apply object-cover rounded-full shadow-lg cursor-pointer;
    width: 40px;
    height: 40px;
  }
  &-contents {
    @apply absolute top-0 right-0 z-50 rounded shadow-lg;
    margin-top: 60px;
    width: 300px;
    background: #fff;
  }
}
.fb-btn {
  @apply py-3 px-4 text-white rounded-lg text-lg font-bold outline-none duration-200;
  background: #1976f2;
  border: 1px solid #1976f2;

  &:hover {
    -webkit-box-shadow: 0 8px 25px -8px #1976f2;
    box-shadow: 0 8px 25px -8px #1976f2;
  }
}
.fb-btn-posted {
  @apply py-3 px-4 text-white rounded-lg text-lg font-bold outline-none;
  color: #1976f2;
  border: 1px solid #1976f2;
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

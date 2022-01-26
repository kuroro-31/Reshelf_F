<template>
  <div>
    <button
      v-if="$store.state.authenticate.authenticated"
      class="dropdown"
      @mouseover="dropdown = true"
      @mouseleave="dropdown = false"
    >
      <img
        class="dropdown-img"
        width="40px"
        height="40px"
        src="https://i.gyazo.com/ea69860bb5555cb60c4860a3bd7b3e70.png"
      />
      <transition>
        <div
          v-if="dropdown"
          class="dropdown-contents scroll-none"
          @mouseover="dropdown = true"
          @mouseleave="dropdown = false"
        >
          <div class="menu">
            <!-- <div v-if="user" class="menu-name">
              <img
                width="50px"
                height="50px"
                src="https://i.gyazo.com/ea69860bb5555cb60c4860a3bd7b3e70.png"
              />
              <span class="menu-name-person">
                {{ user.name }}
              </span>
            </div> -->
            <div class="menu-me">
              <span class="menu-me-link" @click="mypage">マイページ</span>
            </div>
            <div class="menu-me">
              <div class="">
                <select v-model="$colorMode.preference">
                  <option value="system">System</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              <button class="menu-me-link" @click="logout">ログアウト</button>
            </div>
          </div>
        </div>
      </transition>
    </button>

    <div v-if="!$store.state.authenticate.authenticated" class="py-2.5 ml-4">
      <ReButton class="re-button">
        <button
          class="re-button-primary-filled bg-primary"
          @click="modal = !modal"
        >
          新規登録・ログイン
        </button>
      </ReButton>
      <ReModal v-if="modal" @close="modal = !modal">
        <template slot="header">Welcome To Reshelf！</template>
        <!-- default -->
        <div class="w-full flex flex-col justify-center">
          <form @submit.prevent="login">
            <!-- メールアドレス -->
            <label class="font-semibold text-xs text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              v-model.trim="auth.email"
              type="email"
              placeholder="Enter email"
              autofocus
              class="border rounded px-3 py-2 mt-1 mb-5 text-xs w-full"
            />
            <small v-if="errors.email" class="form-text text-danger">
              {{ errors.email[0] }}
            </small>

            <!-- パスワード -->
            <label class="font-semibold text-xs text-gray-600 pb-1 block">
              Password
            </label>
            <input
              v-model.trim="auth.password"
              type="password"
              placeholder="Password"
              class="border rounded px-[30px] py-2 mt-1 mb-5 text-xs w-full"
            />
            <small v-if="errors.password" class="form-text text-danger">
              {{ errors.password[0] }}
            </small>

            <!-- ログインボタン -->
            <re-button class="re-button">
              <button
                type="submit"
                class="re-button-primary-filled bg-primary ml-auto"
              >
                ログイン
              </button>
            </re-button>
          </form>
          <div class="divider"></div>
          <FacebookLogin />
        </div>
        <!-- /default -->
        <template slot="footer">
          ※
          Reshelfでは、多重アカウントを防止するため、Facebookでのアカウント作成をお願いしています。
        </template>
      </ReModal>
    </div>
  </div>
</template>
<script>
import ReModal from '@/components/atoms/ReModal'
import ReButton from '@/components/atoms/ReButton.vue'
import FacebookLogin from '@/components/atoms/auth/FacebookLogin'
export default {
  components: {
    ReButton,
    ReModal,
    FacebookLogin,
  },
  data() {
    return {
      modal: false,
      dropdown: false,
      auth: {
        email: '',
        password: '',
      },
      errors: {},
      alert: '',
      user: this.$store.getters['authenticate/user'],
    }
  },
  methods: {
    mypage() {
      this.$router.push(`/user/${this.user.id}`)
    },
    async login() {
      await this.$store.dispatch('authenticate/login', this.auth)
      this.modal = false
    },
    async logout() {
      await this.$store.dispatch('authenticate/logout')
    },
  },
}
</script>
<style lang="scss" scoped>
.dropdown {
  @apply px-3 relative;
  height: 60px;
  &-img {
    @apply object-cover rounded-full shadow-lg cursor-pointer;
    width: 40px;
    height: 40px;
  }
  &-contents {
    @apply absolute top-0 right-0 z-50 rounded-lg shadow-lg overflow-y-auto cursor-default;
    background-color: var(--bg-secondary);
    @screen lg {
      margin-top: 60px;
      width: 300px;
      max-height: calc(100vh - 120px);
    }
  }
}
.menu {
  &-name {
    @apply flex items-center p-4;
    border-bottom: 1px solid #ccc;
    &-person {
      @apply ml-2;
      max-width: 140px;
    }
  }
  &-me {
    @apply flex flex-col items-start p-3;
    border-bottom: 1px solid #ccc;
    &-title {
      @apply text-sm font-bold pt-2;
      color: var(--sub-color);
    }
    &-link {
      @apply py-3 w-full rounded-lg text-left px-4 duration-200;
      &:hover {
        @apply cursor-pointer;
        transform: translateX(5px);
        background: #f0f2f6;
        border-radius: 6px;
      }
    }
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(-15px);
    opacitx: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>

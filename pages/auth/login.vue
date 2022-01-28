<template>
  <div class="relative">
    <div id="login" class="login">
      <div class="w-full h-full flex items-center justify-center">
        <div class="login-title flex flex-col z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            viewBox="0 0 510.699 104.104"
          >
            <g id="logo-group" transform="translate(-424.023 -457.48)">
              <path
                id="path170980"
                d="M479.9,526.74c12.432-4.372,19.263-14.482,19.263-30.6,0-21.039-13.115-31.286-36.066-31.286H424.023v95.632h21.449V529.2h13.8l16.941,31.286h24.181Zm-18.034-15.028H445.336V482.475h16.531c11.066,0,17.214,3.962,17.214,14.482,0,10.656-6.284,14.755-17.214,14.755Z"
                fill="#fff"
              />
              <path
                id="path170982"
                d="M574.15,495.863c-6.011-6.284-14.482-9.563-25.138-9.563-21.449,0-35.93,15.165-35.93,37.707s14.345,37.16,36.613,37.16c12.022,0,22.268-4.235,29.509-12.3L568.548,537.8a24.488,24.488,0,0,1-17.077,7.241c-8.88,0-15.3-5.328-17.624-14.618l-.273-1.23h50.138c.683-14.482-2.6-25.957-9.563-33.334Zm-10.246,22.4H533.3l.137-1.093c1.639-9.836,7.651-15.984,15.711-15.984,8.743,0,14.618,6.558,14.618,16.257Z"
                fill="#fff"
              />
              <path
                id="path170984"
                d="M631.193,515.408c-6.968-2.186-12.979-4.1-12.979-8.743,0-3.825,3.006-6.148,7.924-6.148,5.875,0,13.662,2.6,22,7.241l6.831-13.8a55.034,55.034,0,0,0-27.87-7.787c-17.077,0-27.734,8.743-27.734,22.815-.137,15.3,12.842,19.263,23.225,22.541,7.1,2.186,13.252,4.1,13.252,9.153,0,3.825-3.415,6.148-8.743,6.148-7.924,0-16.8-3.142-24.728-8.743l-6.421,13.525c8.2,6.421,18.989,9.973,30.6,9.973,17.487,0,28.827-9.017,28.827-22.951.137-15.437-13.252-19.536-24.045-22.815Z"
                fill="#fff"
              />
              <path
                id="path170986"
                d="M717.468,486.03c-10.246.137-18.171,4.645-22.815,12.979l-1.913,3.279V458.712H671.975V560.219h20.766V524.152c0-11.339,6.148-18.853,15.437-18.853,8.334,0,13.525,5.875,13.525,15.3v39.755h20.766V513.907c0-16.941-9.836-27.87-25-27.87Z"
                fill="#fff"
              />
              <path
                id="path170988"
                d="M818.923,495.863c-6.011-6.284-14.482-9.563-25.138-9.563-21.449,0-35.93,15.165-35.93,37.707s14.345,37.16,36.613,37.16c12.022,0,22.268-4.235,29.509-12.3L813.321,537.8a24.488,24.488,0,0,1-17.077,7.241c-8.88,0-15.3-5.328-17.624-14.618l-.273-1.23h50.138c.683-14.482-2.6-25.957-9.563-33.334Zm-10.246,22.4h-30.6l.137-1.093c1.639-9.836,7.651-15.984,15.711-15.984,8.743,0,14.618,6.558,14.618,16.257Z"
                fill="#fff"
              />
              <path
                id="path170990"
                d="M865.444,560.217V458.711H844.678V560.217Z"
                fill="#fff"
              />
              <path
                id="path170992"
                d="M913,477.153a9.189,9.189,0,0,1,6.694-2.459,14.765,14.765,0,0,1,7.924,2.6l7.1-15.028a37.409,37.409,0,0,0-18.444-4.782c-15.847,0-26.094,9.7-26.094,24.728v7.924h-9.563v13.935h9.563v55.877h20.493V504.081h15.984V490.146H910.677v-6.421a9.38,9.38,0,0,1,2.6-6.831Z"
                fill="#fff"
              />
            </g>
          </svg>

          <h2>ログインまたはアカウントを作成</h2>
        </div>
        <div class="login-content">
          <div class="bg-white shadow w-full divide-y divide-gray-200">
            <form class="px-5 py-7" @submit.prevent="login">
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
                class="border rounded px-3 py-2 mt-1 mb-5 text-xs w-full"
              />
              <small v-if="errors.password" class="form-text text-danger">
                {{ errors.password[0] }}
              </small>

              <!-- ログインボタン -->
              <re-button class="re-button re-button-small">
                <button
                  type="submit"
                  class="re-button-primary-filled bg-primary"
                >
                  Login
                </button>
              </re-button>
            </form>

            <div class="py-5">
              <div class="grid grid-cols-2 gap-1">
                <div class="text-center sm:text-left whitespace-nowrap">
                  <button
                    class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-xs rounded text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-4 h-4 inline-block align-text-top"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="inline-block ml-1">Forgot Password</span>
                  </button>
                </div>
                <div class="text-center sm:text-right whitespace-nowrap">
                  <button
                    class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-xs rounded text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-4 h-4 inline-block align-text-bottom"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span class="inline-block ml-1">Help</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5 bg-white">
            <div class="grid grid-cols-2 gap-1">
              <div class="text-center sm:text-left whitespace-nowrap">
                <nuxt-link
                  class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-xs rounded text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                  to="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span class="inline-block ml-1">Back to your-app.com</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>
<script>
import ReButton from '@/components/atoms/ReButton.vue'
export default {
  components: {
    ReButton,
  },
  data: () => ({
    auth: {
      email: '',
      password: '',
    },
    errors: {},
  }),
  methods: {
    async login() {
      await this.$store.dispatch('user/login', this.auth)
    },
  },
}
</script>
<style lang="scss" scoped>
.login {
  @apply h-screen w-screen overflow-hidden flex justify-center;
  // background-image: url('https://source.unsplash.com/1920x1080/?happy');
  // background-position: center !important;
  // background-repeat: no-repeat !important;
  background: #16afaf;

  object-fit: cover !important;
  &-title {
    h2 {
      @apply text-2xl font-bold mt-4;
      color: var(--fff);
    }
  }
  &-content {
    @apply z-20 md:ml-28 rounded-lg;
  }
}
.bg {
  @apply absolute w-screen h-screen top-0 right-0 left-0 bottom-0 m-0 p-0 z-10;
  background: rgba(#000000, 0.3);
}
</style>

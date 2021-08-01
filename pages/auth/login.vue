<template>
  <div class="relative">
    <div id="login" class="login">
      <div class="w-full h-full flex items-center justify-center">
        <div class="login-title flex flex-col z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            height="100"
            viewBox="0 0 459.458 97.981"
          >
            <g transform="translate(-580.567 1559.479)">
              <g transform="translate(580.567 -1559.479)">
                <path
                  d="M532.324,212.714c-28.021-9.617-40.435,12.166-39.952,13.393.522,1.306,2.35,1.044,7.05,1.306,3.517.2,7.473,2.293,9.241,3.335a47.24,47.24,0,0,1,23.66-18.033Z"
                  transform="translate(-492.358 -210.173)"
                  fill="#fff"
                />
                <path
                  d="M615.356,259.78a3.518,3.518,0,0,0-.021-.363,6.839,6.839,0,0,0-.5-2.146c-.956-2.943-2.846-6.732-2.35-8.719,1.828-7.311-.144-14.649-4.833-20.616a47.133,47.133,0,0,0-84.21,29.1c0,.491,0,.979.023,1.465l-.023-.029a49.353,49.353,0,0,0,49.352,49.352s4.084.334,13.709-.653c10.184-1.044,10.818-3.264,15.276-3.264,4.7,0,7.05,1.567,7.834.522s-2.611-7.311-2.872-11.489.261-11.489-.522-11.228-5.484,5.484-8.617,8.095-5.222,3.395-5.484,4.178,0,2.35-.783,2.872a26.144,26.144,0,0,1-18.018,1.757,28.071,28.071,0,0,1-17.4-48.308,27.483,27.483,0,0,1,4.092,10.006c.783,5.222.783,9.578.914,10.142s.914.3,1.436-.219,8.095-4.439,9.923-10.706c1.8-6.191,2.59-9.583,2.35-16.973h.645a28.083,28.083,0,0,1,27.075,20.634,6.915,6.915,0,0,0,13.007-3.275v-.131Z"
                  transform="translate(-515.324 -209.9)"
                  fill="#fff"
                />
              </g>
              <g transform="translate(733.152 -1543.776)">
                <g transform="translate(0)">
                  <path
                    d="M547.315,538.925h-10.7v66.583h30.76v-9.362H547.314Z"
                    transform="translate(-536.615 -535.004)"
                    fill="#fff"
                  />
                  <path
                    d="M654.169,538.925H616.244v66.583h37.925v-9.362H626.943V573.792h24.838V564.43H626.943V553.922l-7.738-5.636h34.964Z"
                    transform="translate(-568.52 -535.004)"
                    fill="#fff"
                  />
                  <path
                    d="M742.432,543.559l-5.35-11.177-5.35,11.177-28.467,59.323h10.7l5.636-11.75-6.018-4.394h38.88l7.738,16.144h10.7Zm-16.24,33.817,10.89-22.641,10.89,22.641Z"
                    transform="translate(-603.387 -532.382)"
                    fill="#fff"
                  />
                  <path
                    d="M867.72,577.706c8.215-1.719,15.666-6.4,15.666-19.01,0-18.15-15.476-19.775-26.557-19.775H843.837v66.583h10.7V578.566h1.242L875.84,605.6h12.61Zm-13.182-24.455-6.974-4.967H859.5c5.636,0,13.183.86,13.183,10.413,0,9.648-7.547,10.508-13.183,10.508h-4.967Z"
                    transform="translate(-659.709 -535.002)"
                    fill="#fff"
                  />
                  <path
                    d="M997.769,582.735,959.08,543.377l-6.974-7.069-3.725-3.917v70.5h10.7V556.462l38.689,39.358,6.974,7.069,3.726,3.917v-70.5h-10.7Z"
                    transform="translate(-701.597 -532.386)"
                    fill="#fff"
                  />
                </g>
              </g>
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
              <button
                type="submit"
                class="
                  transition
                  duration-200
                  bg-blue-500
                  hover:bg-blue-600
                  focus:bg-blue-700
                  focus:shadow-sm
                  focus:ring-4
                  focus:ring-blue-500
                  focus:ring-opacity-50
                  text-white
                  w-full
                  py-2
                  rounded
                  text-xs
                  shadow-sm
                  hover:shadow-md
                  font-semibold
                  text-center
                  inline-block
                "
              >
                <span class="inline-block mr-2">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>

            <div class="py-5">
              <div class="grid grid-cols-2 gap-1">
                <div class="text-center sm:text-left whitespace-nowrap">
                  <button
                    class="
                      transition
                      duration-200
                      mx-5
                      px-5
                      py-4
                      cursor-pointer
                      font-normal
                      text-xs
                      rounded
                      text-gray-500
                      hover:bg-gray-100
                      focus:outline-none
                      focus:bg-gray-200
                      focus:ring-2
                      focus:ring-gray-400
                      focus:ring-opacity-50
                      ring-inset
                    "
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
                    class="
                      transition
                      duration-200
                      mx-5
                      px-5
                      py-4
                      cursor-pointer
                      font-normal
                      text-xs
                      rounded
                      text-gray-500
                      hover:bg-gray-100
                      focus:outline-none
                      focus:bg-gray-200
                      focus:ring-2
                      focus:ring-gray-400
                      focus:ring-opacity-50
                      ring-inset
                    "
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
                  class="
                    transition
                    duration-200
                    mx-5
                    px-5
                    py-4
                    cursor-pointer
                    font-normal
                    text-xs
                    rounded
                    text-gray-500
                    hover:bg-gray-200
                    focus:outline-none
                    focus:bg-gray-300
                    focus:ring-2
                    focus:ring-gray-400
                    focus:ring-opacity-50
                    ring-inset
                  "
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
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
  components: {},
  data: () => ({
    auth: {
      email: '',
      password: '',
    },
    errors: {},
  }),
  mounted() {
    let url = []
    url[0] =
      'https://res.cloudinary.com/dphbuc0g7/image/upload/v1627713005/arno-smit-sKJ7zSylUao-unsplash_nowss7.jpg'
    url[1] =
      'https://res.cloudinary.com/dphbuc0g7/image/upload/v1627712720/101_xzckh4.png'
    url[2] =
      'https://res.cloudinary.com/dphbuc0g7/image/upload/v1627712720/100_bczc5x.png'
    url[3] =
      'https://res.cloudinary.com/dphbuc0g7/image/upload/v1627718012/krystina-rogers-5aXEo-hGwU0-unsplash_hggyrk.jpg'
    url[4] =
      'https://res.cloudinary.com/dphbuc0g7/image/upload/v1627718455/gradienta-Ebln5Lj2P-c-unsplash_ee1alo.jpg'
    let n = Math.floor(Math.random() * url.length)
    let elm = document.getElementById('login')
    elm.style.background = 'url(' + url[n] + ')'
  },
  methods: {
    ...mapActions({
      signIn: 'authenticate/login',
    }),
    async login() {
      axios.defaults.withCredentials = true

      this.$nuxt.$loading.start()
      await axios.get('/sanctum/csrf-cookie').then(async () => {
        await axios
          .post('/api/auth/login', this.auth)
          .then(({ data }) => {
            this.signIn()
            this.$nuxt.$router.back()
            // this.$nuxt.$router.push({ path: '/' })
          })
          .catch(({ response: { data } }) => {
            alert(data.message)
          })
      })
      this.$nuxt.$loading.finish()
    },
  },
}
</script>
<style lang="scss" scoped>
.login {
  @apply h-screen w-screen overflow-hidden flex justify-center;
  // background-image: url('https://source.unsplash.com/1920x1080/?happy');
  background-position: center !important;
  background-repeat: no-repeat !important;
  object-fit: cover !important;
  &-title {
    h2 {
      @apply text-2xl font-bold mt-2;
      color: var(--fff);
    }
  }
  &-content {
    @apply z-20 md:ml-28 rounded-lg;
  }
}
.bg {
  @apply absolute w-screen h-screen top-0 right-0 left-0 bottom-0 m-0 p-0 z-10;
  background: rgba(#000000, 0.4);
}
</style>

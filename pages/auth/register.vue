<template>
  <div class="container">
    <div class="col-md-6 offset-md-3">
      <div class="card mt-4">
        <div class="card-header">
          <p class="mb-0">Register</p>
        </div>
        <div class="card-body">
          <form @submit.prevent="register">
            <!-- 標準のsubmitは実行しない -->
            <div class="form-group">
              <label>Name</label>
              <input
                v-model="name"
                type="test"
                :class="{ 'is-invalid': errors.name }"
                placeholder="Name"
              />
              <div v-if="errors.name" class="invalid-feedback">
                {{ errors.name[0] }}
              </div>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                v-model="email"
                type="email"
                :class="{ 'is-invalid': errors.email }"
                placeholder="Email"
              />
              <div v-if="errors.email" class="invalid-feedback">
                {{ errors.email[0] }}
              </div>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                v-model="password"
                type="password"
                :class="{ 'is-invalid': errors.password }"
                placeholder="Password"
              />
              <div v-if="errors.password" class="invalid-feedback">
                {{ errors.password[0] }}
              </div>
            </div>
            <div class="form-group">
              <input
                type="submit"
                value="Register"
                class="btn btn-default w-100"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { UserCreate } from '@/apis'
import { UserCreateRequest } from '@/types'
export default Vue.extend({
  // middleware: 'guest', //ログイン状態であればリダイレクトする
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
      errors: {},
    }
  },
  methods: {
    async register() {
      const params: UserCreateRequest = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirm: this.password,
      }

      this.$nuxt.$loading.start()
      const created: boolean = await UserCreate(params)
      this.$nuxt.$loading.finish()

      if (created) {
        this.$nuxt.$emit('signedIn')
        this.$router.push({ path: '/' })
      }
    },
  },
})
</script>

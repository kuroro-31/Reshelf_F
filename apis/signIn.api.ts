import { SignInRequest } from '@/types'
import axios from 'axios'

export const UserSignIn = async (params: SignInRequest) => {
  axios.defaults.withCredentials = true

  let signedIn = false
  await axios.get('/sanctum/csrf-cookie').then(async () => {
    await axios
      .post('/api/auth/login', params)
      .then((response: any) => {
        if (response.status === 200) {
          signedIn = true
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  })
  return signedIn
}

export const UserSignOut = async () => {
  axios.defaults.withCredentials = true

  let signedOut = false
  await axios.get('/sanctum/csrf-cookie').then(async () => {
    await axios
      .post('/api/logout')
      .then((response: any) => {
        if (response.status === 200) {
          signedOut = true
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  })
  return signedOut
}

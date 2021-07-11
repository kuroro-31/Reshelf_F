import { User, UserCreateRequest, UserCreateResponse } from '@/types'
import axios from 'axios'

export const UserCreate = async (params: UserCreateRequest) => {
  axios.defaults.withCredentials = true

  let created = false
  await axios.get('/sanctum/csrf-cookie').then(async (response) => {
    await axios
      .post('/api/auth/register', params)
      .then((response: UserCreateResponse) => {
        if (response.status === 200) {
          created = true
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  })

  return created
}

export const UserFind = async () => {
  axios.defaults.withCredentials = true

  let user: User | null = null

  await axios
    .get('/api/user')
    .then(async (response) => {
      if (response.status === 200) {
        user = response.data
      }
    })
    .catch((error: any) => {
      return null
    })

  return user
}
